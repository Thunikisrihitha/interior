const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json())

app.post('/book', (req,res)=>{

const booking = req.body

fs.readFile('../data/bookings.json','utf8',(err,data)=>{

let bookings = JSON.parse(data || '[]')

bookings.push(booking)

fs.writeFile('../data/bookings.json',JSON.stringify(bookings),()=>{

res.send("Booking saved")

})

})

})

app.listen(3000,()=>console.log("Server running"))