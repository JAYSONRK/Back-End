const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3
    }, 
    email:{
        type: String,
        required: true,
        unique:[true, "Email id not present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        required:true,
        unique:true,
        min: 1000000000, // Minimum 10 digit number
        max: 9999999999  // Maximum 10 digit number
    },
    address: {
        type:String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
