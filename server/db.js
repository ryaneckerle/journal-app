const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'journal-walkthrough',
  'postgres',
  'Eleven50#2021',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

sequelize.authenticate().then(
  function () {
    console.log('Connected to journal-walkthrough postgres database');
  },
  function (err) {
    console.log(err);
  }
);

module.exports = sequelize;
