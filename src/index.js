import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

//calling the database connection function
//async function always return a promise
connectDB()
.then(() => {
    try {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at PORT: ${process.env.PORT}`);
        })
    } catch (error) {
        app.on("error", (err) => {
            console.log(`Express failed!!! ${err}`);
            throw err
        })
    }
    
})
.catch((err) => {
    console.log(`MongoDB connection failed!!`, err);
})
