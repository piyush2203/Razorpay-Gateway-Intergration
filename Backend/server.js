import app from "./app.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";
dotenv.config({path:"Backend/config/config.env"});


export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
  });

app.listen(process.env.PORT, ()=>{
    console.log(`Server started at PORT ${process.env.PORT}`);
});