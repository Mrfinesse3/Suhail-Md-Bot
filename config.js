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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "7026742398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

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

  sessionName:process.env.SESSION_ID || "SUHAIL_21_21_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMjM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM0LFxuICAgICAgICA4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImphZUY5ZEl0RnFWdlpyODNlNC9rd3pYM0JJZFdmWUJrK3o2TTZIa29aWms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFCVTRycVlBUkctQ0tlVkJGZ3ZnMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjQ0Yzc1MTItNGZiNS00ZmYzLWFiYmYtOTlmOTU4ZmJiMTE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDE3NixcbiAgICAgIDI0NSxcbiAgICAgIDk5LFxuICAgICAgMTQxLFxuICAgICAgMjQ5LFxuICAgICAgMjI1LFxuICAgICAgMTgxLFxuICAgICAgMTYxLFxuICAgICAgMTI1LFxuICAgICAgMjM1LFxuICAgICAgMTQzLFxuICAgICAgMTM2LFxuICAgICAgMTQ4LFxuICAgICAgMjE0LFxuICAgICAgMjEsXG4gICAgICAyNDksXG4gICAgICAxMDgsXG4gICAgICAwLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDIzNixcbiAgICAgIDMxLFxuICAgICAgNTgsXG4gICAgICA4OCxcbiAgICAgIDE0MSxcbiAgICAgIDIwMixcbiAgICAgIDk4LFxuICAgICAgNzUsXG4gICAgICA1MSxcbiAgICAgIDE0MixcbiAgICAgIDcwLFxuICAgICAgMTIwLFxuICAgICAgMTk1LFxuICAgICAgOTgsXG4gICAgICAxOTksXG4gICAgICAxMDUsXG4gICAgICAxOTYsXG4gICAgICAyMzQsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEdNUzNNRlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY3NDIzOTg6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNzgzNjg0MDIzNTIxOToxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTGxoZUVHRU5udnlMWUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVQRGRnM0dZaUtFdFc1VlFrQ1ovaXViR3ZQL2FNcVZSTGh6TUJMang3M3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibkphNFN6NVR1MmpJK1prZHFrN2gyMDZZdGhRK2gzSG5yREhkK2lrRjBBTStzMHpuWjNQUlpObFYwdUNHWkpqY2l3Wmc1MnE4WVNLWUN5K2ZwWUg3Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0cxRXluSUhuaUN5SXVkV3ZRMWZoRzZOSlNycXZuTndieXlJUEwzSVE2OHNxVWVlb01rUlZWM3RJKzBSMnV3OU9IVHlsZ3F6R2l2M2hGUG94ei9IRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNjc0MjM5ODoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MDUyODkzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
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
 
