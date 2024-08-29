import React, { useState } from "react";
import axios from "axios";
import './AddTreatment.css';

export default function AddTreatment() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [benefit, setBenefit] = useState("");
    const [duration, setDuration] = useState("");

    function sendData(e) {
        e.preventDefault();
        
        // Basic validation
        if (!name || !description || !benefit || !duration) {
            alert("Please fill in all fields");
            return;
        }
    
        const newTreatment = {
            name,
            description,
            benefit, 
            duration
        };
    
        console.log('Sending data:', newTreatment);  // Log the data being sent
    
        axios.post("http://localhost:8070/treatments/add", newTreatment)
            .then(() => {
                alert("Treatment Added");
                // Clear form fields after successful submission
                setName("");
                setDescription("");
                setBenefit("");
                setDuration("");
            })
            .catch((err) => {
                // Enhanced error handling
                const errorMessage = err.response?.data?.error || err.message;
                alert(`Error: ${errorMessage}`);
                console.error("Error details:", err.response?.data || err.message);
            });
    }
    
    // function sendData(e) {
    //     e.preventDefault();
        
    //     // Basic validation
    //     if (!name || !description || !benefit || !duration) {
    //         alert("Please fill in all fields");
    //         return;
    //     }

    //     const newTreatment = {
    //         name,
    //         description,
    //         benefit, 
    //         duration
    //     };

    //     axios.post("http://localhost:8070/treatments/add", newTreatment)
    //         .then(() => {
    //             alert("Treatment Added");
    //             // Clear form fields after successful submission
    //             setName("");
    //             setDescription("");
    //             setBenefit("");
    //             setDuration("");
    //         })
    //         .catch((err) => {
    //             // Enhanced error handling
    //             const errorMessage = err.response?.data?.error || err.message;
    //             alert(`Error: ${errorMessage}`);
    //             console.error("Error details:", err.response?.data || err.message);
    //         });
    // }

    return (
        <div>
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Treatment Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter Treatment Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="benefit" className="form-label">Benefit</label>
                    <input
                        type="text"
                        className="form-control"
                        id="benefit"
                        name="benefit"
                        placeholder="Enter Benefit"
                        value={benefit}
                        onChange={(e) => setBenefit(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="duration" className="form-label">Duration</label>
                    <input
                        type="text"
                        className="form-control"
                        id="duration"
                        name="duration"
                        placeholder="Enter Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            

            </form>
           
        </div>
    );
}