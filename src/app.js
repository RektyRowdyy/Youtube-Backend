import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//.use method is majorily used with middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//if we get data in json format
app.use(express.json({
    limit: "20kb"
}))
//app.use(express.urlencoded()) this simply works but providing extented = true allows object inside object {rarely happens}
app.use(express.urlencoded({extended: true, limit: "20kb"}))

//all static resources such as images, pdfs etc will be stored in the public folder
app.use(express.static("public"))

//allow cookieParser
app.use(cookieParser())


export { app }