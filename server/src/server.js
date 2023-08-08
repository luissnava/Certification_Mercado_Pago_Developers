import express from "express";
import paymentRoutes from '../routes/payment.routes.js'
import {PORT} from './config.js'
import morgan from "morgan";
const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use((request,res, next) =>{
    res.append('Access-Control-Allow-Origin',['*'])
    res.append('Access-Control-Allow-Methods','GET,POST')
    res.append('Access-Control-Allow-Headers','Content-Type')
    next()
})

app.use(paymentRoutes)

app.listen(PORT)

console.log('server openning in port', PORT);
