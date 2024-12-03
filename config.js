const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_17_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDUxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtYkRxZjRLSHd3eDluUm55Vk5Cb0F6VlFyWXk4S3k2MG8vM3kzVTB4MjgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1c0hrVXZqMFQ4MkREdC1fTzB5RVZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcwZGYyZGY5LTAyZTctNDg2Ny1hN2EwLTg1NWQ0YTNjNTlhOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDE5NSxcbiAgICAgIDI0MSxcbiAgICAgIDI0OSxcbiAgICAgIDExNCxcbiAgICAgIDU4LFxuICAgICAgMTg3LFxuICAgICAgMTQ3LFxuICAgICAgMTA2LFxuICAgICAgMTQ3LFxuICAgICAgMjQ5LFxuICAgICAgMTkwLFxuICAgICAgMjA2LFxuICAgICAgMTIzLFxuICAgICAgMTMyLFxuICAgICAgMjE5LFxuICAgICAgMTUsXG4gICAgICA4MCxcbiAgICAgIDMzLFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAxNTQsXG4gICAgICAxOTYsXG4gICAgICAyMTgsXG4gICAgICAxNSxcbiAgICAgIDY2LFxuICAgICAgMTQzLFxuICAgICAgMTc5LFxuICAgICAgNjIsXG4gICAgICAxNTQsXG4gICAgICA5LFxuICAgICAgMjIzLFxuICAgICAgMjM4LFxuICAgICAgMTc2LFxuICAgICAgMzUsXG4gICAgICAxNTMsXG4gICAgICAxNDYsXG4gICAgICAyMjYsXG4gICAgICAxMSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyQ0NERkZNTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc4NDI5MzAyNTU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLMWxsNC5wcmV6XCIsXG4gICAgXCJsaWRcIjogXCIyNDI2NzQ3OTU4Mjc0Mjk6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWFwbXNZQ0VJdTR1Ym9HR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1ckRRTStVMlRRaEl3Q0xhcDZVT1p3ZHhndUZZRnhZWllTM3VZck03cFZJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlkRGY1OGU2MHRMV3YvMW5DZk1IOFRKcUQvN2JvYStoZEk2aGxIcDJoMlFVVENVdXE3d3FuS1NNVU5YUkxlWldVWVZBUFR1ZkpEOXB0U29ZYmQzWUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJ3dTFSbW1VOVRYSG9iQzFHdUNRSTc0TWpvOUJ5dmRDczhoUjNyWUJaRThBbWFpV0tTNFowYlg5NHE2b0ZpL2ZwbE4rTk1QVHF0aE5OcWNZZnJaUmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3ODQyOTMwMjU1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxODg2MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFZQUFHc0lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVlBQUdzSS5qc29uIjogIntcImtleURhdGFcIjpcImsvbXlNMmgxTWQ1MVAySVlLckt2cnBDS1VSTlpRQXBaempWS2NUMzEvQzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njg0MTAyODU0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDZdfSxcInRpbWVzdGFtcFwiOlwiMTczMjQ3NzYwMTEyNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
