import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionString = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connectd to MongoDB ${connectionString.connection.host}`);
    } catch (error) {
        console.log("Failed to connect to the MongoDB", error);
        process.exit(1);
    }
}