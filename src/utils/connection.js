const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connection created.'));

module.exports = {
  ...db,
  disconnect: mongoose.disconnect,
};
