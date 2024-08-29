// const express = require("express");
// const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
// const dotenv = require("dotenv");

// const app = express();
// const cors = require("cors");

// //Middleware
// app.use(express.json());
// app.use(cors());
// app.use("treatments,router");

// dotenv.config(); // Initialize dotenv to use environment variables

// const PORT = process.env.PORT || 8070; // Create port

// // Use declared dependencies

// app.use(bodyparser.json());

// ///step 2///
// const URL = process.env.MONGODB_URL;

// // Connect to MongoDB
// mongoose.connect(URL)
//     .then(() => console.log("MongoDB Connection success!"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// // Build connection
// const connection = mongoose.connection; // Assign mongoose variable
// connection.once("open", () => {    // Connect with database once
//     console.log("MongoDB database connected successfully!"); // Log success message
// });

// // Import routes
// const nurseRouter = require("./routes/nurse.js");
// const treatmentRouter = require("./routes/treatments.js");

// // Use the router
// //app.use("/nurse", nurseRouter);
// app.use("/treatments",treatmentRouter);

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is up and running on port NUMBER: ${PORT}`); // Log port number
// });

/////////////////////////////////////

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Initialize dotenv to use environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json()); // Note: body-parser is now included in express

const PORT = process.env.PORT || 8070; // Create port

// Connect to MongoDB
const URL = process.env.MONGODB_URL;
mongoose.connect(URL)
    .then(() => console.log("MongoDB Connection success!"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Build connection
const connection = mongoose.connection; // Assign mongoose variable
connection.once("open", () => {    // Connect with database once
    console.log("MongoDB database connected successfully!"); // Log success message
});

// Import routes
const nurseRouter = require("./routes/nurse.js");
const treatmentRouter = require("./routes/treatments.js");

// Use the router
app.use("/nurse", nurseRouter);
app.use("/treatments", treatmentRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`); // Log port number
});
