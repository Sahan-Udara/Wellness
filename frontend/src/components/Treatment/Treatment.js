import React from 'react';
import { Link } from 'react-router-dom';
function Treatment({ treatment }) {
    const { _id, name, description, benefit, duration } = treatment || {};

    return (
        <div>
            <h2>Treatment Details</h2>
            <p><strong>ID:</strong> {_id || "N/A"}</p>
            <p><strong>Name:</strong> {name || "N/A"}</p>
            <p><strong>Description:</strong> {description || "N/A"}</p>
            <p><strong>Benefit:</strong> {benefit || "N/A"}</p>
            <p><strong>Duration:</strong> {duration || "N/A"}</p>

            <Link to={`/viewtreatment/${_id}`}>Update</Link>
            <button>Delete</button>

            <br /><br />
        </div>
    );
}


export default Treatment;
