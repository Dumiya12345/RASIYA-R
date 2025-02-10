/*░██████╗░░█████╗░██╗░░░░░██████╗░███████╗███╗░░██╗
██╔════╝░██╔══██╗██║░░░░░██╔══██╗██╔════╝████╗░██║
██║░░██╗░██║░░██║██║░░░░░██║░░██║█████╗░░██╔██╗██║
██║░░╚██╗██║░░██║██║░░░░░██║░░██║██╔══╝░░██║╚████║
╚██████╔╝╚█████╔╝███████╗██████╔╝███████╗██║░╚███║
░╚═════╝░░╚════╝░╚══════╝╚═════╝░╚══════╝╚═╝░░╚══╝

░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░*/









const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //  සෙසන් අයිඩී එක දාන්න👇👇👇 (උඩු කොමා දෙක ඇතුලේ)
  SESSION_ID: process.env.SESSION_ID || "Golden-Queen-MD-p4ZBmRCI#rs2XWki0qhTjYvlDhAWT1IjT92DSxKm8WeDCwMUUkX0ftrc", 

//  Mongodp URl එක දාන්න 👇👇👇 (උඩු කොමා දෙක ඇතුලේ )
  MONGODB: process.env.MONGODB || "mongodb+srv://yerix94679:<db_password>@cluster0.1umi9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",


MAX_SIZE: 500,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
