/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      postname: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      mail: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      username: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      _password: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      isActive: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "1"
      },
      // createdAt: {
      //   type: DataTypes.Date
      // },
      // updatedAt: {
      //   type: DataTypes.Date
      // }
    },
    {
      tableName: "users"
    }
  );
  return User;
};
