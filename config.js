require('dotenv').config();

const ownerRaw = process.env.CONTACT || '2348012345678';
const ownerWithDomain = ownerRaw.includes('@s.whatsapp.net') 
  ? ownerRaw 
  : `${ownerRaw}@s.whatsapp.net`;

module.exports = {
  botName: process.env.BOT_NAME || 'Kaizen',
  ownerName: process.env.OWNER_NAME || 'Reiker',
  contact: process.env.CONTACT || '2348012345678@s.whatsapp.net',
  user: process.env.BOT_USER || 'Reiker',
  autoStatus: true, // Set to false to stop auto view status
  OWNER: ownerWithDomain,
  prefix: process.env.PREFIX || '!',
  thumbnail: process.env.THUMBNAIL || '/home/container/user_data/7365381557/Test/thumbnail.jpg',
  OWNER_NUMBER: process.env.OWNER_NUMBER || '2348012345678',
  SESSION_ID: process.env.SESSION_ID || 'LEVI751971II1RRUZ0', // Put session id in the '' before the , paste session id it it
  presence: process.env.PRESENCE || '', // can be 'available' 'recording' 'composing' composing for typing 'unavailable' for offline
  port: process.env.PORT || 3000 // Added port configuration with default 3000
};
