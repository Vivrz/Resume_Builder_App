
import React from "react";
import "./Education.css";
import { useNavigate } from "react-router-dom";
import "./Professional_Exp.jsx";

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
                    <button type="button" className="Prev" onClick={handlePrev}>
                        Prev {'<-'}
                    </button>
                </div>
            </div>
    );
};

export default Education;

