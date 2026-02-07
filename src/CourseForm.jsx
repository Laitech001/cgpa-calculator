const CourseForm = ({ course, onChange, onRemove}) => {

  return ( 
    <div className="course-card">

      <input 
        type="text" 
        placeholder="Course Name" 
        value={course.name} 
        onChange={(e) =>
          onChange('name', e.target.value)
        }
      />

      <input 
        type="number" 
        min="0"
        placeholder="Units" 
        value={course.units} 
        onChange={(e) =>
          onChange('units', e.target.value)
        } 
      />
          

      <select
        value={course.grade}
        onChange={(e) => 
          onChange('grade', e.target.value)
        }
      >
        <option value="">Select Grade</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>

      <button onClick={ onRemove }> Remove </button>
      
    </div>
  );
  
}
 
export default CourseForm