module.exports = (sequelize, DataTypes) => {
  // journal passed to the define method is table name in plural form
  const Journal = sequelize.define('journal', {
    // column of journal table in db
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // column of journal table in db
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // column of journal table in db
    entry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // column of journal table in db
    owner: {
      type: DataTypes.INTEGER,
    },
  });
  return Journal;
};
