import User from '../collections/userModel.js';
import bcrypt from 'bcrypt';

export const signUp = async (req, res) => {
    try {
        const userData = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists in this email' });
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
        res.status(500).json({ message: 'Server error', error });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found with this email' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(201).json({ message: 'Login successful', user: { name: user.name, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
}