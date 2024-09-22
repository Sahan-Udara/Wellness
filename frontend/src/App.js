import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ViewTreatment from "./components/Treatment/ViewTreatment";
import AddTreatment from "./components/Treatment/AddTreatment";
import UpdateTreatment from "./components/UpdateTreatment/UpdateTreatment";
import TreatmentPage from "./components/TreatmentPage/TreatmentPage"; // Import your new TreatmentPage component
import HomeNav from "./components/HomeNav/HomeNav";
import AdminHome from "./components/AdminHome/AdminHome";
import TreatmentLogin from "./components/TreatmentLogin/TreatmentLogin";



function App() {
    return (
        <Router>
            <Header />
           
            <Routes>
            <Route path="/addtreatment" element={<AddTreatment />} />
                <Route path="/viewtreatment" element={<ViewTreatment />} />
                <Route path="/AdminHome" element={<AdminHome />} />
                <Route path="/viewtreatment/:_id" element={<UpdateTreatment />} />
                <Route path="/treatmentpage" element={<TreatmentPage />} /> {/* Route to TreatmentPage */}
                <Route path="/TreatmentLogin" element={<TreatmentLogin />} /> {/* Route to TreatmentLogin */}
                <Route path="/home" element={<Home />} />
                <Route path="/home" element={<Home />} />

                
                </Routes>
        </Router>
    );
}

export default App;
