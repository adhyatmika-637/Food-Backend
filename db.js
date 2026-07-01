import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

async function connectDB() {
    try {
        const result = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Sucessfully");

    } catch (error) {
        console.log("Database Error", error);
    }
}
export default connectDB;