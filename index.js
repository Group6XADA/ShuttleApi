const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
routes = require('./Routes/projectRoutes'); // Import the routes file

const port = 3000;
const dbString = process.env.MONGODB_URI;

//Allow api to accept json data
app.use(express.json());

//Connect to database
mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//Allow cross origin
app.use(cors());

//Simple get route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Middleware
app.use(bodyParser.json());   

// Use the imported routes
app.use('/api', routes);

//Insert Create User

//Read User

//Insert Update User

//Delete User

//Create Booking

//Read Bookings

//Read All Bookings

//Update Booking

//Delete Booking

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
