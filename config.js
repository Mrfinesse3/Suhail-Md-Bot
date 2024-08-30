const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348106149503";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_46_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDY5LFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU0LFxuICAgICAgICA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMixcbiAgICAgICAgNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRLbVZ3bGthOXY4VUJmSVBEOUxZeXRrOFBHMnBTeFZhUFVmcDRaSkU3V3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFEbm1DeUZEU2M2Nk1oWWk2RFU5OHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTMxY2U0YWUtOTE4NC00NGQzLWIyOTItMWQwODk5ZjQ3MmZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMjQ5LFxuICAgICAgNDYsXG4gICAgICAxMzIsXG4gICAgICAxNTQsXG4gICAgICAxOTgsXG4gICAgICA2NSxcbiAgICAgIDY2LFxuICAgICAgMjE2LFxuICAgICAgMTc5LFxuICAgICAgMTY4LFxuICAgICAgNzEsXG4gICAgICAxNTUsXG4gICAgICAyMTIsXG4gICAgICA2OCxcbiAgICAgIDEyOCxcbiAgICAgIDIzNCxcbiAgICAgIDkyLFxuICAgICAgODUsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgNjgsXG4gICAgICAyMzQsXG4gICAgICAyMzQsXG4gICAgICA0MyxcbiAgICAgIDE1MSxcbiAgICAgIDg2LFxuICAgICAgMTUwLFxuICAgICAgMjksXG4gICAgICA3NSxcbiAgICAgIDIyNixcbiAgICAgIDY4LFxuICAgICAgMTU5LFxuICAgICAgMTY3LFxuICAgICAgMTMzLFxuICAgICAgMTAwLFxuICAgICAgMTgxLFxuICAgICAgNDgsXG4gICAgICAyMzgsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQQlRUQlFWRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNjE0OTUwMzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImZpbmVzc8KjXCIsXG4gICAgXCJsaWRcIjogXCIxNjEzOTYzNDgyMTU0NDY6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTN2djZrR0VNZjd5TFlHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QVkrbVF0a01SSTdTM085QTQ3cUNCTWl2dGZYWHppZW5La2NmTUg1dERFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtlbnFwekFucm81WWRuNG4wc3U5RmYyZTNTdTNTdTgrNk5XK0pQcEVDYWNoRU5tZE1tT2UrVC9KaGVNRFhvTk1RQ2lYU1NkSi9Wc1FxTGdZOTcrSkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBtQVNQTzNsaTlHOTBVTmsyYWttdnREdk1NcEZHaU1WU1lzL1psLzBLTFEwMGNCWVh6bG9yQkZCTUI5U1o2cGV6Mkx2OEdyVkRyMjdEQXBHQm5CS2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDYxNDk1MDM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUwNTQ0MTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "false",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
