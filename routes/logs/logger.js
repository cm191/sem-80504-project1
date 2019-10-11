let fs = require('fs');
const logFile = "server.log";

function logRequest(data) {
    fs.appendFile(`${logFile}`, data, (err) => {
        if(err) {
            throw err;
        }
    });
}

function printLog() {
    fs.readFile(`${logFile}`, (err, data) => {
        if(err) {
            throw err;
        }

        return data;
    });
}

module.exports = { logRequest, printLog };