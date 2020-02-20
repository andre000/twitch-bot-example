require('dotenv').config();
const db = require('./src/utils/connection');
const client = require('./src/utils/twitchClient');
const Character = require('./src/components/character/model');

(async () => {
  await db;

  db.disconnect();
})();
