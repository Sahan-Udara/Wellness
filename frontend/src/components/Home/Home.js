import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="container">
       <header className="header">
         <div className="logo">WELLNESS</div>
         <nav className="nav">
           <a href="#home">Home</a>
           <a href="#treatments">Treatments</a>
           <a href="#foods">Foods</a>
           <a href="#find-a-doctor">Find a Doctor</a>
           <a href="#pharmacy">Pharmacy</a>
           <a href="#contact">Contact</a>
         </nav>
         <button className="login-btn">Login</button>
       </header>

       <section className="hero">
         <div className="hero-content">
           <h1>We empower patients to achieve optimal health and well-being.</h1>
           <p>
             At Wellness Ayurveda Hospital, we invite you to explore the
             transformative power of Ayurveda. With roots in centuries-old
             traditions, Ayurveda provides a holistic approach to healing that
             balances the mind, body, and spirit. Embrace a path of
             self-discovery and rejuvenation through our comprehensive treatments
             and personalized care. Join us on a journey towards lasting wellness
             and harmony.
           </p>
           <button className="appointment-btn">Request an Appointment</button>
         </div>
         <div className="hero-images">
           <img src="/path-to-doctor1-image" alt="Doctor 1" className="doctor-img" />
           <img src="/path-to-doctor2-image" alt="Doctor 2" className="doctor-img" />
         </div>
       </section>

       <footer className="footer">
         <div className="footer-logo">WELLNESS</div>
         <div className="footer-info">
           <p>Copyright © 2024 Developed By ITP24_B2</p>
           <div className="social-icons">
             <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
             <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
             <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
             <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
           </div>
         </div>
         <div className="footer-links">
           <div>
             <h4>Quick Links</h4>
             <a href="#home">Home</a>
             <a href="#about">About Us</a>
             <a href="#services">Services</a>
             <a href="#blog">Blog</a>
           </div>
           <div>
             <h4>About</h4>
             <a href="#find-a-doctor">Find a Doctor</a>
             <a href="#appointment">Request an Appointment</a>
             <a href="#location">Find a Location</a>
             <a href="#opinion">Get an Opinion</a>
           </div>
           <div>
             <h4>Support</h4>
             <a href="#donate">Donate</a>
             <a href="#contact">Contact Us</a>
           </div>
         </div>
       </footer>
     </div>
  );
 };

export default Home;






















// import React from "react";
// import "./home.css";

// function 

// const App = () => {
//   return (
//     <div className="container">
//       <header className="header">
//         <div className="logo">WELLNESS</div>
//         <nav className="nav">
//           <a href="#home">Home</a>
//           <a href="#treatments">Treatments</a>
//           <a href="#foods">Foods</a>
//           <a href="#find-a-doctor">Find a Doctor</a>
//           <a href="#pharmacy">Pharmacy</a>
//           <a href="#contact">Contact</a>
//         </nav>
//         <button className="login-btn">Login</button>
//       </header>

//       <section className="hero">
//         <div className="hero-content">
//           <h1>We empower patients to achieve optimal health and well-being.</h1>
//           <p>
//             At Wellness Ayurveda Hospital, we invite you to explore the
//             transformative power of Ayurveda. With roots in centuries-old
//             traditions, Ayurveda provides a holistic approach to healing that
//             balances the mind, body, and spirit. Embrace a path of
//             self-discovery and rejuvenation through our comprehensive treatments
//             and personalized care. Join us on a journey towards lasting wellness
//             and harmony.
//           </p>
//           <button className="appointment-btn">Request an Appointment</button>
//         </div>
//         <div className="hero-images">
//           <img src="/path-to-doctor1-image" alt="Doctor 1" className="doctor-img" />
//           <img src="/path-to-doctor2-image" alt="Doctor 2" className="doctor-img" />
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="footer-logo">WELLNESS</div>
//         <div className="footer-info">
//           <p>Copyright © 2024 Developed By ITP24_B2</p>
//           <div className="social-icons">
//             <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
//             <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
//             <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
//             <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
//           </div>
//         </div>
//         <div className="footer-links">
//           <div>
//             <h4>Quick Links</h4>
//             <a href="#home">Home</a>
//             <a href="#about">About Us</a>
//             <a href="#services">Services</a>
//             <a href="#blog">Blog</a>
//           </div>
//           <div>
//             <h4>About</h4>
//             <a href="#find-a-doctor">Find a Doctor</a>
//             <a href="#appointment">Request an Appointment</a>
//             <a href="#location">Find a Location</a>
//             <a href="#opinion">Get an Opinion</a>
//           </div>
//           <div>
//             <h4>Support</h4>
//             <a href="#donate">Donate</a>
//             <a href="#contact">Contact Us</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
