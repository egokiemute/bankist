import mongoose from "mongoose";

// Define the schema for a User
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        // required: true,
    },
    lastname: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        // required: function () { return !this.googleId; } // Password required only if not using Google sign-up
    },
    dpCode: {
        type: String,
    },
    accountPin: {
        type: Number,
    },
    googleId: {
        type: String, // New field to store Google ID
        unique: true,
        sparse: true // Allows either a unique Google ID or a unique email/password combination
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        trim: true,
    },
    deposits: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Deposits',
        },
    ],
    role: {
        type: String,
        enum: ["user", "admin"], // Define the roles you need
        default: "user",          // Default role is "user"
    },
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
}, { timestamps: true });

// Create a User model based on the schema
export const User = mongoose.model('User', userSchema);
