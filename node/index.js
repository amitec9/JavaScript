const express = require('express')
const mongoose = require("mongoose")

let app = express()


conn.on('connected', () => console.log('connected'));
conn.on('open', () => console.log('open'));
conn.on('disconnected', () => console.log('disconnected'));
conn.on('reconnected', () => console.log('reconnected'));
conn.on('disconnecting', () => console.log('disconnecting'));
conn.on('close', () => console.log('close'));

app.get("/",(req,res) =>{
    
    res.send("Hello World")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})