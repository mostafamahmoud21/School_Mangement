const express = require('express');
const connection = require('./config/db.js');
const schoolRouter = require('./routes/school.router.js');
const dotenv = require('dotenv').config();

const app = express()
app.use(express.json())
app.use('/api', schoolRouter)

app.listen(process.env.PORT, () => {
    console.log("server running...")
})