const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263716325221";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_45_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvRTFQME5Wa2RiNjJ2Tmh5MEpTRE5yVGxBM05YSWJWc2FsOE5mMXJMc3RJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjMyNTIyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTQ1ODExNjU1REJFNDM3NzAwNDAwQ0REOEE2NkE0MDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3Njk5NTI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE2MzI1MjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRDY2RjFDNTVBMTRFRjA2NzE1NTJDMTJBNERFMzAyRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc2OTk1MjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTYzMjUyMjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCOTQ5M0Y4NjdFOUFEMjNDMjNBQjEzM0FFRDM1N0E3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzY5OTUyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjMyNTIyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzBGNkMyQ0ZCQTBDNzMwQjlBNjcxRDFENjI0NDM1OEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3Njk5NTI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhzWWZWbGRoUWptQmZ2dXloYTBNdlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjNlZmZjNmItMGM0OC00ZDI4LTlhOGUtMzE5MDI2MDQ0NzViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDIzMSxcbiAgICAgIDE1NCxcbiAgICAgIDg5LFxuICAgICAgMCxcbiAgICAgIDIwNyxcbiAgICAgIDE4MCxcbiAgICAgIDIxNCxcbiAgICAgIDcsXG4gICAgICAyMTYsXG4gICAgICAxOTcsXG4gICAgICAxNDcsXG4gICAgICA0NSxcbiAgICAgIDEzMyxcbiAgICAgIDc2LFxuICAgICAgOTcsXG4gICAgICAxMTIsXG4gICAgICAyMzYsXG4gICAgICAxMzEsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAyMDUsXG4gICAgICAxNTIsXG4gICAgICAyMzIsXG4gICAgICAyNDQsXG4gICAgICAzMyxcbiAgICAgIDU4LFxuICAgICAgMTgwLFxuICAgICAgODcsXG4gICAgICA0LFxuICAgICAgMjExLFxuICAgICAgMjIwLFxuICAgICAgNjksXG4gICAgICA0MSxcbiAgICAgIDY2LFxuICAgICAgMTcwLFxuICAgICAgODIsXG4gICAgICAxMzgsXG4gICAgICA0OSxcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaRE1HQUM2NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE2MzI1MjIxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3OTgyMTkxNzYyNjQ4ODoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkxlZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rUGhPZ0NFTCtIaUxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidU4rWWpiZ0VoUjZiS1NXMnJEcWpBNlFZVVQrUjRBd0lrVWRpVjdoVUVudz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmdXhsSHp5UWZuRVpCWEw5ZlJuMDUrREtkT0h5WVJ3b3VVWGl0d0N6MGgvUWZFQkRmbmhhN0VQUHZITTZRMThBc0huZEFBVDdTbXBhYlZpNmVWclpBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoeXgwdWdOYVZ0QWVRRjRKdTR6TDNaaEViSUozZlYyVTlyY0tNcUt5SzYwY2Z3SnZiMlVwRkVuYitGVzUrYmoyZWs4M3lHUzUySjFwQU16RmtLSmRCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTYzMjUyMjE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3Njk5NTIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjcwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFZGs3cXRVeXlCazVnWWZzb2dCSXpjcEJJSWxkS1R5OE0wMXhKc2k3U0NJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1NTA0MjI4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Lonsij",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
