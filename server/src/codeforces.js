const https = require('https');
const util = require('./util');
const options = {
    hostname: 'codeforces.com',
    path: '/api/contest.list',
    method: 'GET'
}

async function getData(numTime) {
    const rawData = await getRawData(numTime).catch(error => {console.log(error)});
    contests = rawData.result;
    results = [];
    for (i = 0; i < contests.length; i++) {
        if (contests[i].relativeTimeSeconds > 0) {
            break;
        }
        results.push({name: contests[i].name, time: util.timeConvert(-contests[i].relativeTimeSeconds)});
    }
    return results;
}
function getRawData(numTime){
    return new Promise(function(resolve, reject) {
        const req = https.request(options, (res) => {
            // reject on bad status
            if (res.statusCode < 200 || res.statusCode >= 300) {
                console.log("BAD STATUS");
                return reject(new Error('statusCode=' + res.statusCode));
            }
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', function() {
                try {
                    data = JSON.parse(data);
                } catch(e) {
                    console.log(e);
                    reject(e);
                }
                resolve(data);
            })
        });
        req.on('error', function(err) {
            reject(err);
        });
        req.end();
    })
    
}

module.exports = getData;