import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './AddTreatment.css';

function AddTreatment(){
    const history = useNavigate();
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
        console.log(inputs);
        sendRequest().then(() => history('/viewtreatment'));
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
        <div className="">
            <h1>Add Treatment</h1>
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
    );
}

export default AddTreatment;
