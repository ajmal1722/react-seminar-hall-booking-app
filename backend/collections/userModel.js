import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true // Removes whitespace from both ends of the string
    },
    email: {
        type: String,
        unique: true, // Ensures the email is unique
        trim: true,
        lowercase: true // Converts the email to lowercase
    },
    password: {
        type: String,
    },
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

const User = mongoose.model('User', userSchema);

export default User;
