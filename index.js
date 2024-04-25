const express = require('express');
const dbConnection = require("./dbConnection");
const apis = require('./routes/route');
const env = require('dotenv');

env.config();

const app = express();
app.use(express.json()); //parse the json 

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