import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './AddTreatment.css';
import IMG1 from "../Assets/Test.png";

function AddTreatment() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        benefit: "",
        duration: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => navigate('/viewtreatment'));
    };

    const sendRequest = async () => {
        try {
            await axios.post("http://localhost:8070/treatments/add", {
                name: String(inputs.name),
                description: String(inputs.description),
                benefit: String(inputs.benefit),
                duration: String(inputs.duration),
            });
            alert("Treatment Added"); // Show the alert after successful submission
        } catch (error) {
            console.error("Error during request:", error);
            alert("Failed to submit treatment. Please try again.");
        }
    };

    return (
        <div className="home-back">
            <h1>Add Treatment</h1>
            
            <div className="Allforms">
                <div className="Section1">
                    <img className='Doc-1' src={IMG1} />
                    <button className="add-button1" onClick={() => navigate('/addtreatment')}>Add Treatment</button>
                    <button className="add-button2" onClick={() => navigate('/viewtreatment')}>View Treatment</button>
                </div>

                <div className="Section2">
                    <form onSubmit={handleSubmit}>
                        <label>Treatment Name</label>
                        <input
                            type="text"
                            name="name"
                            value={inputs.name}
                            onChange={handleChange}
                            required
                        />
                        
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={inputs.description}
                            onChange={handleChange}
                            required
                        />
                        
                        <label>Benefit</label>
                        <input
                            type="text"
                            name="benefit"
                            value={inputs.benefit}
                            onChange={handleChange}
                            required
                        />
                        
                        <label>Duration</label>
                        <input
                            type="text"
                            name="duration"
                            value={inputs.duration}
                            onChange={handleChange}
                            required
                        />
                        
                        <button id="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTreatment;
