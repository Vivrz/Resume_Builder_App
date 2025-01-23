import React from "react";
import "./Professional_Info.css";

const Professinal_Exp = () => {
return (
    <div
        className="PersonalInfo-container"
        style={{
            margin: 0,
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#121829",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
    >
        <div className="PersonalInfo-box">
            <div>
                <h1>
                Professional Experience
                </h1>
                <h2>Add previous job experience</h2>
            </div>

            <form>
                <input type="text" placeholder="Position title" className="input-field1" />
                <input type="text" placeholder="Company name" className="input-field1" />
                <input type="text" placeholder="City" className="input-field1" />
                <input type="text" placeholder="State" className="input-field1" />
                <input type="text" placeholder="Address" className="input-field1" />
                <label> Start Date :</label>
                <input type="date" placeholder="Start date" className="input-field1" />
                <label> End Date :</label>
                <input type="date" placeholder="End date" className="input-field1" />

                <button type="submit" className="save-button">
                    Save
                </button>
            </form>
            <button type="button" className="next">
                Next {'>'}
            </button>
        </div>
    </div>
);
};

export default Professinal_Exp;


