import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ViewTreatment from "./components/Treatment/ViewTreatment";
import AddTreatment from "./components/Treatment/AddTreatment";
import UpdateTreatment from "./components/UpdateTreatment/UpdateTreatment";



function App() {
    return (
        <Router>
            <Header />
            
            <Routes>
                <Route path="/addtreatment" element={<AddTreatment />} />
                <Route path="/viewtreatment" element={<ViewTreatment />} />
                <Route path="/" element={<Home />} />
                <Route path="/viewtreatment/:_id" element={<UpdateTreatment />} />
                </Routes>
        </Router>
    );
}

export default App;
