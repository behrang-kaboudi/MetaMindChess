const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine and define the views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static('public'));
app.use('/public', express.static('public'));


// Use the main route for handling requests
const mainRoute = require('./src/routes/main');
app.use('/', mainRoute);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
