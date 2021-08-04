const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('.');

const Pair = sequelize.define('Pair', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  currentPair: {
    type: DataTypes.STRING,
    unique: true,
  },
  alert_level: DataTypes.STRING,
}, {
  timestamps: false,
  indexes: [
    {
      name: 'name',
      fields: ['name'],
      using: 'HASH',
    },
  ],
});

sequelize.sync()
  .then(() => {
    console.log('MODELS SYNCED');
  })
  .catch((err) => {
    console.log(err, 'MODELS NOT SYNCED');
  });

module.exports = Pair;
