const userModel = require('../models/userModel');

// Login Callback
const loginController = async function (req, res) {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (!user) {
            return res.status(404).send('User Not Found');
        }

        return res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,  // More readable error message
        });
    }
};

// Register Callback
const registerController = async function (req, res) {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        
        return res.status(201).json({  // Fixed `res.send(201)`
            success: true,
            newUser,
        });

    } catch (error) {
        return res.status(400).json({
            success: false,  // Fixed typo in "success"
            error: error.message,
        });
    }
};

// Export
module.exports = { loginController, registerController };
