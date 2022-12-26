const https = require('https');
const fs = require('fs');


const httpsAgent = new https.Agent({
    cert: fs.readFileSync("/etc/ssl/certs/robotics-club_hmu_gr_interm.cer"),
    key: fs.readFileSync("/etc/ssl/private/robotics-club_key.pem")
})


module.exports = httpsAgent;