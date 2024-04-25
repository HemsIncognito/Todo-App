const express = require('express');
const dbConnection = require("./dbConnection");
const apis = require('./routes/route');
const env = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

env.config();

const app = express();
app.use(express.json()); //parse the json 

app.use(cors({
    origin: 'http://localhost:3000'
})); //use cors to connect across

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 8081;

dbConnection();

//Call the routes
app.use("/", apis);

app.get("*", (req,res) => {
    res.status(400).json({
        message: "This route doesn't exist"
    })
})

app.listen(PORT, () => {
    console.log(`The server is up and running on the PORT ${PORT}`);
})