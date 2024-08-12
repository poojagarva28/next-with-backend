import mongoose from "mongoose";

export async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}