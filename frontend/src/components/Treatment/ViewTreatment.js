import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Treatment from './Treatment';
import { useReactToPrint } from "react-to-print";
import './ViewTreatment.css'; // Import the CSS file

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
    const [searchQuery, setSearchQuery] = useState("");
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        fetchHandler().then((data) => {
            console.log("Fetched data:", data); // Log the full data
            setTreatments(data || []);
        });
    }, []);
    
    // Download function
    const ComponentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        documentTitle: "Users Report",
        onAfterPrint: () => alert("Users Report Successfully Downloaded!"),
    });
    // End Download function

    // Search function
    const handleSearch = () => {
        fetchHandler().then((data) => {
            // Adjusted to filter directly on the treatments array
            const filteredTreatments = data.filter((treatment) =>
                Object.values(treatment).some((field) =>
                    field.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
            setTreatments(filteredTreatments);
            setNoResults(filteredTreatments.length === 0);
        });
    };
    // End Search function

    return (
        <div>
            <h1>Display View Treatments Page</h1>

            {/* Search container */}
            <div className="search-container">
                <input
                    id="search-bar"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="Search Treatments"
                />
                <button id="search-button" onClick={handleSearch}>Search</button>
            </div>
            
            {noResults ? (
                <div>
                    <p>No Treatments Found</p>
                </div>
            ) : (
                <div ref={ComponentsRef}>
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
            )}
            <button id="download-report" onClick={handlePrint}>Download Report</button>
        </div>
    );
}

export default ViewTreatment;
