// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { useParams } from 'react-router'
// import { useNavigate } from 'react-router'

// function UpdateTreatment(){
    
//     const [inputs, setInputs] = useState({});
//     const history = useNavigate();
//     const _id = useParams()._id;
 
// useEffect (()=>{
//      const fetchHandler = async ()=>{
//         await axios
//         .get(`http://localhost:8070/treatments/${_id}`)
//         .then((res)=> res.data)
//         .then((data)=> setInputs(data.user));
//      };
//      fetchHandler();
// },[_id]);

//     const sendRequest = async ()=>{
//         await axios
//         .put (`http://localhost:8070/treatments/${_id}`,{
//             name : String(inputs.name),
//             description : String(inputs.description),
//             benefit : String(inputs.benefit), 
//             duration : String(inputs.duration),
//     })
//     .then((res)=> res.data);
// };

//     const handleChange = (e)=>{
//         setInputs((prevState) =>({
//             ...prevState,
//             [e.target.name]:e.target.value,
//         }));
//     };

//     const sendData = async (e)=>{
//         e.preventDefault();
//         console.log(inputs);
//         sendRequest().then(()=>history("/userdetails")); 
//     };

//     return(
//         <div>
//             <h1>Update User</h1>
//             <form onSubmit={sendData}>
//                 <div className="form-group">
//                     <label htmlFor="name" className="form-label">Treatment Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         onChange={handleChange}
//                         value={inputs.name} 
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="description"
//                         name="description"
//                         onChange={handleChange}
//                         value={inputs.description}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="benefit" className="form-label">Benefit</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="benefit"
//                         name="benefit"
//                         onChange={handleChange}
//                         value={inputs.benefit}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="duration" className="form-label">Duration</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="duration"
//                         name="duration"
//                         onChange={handleChange}
//                         value={inputs.duration}
                        
//                     />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
            

//             </form>
//         </div>
//     )
// }

// export default UpdateTreatment


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// function UpdateTreatment() {
//     const [inputs, setInputs] = useState({});
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchHandler = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8070/treatments/${id}`);
//                 setInputs(res.data);
//             } catch (error) {
//                 console.error("Error fetching treatment data:", error);
//             }
//         };
//         fetchHandler();
//     }, [id]);

//     const sendRequest = async () => {
//         try {
//             await axios.put(`http://localhost:8070/treatments/${id}`, {
//                 name: String(inputs.name),
//                 description: String(inputs.description),
//                 benefit: String(inputs.benefit),
//                 duration: String(inputs.duration),
//             });
//         } catch (error) {
//             console.error("Error updating treatment:", error);
//         }
//     };

//     const handleChange = (e) => {
//         setInputs((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await sendRequest();
//         navigate("/viewtreatment");
//     };

//     return (
//         <div>
//             <h1>Update Treatment</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name" className="form-label">Treatment Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         placeholder="Enter Treatment Name"
//                         value={inputs.name || ''}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="description"
//                         name="description"
//                         placeholder="Enter Description"
//                         value={inputs.description || ''}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="benefit" className="form-label">Benefit</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="benefit"
//                         name="benefit"
//                         placeholder="Enter Benefit"
//                         value={inputs.benefit || ''}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="duration" className="form-label">Duration</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="duration"
//                         name="duration"
//                         placeholder="Enter Duration"
//                         value={inputs.duration || ''}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default UpdateTreatment;
/////////////////////////////////////////////////////////////////////////////////////////////////
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
//     const { _id } = useParams(); // Get the ID from URL parameters
//     const navigate = useNavigate(); // Hook for navigation

//     useEffect(() => {
//         console.log("ID from URL:", _id); // Ensure id is not undefined

//         if (!_id) {
//             console.error("No ID provided in URL parameters.");
//             return;
//         }

//         const fetchHandler = async () => {
//             try {
//                 console.log(`Fetching treatment data for ID: ${_id}`); // Debugging statement
//                 const response = await axios.get(`http://localhost:8070/treatments/${_id}`);
//                 console.log('Fetched data:', response.data); // Log fetched data
//                 setInputs(response.data); // Update state with fetched data
//             } catch (error) {
//                 console.error("Error fetching treatment data:", error.response ? error.response.data : error.message);
//             }
//         };

//         fetchHandler();
//     }, [_id]);

//     const sendRequest = async () => {
//         try {
//             await axios.put(`http://localhost:8070/treatments/update/${_id}`, {
//                 name: inputs.name,
//                 description: inputs.description,
//                 benefit: inputs.benefit,
//                 duration: inputs.duration,
//             });
//             console.log('Update successful'); // Log success
//         } catch (error) {
//             console.error("Error updating treatment:", error.response ? error.response.data : error.message);
//         }
//     };    

//     const handleChange = (e) => {
//         setInputs((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('Submitting data:', inputs); // Log submission data
//         await sendRequest();
//         navigate("/viewtreatment"); // Navigate to another page after update
//     };

//     return (
//         <div>
//             <h1>Update Treatment</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name" className="form-label">Treatment Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         placeholder="Enter Treatment Name"
//                         value={inputs.name || ''}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="description"
//                         name="description"
//                         placeholder="Enter Description"
//                         value={inputs.description || ''}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="benefit" className="form-label">Benefit</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="benefit"
//                         name="benefit"
//                         placeholder="Enter Benefit"
//                         value={inputs.benefit || ''}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="duration" className="form-label">Duration</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="duration"
//                         name="duration"
//                         placeholder="Enter Duration"
//                         value={inputs.duration || ''}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default UpdateTreatment;
////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

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
                const response = await axios.get(`http://localhost:8070/treatments/${_id}`);
                const fetchedData = response.data;
                console.log('Fetched data:', fetchedData);
    
                setInputs({
                    name: fetchedData.name || '',
                    description: fetchedData.description || '',
                    benefit: fetchedData.benefit || '',
                    duration: fetchedData.duration || '',
                });
    
                console.log('State after setting inputs:', inputs);  // Add this line
            } catch (error) {
                console.error("Error fetching treatment data:", error.response?.data || error.message);
            }
        };
    
        fetchHandler();
    }, [_id]);
    

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8070/treatments/${_id}`, {
                name: inputs.name,
                description: inputs.description,
                benefit: inputs.benefit,
                duration: inputs.duration,
            });
            navigate("/viewtreatment");
        } catch (error) {
            console.error("Error updating treatment:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h1>Update Treatment</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Treatment Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={inputs.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="benefit" className="form-label">Benefit</label>
                    <input
                        type="text"
                        className="form-control"
                        id="benefit"
                        name="benefit"
                        value={inputs.benefit}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="duration" className="form-label">Duration</label>
                    <input
                        type="text"
                        className="form-control"
                        id="duration"
                        name="duration"
                        value={inputs.duration}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default UpdateTreatment;
