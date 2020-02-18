require('dotenv').config();
const db = require('./src/utils/connection');
const Character = require('./src/components/character/model');

(async () => {
  await db;

  const newCharacter = new Character({
    name: 'Leoneiros Ordamita',
    alias: 'Leon',
    age: '90',
    description: 'Druida',
    color: '#00f000',
    imageURL: null,
  });

  const result = await newCharacter.save();
  console.log(result);

  const foundCharacter = await Character.findOne({
    alias: 'Leon',
  });

  console.log(foundCharacter);

  await foundCharacter.updateOne({
    age: '33',
  });

  db.disconnect();
})();
