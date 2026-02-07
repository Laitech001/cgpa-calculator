import { useState } from "react";
import { useEffect } from "react";
import './cgpa-calculator.css'

const CgpaCalculator = () => {

  const [cgpaData, setCgpaData] = useState(() => {
    const savedData = localStorage.getItem("cgpa-data");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstSemester: "",
          secondSemester: "",
          result: null
        };
  });

  useEffect(() => {
    localStorage.setItem("cgpa-data", JSON.stringify(cgpaData));
  }, [cgpaData]);

  const handleChange = (field, value) => {
    let val = parseFloat(value);
    if (isNaN(val)) val = "";
    else if (val > 5) val = 5;
    else if (val < 0) val = 0;

    setCgpaData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // calculate result automatically without button

  useEffect(() => {
    const first = parseFloat(cgpaData.firstSemester);
    const second = parseFloat(cgpaData.secondSemester);

    if (!isNaN(first) && !isNaN(second)) {
      setCgpaData(prev => ({ ...prev, result: ((first + second) / 2).toFixed(2) }));
    } else {
      setCgpaData(prev => ({ ...prev, result: null }));
    }
  }, [cgpaData.firstSemester, cgpaData.secondSemester]);

  // the code end here

  const clearCgpaResult = () => {
    localStorage.removeItem('cgpa-data')

    setCgpaData({
      firstSemester: "",
      secondSemester: "",
      result: null
    })
  }
  return ( 
    <div className="CgpaCalculator">
      <header>
        <h2>CGPA Calculator</h2>

        <p>Input your GPA for both semester to see your result automatically</p>
      </header>

      <div className="cgpainput">
        <input
          type="number"
          placeholder="First Semester GPA"
          value={cgpaData.firstSemester}
          onChange={(e) =>
            handleChange("firstSemester", e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Second Semester GPA"
          value={cgpaData.secondSemester}
          onChange={(e) =>
            handleChange("secondSemester", e.target.value)
          }
        />
      </div>

      {cgpaData.result && (
          <p>Your CGPA is: {cgpaData.result}</p>
        )}
      <div className="clearBtn">
        <button onClick={clearCgpaResult}>
          Clear Data
        </button>
      </div>
      
    </div>
   );
}
 
export default CgpaCalculator;