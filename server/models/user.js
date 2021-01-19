// email store string null = false
// password store string null = false

module.exports = function (sequelize, DataTypes) {
  // user passed to the define method is table name in plural form
  const User = sequelize.define('user', {
    // column of user table in db
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // column of user table in db
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};
