const express = require("express");
require("./db/conn");
const Student = require("./models/students")
const app = express();
const port = process.env.PORT || 8000;

// // To display in browser
// app.get("/", (req, res) => {
//     res.send("hello from the otherside");
// })

// Middleware to parse JSON bodies
app.use(express.json());


// // To create new student database

// app.post("/students", (req, res) => {
//     const user = new Student(req.body);
//     user.save().then (() =>  {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(201).send(err);
//     })
//     res.send("hello from the otherside");
// });


// Async mode
app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/students", async(req, res) => {

})



// To get database

app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){
        console.log(err);
    }

});

// To get individual data

app.get("/students/:id", async (req, res) => {
    try {
        const id = req.params.id; 
        const studentData = await Student.findById(id); 
        res.send(studentData);
    } catch(err) {
        console.log(err);
        res.status(500).send({ message: "An error occurred while retrieving student data." });
    }
});


// To update database documents
app.patch("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        // Assuming you want to update the document with the data in req.body
        const update = req.body;
        const updateStudent = await Student.findByIdAndUpdate(id, update, { new: true });
        if (!updateStudent) {
            return res.status(404).send({ message: "Student not found." });
        }
        res.send(updateStudent);
    } catch(err) {
        console.log(err);
        res.status(500).send({ message: "An error occurred while updating student data." });
    }
});


// To delete database documents
app.delete("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if (!deleteStudent) {
            return res.status(404).send({ message: "Student not found." });
        }
        res.send({ message: "Student successfully deleted." });
    } catch(err) {
        console.log(err);
        res.status(500).send({ message: "An error occurred while deleting student data." });
    }
});


app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})