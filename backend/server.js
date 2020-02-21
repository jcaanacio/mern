const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port  = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_CONNECTION_STRING;
mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
});



const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

connection.once('closed', () => {
    console.log("MongoDB database connection closed");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const debugRoute = require('./routes/debugroute');

app.use('/api/debug',debugRoute);
app.use('/api/exercise',exercisesRouter);
app.use('/api/user',usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});