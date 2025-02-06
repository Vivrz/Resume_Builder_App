const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const User = require("./Models/Userschema.js");
const { signupValidation, LoginValidation } = require('./Middleware/AuthValidation.js');
const connectionWithDB = require('./Models/DB.js');

connectionWithDB();
const app = express();
require('dotenv').config();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.get("/", (req, res) => { 
    res.send("hello from backend");
});

app.post("/Signup", signupValidation, async (req, res) => {
    try {
        const { name, password, email } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User already exists, you can login", success: false });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const userModel = new User({ name, email, password: hashedPassword });
        await userModel.save();
        res.status(201).json({ message: "Signup successfully", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
});

app.post("/Login", LoginValidation, async (req, res) => {
    try {
        const { password, email } = req.body;
        const user = await User.findOne({ email });
        const errormsg = "Auth failed or password is wrong!";

        if (!user) {
            return res.status(403).json({ message: errormsg, success: false });
        }

        const ispassword = await bcrypt.compare(password, user.password);
        if (!ispassword) {
            return res.status(403).json({ message: errormsg, success: false });
        }

        const jwtoken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.status(200).json({ message: "Login successfully", success: true, jwtoken, email, name: user.name });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
