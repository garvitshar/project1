import dotenv from 'dotenv'
import mongoose from "mongoose"
import{DB_NAME} from "./constant.js"
import express from "express";
dotenv.config({path:'./.env'})
const app = express()
;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`MogoDB connected !! DB HOST:${ DB_NAME}`);
       
    } catch (error) {
        console.error("ERROR",error)
        
    }
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on ${process.env.PORT} PORT`)
    })
})()  
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`SERVER IS RUNNING AT PORT : ${process.env.PORT}`);
        
    } )
})