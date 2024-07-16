const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'M-MD™';
const FOOTERNAME = '> MALDIVES-MD';
global.owner = process.env.OWNER_NUMBER  || '254758732775' ;  // ADD YOUR NUMBER WITHOUT +
    
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'VAJIRA-MD=zBUliSiQ#jN4KlZeExBfTn6KL9d2RdGGJKrTZNIUlpRLLUjhz49I' ,
travaSend: process.env.TRAVA_SEND || '25' ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || '𝐌ak j' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'non-button' ,
LOGO: process.env.LOGO || `https://telegra.ph/file/ea1de82bebf3843128883.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech',
MONGODB_URI :process.env.MONGODB_URI === undefined ? 'mongodb+srv://sachintharashan26:9hVStJbuE3uxwRtZ@cluster0.o0ec025.mongodb.net/' : process.env.MONGODB_URI,  
FOOTER: process.env.FOOTER || '‌🇰🇪MALDIVES_ＭＤ 🇰🇪',    
PREFIX: process.env.PREFIX || '*' ,
LANG:  process.env.LANG || 'EN' ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || true  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
DISABLE_PM: process.env.DISABLE_PM || false ,
ANTI_LINK: process.env.ANTI_LINK || true  ,
ANTI_BOT: process.env.ANTI_BOT || true  ,
ANTI_CALL: process.env.ANTI_CALL || true  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
CAPTION : process.env.CAPTION || 'https://whatsapp.com/channel/0029VaWrCuH35fLuVP2iCc2R'
};
