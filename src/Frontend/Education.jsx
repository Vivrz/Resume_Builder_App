
// import React from "react";
// import "./Education.css";
// import { useNavigate } from "react-router-dom";

// const Education = () => {
//     const navigate = useNavigate();

//     const  handleNext = () =>{
//         navigate('/Skills');
//     }
//     const handlePrev = () =>{
//         navigate('/Professional_Exp');
//     }
//   return (
//     <div
//       className="ProfessionalInfo-container"
//       style={{
//         margin: 0,
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#121829",
//         color: "#fff",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <div className="ProfessionalInfo-box">
//         <div>
//           <h1>Education</h1>
//           <h2>Add your education details</h2>
//         </div>

//         <form>
//           <input type="text" placeholder="University Name" className="input-field1" />
//           <input type="text" placeholder="Degree" className="input-field1" />
//           <input type="text" placeholder="Major" className="input-field1" />
//           <label> Start Date :</label>
//           <input type="date" placeholder="Start date" className="input-field1" />
//           <label> End Date :</label>
//           <input type="date" placeholder="End date" className="input-field1" />
//           <label for="description">Description</label>
//           <textarea id="description" name="description" rows="4" placeholder="Enter your education details here..."></textarea>
//           <button type="submit" className="save-button">
//             Save
//           </button>
//         </form>
//         <div className = 'nav-buttons'>
//         <button type="button" className="next" onClick={handleNext}>
//           Next {'->'}
//         </button>
//         <br /><br />
//         <button type="button" className="prev-button" onClick={handleNext}>
//           Next {'->'}
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

import React from "react";
import "./Education.css";
import { useNavigate } from "react-router-dom";

const Education = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/Skills');
    };

    const handlePrev = () => {
        navigate('/Professional_Exp');
    };

    return (
        <div className="Education-container">
            <div className="Education-box">
                <div>
                    <h1>Education</h1>
                    <h2>Add your education details</h2>
                </div>

                <form>
                    <input type="text" placeholder="University Name" className="input-field1" />
                    <input type="text" placeholder="Degree" className="input-field1" />
                    <input type="text" placeholder="Major" className="input-field1" />
                    <label> Start Date :</label>
                    <input type="date" placeholder="Start date" className="input-field1" />
                    <label> End Date :</label>
                    <input type="date" placeholder="End date" className="input-field1" />
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" rows="4" placeholder="Enter your education details here..."></textarea>
                    <button type="submit" className="save-button">
                        Save
                    </button>
                </form>
    
                   
                    <button type="button" className="next" onClick={handleNext}>
                        Next {'->'}
                    </button>
                </div>
            </div>
    );
};

export default Education;

