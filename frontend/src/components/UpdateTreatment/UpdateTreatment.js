
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// function UpdateTreatment() {
//     const [inputs, setInputs] = useState({
//         name: '',
//         description: '',
//         benefit: '',
//         duration: '',
//     });
//     const { _id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!_id) {
//             console.error("No ID provided in URL parameters.");
//             return;
//         }
    
//         const fetchHandler = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8070/treatments/get/${_id}`);
//                 const fetchedData = response.data.treatment;
//                 console.log('Fetched data:', fetchedData);
    
//                 setInputs({
//                     name: fetchedData.name || '',
//                     description: fetchedData.description || '',
//                     benefit: fetchedData.benefit || '',
//                     duration: fetchedData.duration || '',
//                 });
//             } catch (error) {
//                 console.error("Error fetching treatment data:", error.response?.data || error.message);
//             }
//         };
    
//         fetchHandler();
//     }, [_id]);
    
//     useEffect(() => {
//         console.log('State after setting inputs:', inputs);
//     }, [inputs]);
    
    

//     const handleChange = (e) => {
//         setInputs((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:8070/treatments/update/${_id}`, {
//                 name: inputs.name,
//                 description: inputs.description,
//                 benefit: inputs.benefit,
//                 duration: inputs.duration,
//             });            
//             alert("Treatment Updated");
//             navigate("/viewtreatment");
//         } catch (error) {
//             console.error("Error updating treatment:", error.response?.data || error.message);
//         }
//     };

//     return (
//         <div>
//             <h1>Update Treatment</h1>
//             <form onSubmit={handleSubmit}>
//                     <label >Treatment Name</label><br/>
//                     <input
//                         type="text"
//                         name="name"
//                         value={inputs.name}
//                         onChange={handleChange}
//                         required
//                     />
//                         <br/><br/>
//                     <label>Description</label><br/>
//                     <input
//                         type="text"
//                         name="description"
//                         value={inputs.description}
//                         onChange={handleChange}
//                         required
//                     />
//                         <br/><br/>
//                     <label>Benefit</label><br/>
//                     <input
//                         type="text"
//                         name="benefit"
//                         value={inputs.benefit}
//                         onChange={handleChange}
//                         required
//                     />
//                         <br/><br/>
//                     <label >Duration</label><br/>
//                     <input
//                         type="text"
//                         name="duration"
//                         value={inputs.duration}
//                         onChange={handleChange}
//                         required
//                     />
//                         <br/><br/>
//                 <button>Submit</button>
//             </form>
//      </div>

//     );
// }

// export default UpdateTreatment;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// import './UpdateTreatment.css'; // Import the CSS file

function UpdateTreatment() {
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        benefit: '',
        duration: '',
    });
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!_id) {
            console.error("No ID provided in URL parameters.");
            return;
        }
    
        const fetchHandler = async () => {
            try {
                const response = await axios.get(`http://localhost:8070/treatments/get/${_id}`);
                const fetchedData = response.data.treatment;
                console.log('Fetched data:', fetchedData);
    
                setInputs({
                    name: fetchedData.name || '',
                    description: fetchedData.description || '',
                    benefit: fetchedData.benefit || '',
                    duration: fetchedData.duration || '',
                });
            } catch (error) {
                console.error("Error fetching treatment data:", error.response?.data || error.message);
            }
        };
    
        fetchHandler();
    }, [_id]);
    
    useEffect(() => {
        console.log('State after setting inputs:', inputs);
    }, [inputs]);
    
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8070/treatments/update/${_id}`, {
                name: inputs.name,
                description: inputs.description,
                benefit: inputs.benefit,
                duration: inputs.duration,
            });            
            alert("Treatment Updated");
            navigate("/viewtreatment");
        } catch (error) {
            console.error("Error updating treatment:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h1>Update Treatment</h1>
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
                <button id="submit-button" type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateTreatment;
