import User from '../collections/userModel.js';
import bcrypt from 'bcrypt';

export const home = (req, res) => res.send('welcome to express');

export const LoginPage = (req, res) => {
    res.end('asdasda');
};

export const signUp = async (req, res) => {
    try {
        const userData = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Create a new user instance with the hashed password
        const newUser = new User({ ...userData, password: hashedPassword });

        // Save the user to the database
        await newUser.save();

        console.log('New user is created')
        res.status(201).json({ message: 'Sign-up successful', user: { email: newUser.email, name: newUser.name } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

