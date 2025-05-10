const https = require('https');

//starting module...It should have at least five funtions when we are done
// we have one so far...

module.exports = {
//Get Call function    
    getwithbearerToken:function (url,Token) {


        const options = {
            Headers: {
                Authorization: `Bearer  ${Token}`
            }
        }; //End Setting our options
        return new Promise((resolve, reject) => {
            const req = https.get(url, options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
            });
            req.on('error', (error) => {
                reject(error);
            });

            req.end();
        });
          //End Promise

          
       } //end getwithbearerToken function
   }; //End module.exports