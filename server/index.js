require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
mongoose.set('strictQuery', false);
mongoose.connect(mongoString);
const database = mongoose.connection;
const bodyParser = require('body-parser');

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})



const app = express();


const cors=require("cors");
const corsOpts = {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "FETCH"],
    allowedHeaders: ["Content-Type", "authorization"],
  };

app.use(cors(corsOpts)) // Use this after the variable declaration


//body-praser
app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({extended:false})) // to send data by queryparams
app.use(bodyParser.json());

require('./routes/user')(app)

app.use(express.json());
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})