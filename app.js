const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./models/db');
const User = require('./models/user');

// Create app
const app = express();
const port = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Body-Parser
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

// Check login user


// Load routes
app.use('/', require('./routes/home'));
app.use('/user', require('./routes/user'));

// Connect database
db.sync().then(function() {
  app.listen(port);
  console.log(`Server is listening on port ${port}`);
}).catch(function(err) {
  console.log(err);
  process.exit(1);
});
app.use(express.static('public'));
