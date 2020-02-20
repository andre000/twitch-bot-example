const { client: Client } = require('tmi.js');

module.exports = new Client({
  options: {
    debug: process.env.NODE_ENV === 'development',
  },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: process.env.TWITCH_APP_USERNAME,
    password: process.env.TWITCH_APP_PASSWORD,
  },
  channels: [process.env.TWITCH_CHANNEL],
});
