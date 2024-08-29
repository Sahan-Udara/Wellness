import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Treatment from './Treatment';

const URL = "http://localhost:8070/treatments";

const fetchHandler = async () => {
    try {
        const res = await axios.get(URL);
        console.log("Fetched data:", res.data); // Debugging the response
        return res.data;
    } catch (err) {
        console.error("Error fetching treatments:", err);
    }
};

function ViewTreatment() {
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        fetchHandler().then((data) => {
            console.log("Fetched data:", data); // Log the full data
            setTreatments(data || []);
        });
    }, []);
    

    return (
        <div>
            <h1>Display View Treatments Page</h1>
            <div>
                {treatments.length > 0 ? (
                    treatments.map((treatment, i) => (
                        <div key={i}>
                            <Treatment treatment={treatment} />
                        </div>
                    ))
                ) : (
                    <p>No treatments found</p>
                )}
            </div>
        </div>
    );
}

export default ViewTreatment;
