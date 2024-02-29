const express = require("express");
require("./db/conn");
const studentRouter = require("./routers/student"); 
const app = express();
const port = process.env.PORT || 8000;

// Use JSON middleware
app.use(express.json());

// Use studentRouter middleware
app.use('/students', studentRouter); // All student-related routes will now be prefixed with /students

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "An error occurred." });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export the app for use in other modules
module.exports = app;
