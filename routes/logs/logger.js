let fs = require('fs');
const logFile = "./logs/server.log";

function logRequest(data) {
    fs.appendFile(`${logFile}`, data, (err) => {
        if(err) {
            throw err;
        }
    });
}

function printLog(callback) {
    fs.readFile(`${logFile}`, (err, data) => {
        if(err) {
            throw err;
        }

        callback(data.toString());
    });
}

module.exports = { logRequest, printLog };
