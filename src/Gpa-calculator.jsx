import CourseForm from "./CourseForm";
import './Gpa-calculator.css';
import { useState } from "react";
import { useEffect } from "react";

const GpaCalculator = () => {

  const gradeToPoint = {
    'A': 5,
    'B': 4,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 0
  };


  const [courses, setCourses] = useState(() => {
    const saveCourses = localStorage.getItem('courses');
    return saveCourses ? JSON.parse(saveCourses) : [];
  });

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses])

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  }

  const addCourse = () => {
    setCourses([...courses, { name: '', units: '', grade: '' }]);
  }

  const removeCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  }

  const [gpaResult, setGpaResult] = useState(null);

  const calculateGPA = () => {
    let totalScore = 0;
    let totalUnits = 0;

    courses.forEach(course => {
      const gradePoint = gradeToPoint[course.grade.toUpperCase()]; // convert letter to number
      const unit = parseFloat(course.units);

      if (gradePoint != null && !isNaN(unit)) {
        totalScore += gradePoint * unit;
        totalUnits += unit;
      }
    });

    if (totalUnits === 0) return null; // Avoid division by zero

    return (totalScore / totalUnits).toFixed(2);
  };

  useEffect(() => {
    if (courses.length > 0) {
      const gpa = calculateGPA(); // your function
      setGpaResult(gpa);
    }
  }, []); // run once when component mounts


  return (
    <div className="GpaCalculator">
      <h2>GPA Calculator</h2>

      {courses.length === 0 && (
        <p>No courses added yet. Click "Add Course" to start.</p>
      )}

      {courses.map((course, index) => (
        <CourseForm 
          key={index}
          course={course} 
          onChange={(field, value) =>
            handleCourseChange(index, field, value)
          } 
          onRemove={() => removeCourse(index)}
        />
      ))}

      {gpaResult !== null && (
        <div className="result">
          <h2>Your GPA: {gpaResult}</h2>
        </div>
      )}

      <div className="actions">
        <button onClick={addCourse}>Add Course</button>

        <button onClick={() => setGpaResult(calculateGPA())}>Calculate GPA</button>

        <button onClick={() => setGpaResult(null)}>Clear result</button>
      </div>

    </div>
  );
}
 
export default GpaCalculator;