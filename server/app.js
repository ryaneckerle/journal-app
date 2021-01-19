require('dotenv').config();
let express = require('express');
const app = express();
const sequelize = require('./db');
let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');
let calculator = require('./controllers/calculatorcontroller');
// app.use('/test', function(req, res) {
//   res.send('This is a message from the test endpoint on the server');
// })
app.use(express.json());
// app.use('/ryan', function(req, res) {
//   res.send('My name is Ryan and I\'m 39 years old.');
// })

sequelize.sync();
//sequelize({force: true});
// Allows server to accept json and convert to an object that can be used in the controller
app.use('/calculator', calculator);

app.use('/user', user);
// Have endpoint of journal/practice
// send a response from that endpoint ('Hey!! This is a practice route!')
app.use('/journal', journal);

app.listen(3000, function () {
  console.log('App is listening on port 3000');
});
