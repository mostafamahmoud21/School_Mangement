const express = require('express');
const connection = require('./config/db.js');
const schoolRouter = require('./routes/school.router.js');
const dotenv = require('dotenv').config();
const cors=require('cors')
const compression=require('compression')
const app = express()

app.use(express.json())
app.use(cors())
app.use(compression())
app.use('/api', schoolRouter)

app.listen(process.env.PORT, () => {
    console.log("server running...")
})