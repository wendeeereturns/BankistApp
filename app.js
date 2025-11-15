// app.js

//calling the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const path = require('path');
const connectDB = require('./config/database.js');
const app = express();
require('dotenv').config();
//connect to mongoDB
connectDB();

//connecting the middleware (using the body-parser)
app.use(express.urlencoded({ extended: true }));
// locate static files in the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// render ejs as engine
app.set('view engine', 'ejs');

//getting home page
// app.get('/', (req, res) => {
//   res.render('index', { message: null });
// });

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

//running the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
