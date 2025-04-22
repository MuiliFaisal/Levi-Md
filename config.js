require('dotenv').config();

const ownerRaw = process.env.CONTACT || '2340000000000';
const ownerWithDomain = ownerRaw.includes('@s.whatsapp.net') 
  ? ownerRaw 
  : `${ownerRaw}@s.whatsapp.net`;

module.exports = {
  botName: process.env.BOT_NAME || 'Kaizen',
  ownerName: process.env.OWNER_NAME || 'Reiker',
  contact: process.env.CONTACT || '3584573986503@s.whatsapp.net',
  user: process.env.BOT_USER || 'Reiker',
  autoStatus: true, // Set to false to stop auto view status 
  OWNER: ownerWithDomain,
  prefix: process.env.PREFIX || '!',
  thumbnail: process.env.THUMBNAIL || '/home/container/user_data/7365381557/Test/thumbnail.jpg',
  SESSION_ID: process.env.SESSION_ID || '', // Put session id in the '' before the , paste session id it Or Put your number in contact.json for terminal pairing
  port: process.env.PORT || 3000 // Added port configuration with default 3000
};
