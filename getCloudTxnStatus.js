const https = require('https');
require('dotenv').config();

exports.cloudStatus = async function () {
  const body = {
    MerchantID: process.env.Merchant_id,
    SecurityToken: process.env.Security_token,
    Clientid: process.env.Client_id,
    Storeid: process.env.Store_id,
    PlutusTransactionReferenceID: 727817
  };

  console.log("Request Body:", body);

  try {
    const response = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'plutuscloudserviceuat.in',
        port: 8201,
        path: '/API/CloudBasedIntegration/V1/GetCloudBasedTxnStatus',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(JSON.stringify(body)),
        }
      };

      const req = https.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => data += chunk);
        res.on("end", () => {
          if (res.statusCode === 200) {
            resolve(data);
          } else {
            reject(new Error(`Unexpected HTTP Status: ${res.statusCode}. Response: ${data}`));
          }
        });
      });

      req.on("error", (err) => {
        reject(new Error(`HTTPS Request Error: ${err.message}`));
      });

      const postData = JSON.stringify(body);
      req.write(postData);
      req.end();
    });

    return response; 
  } catch (error) {
    console.error("Status Check Error:", error.message);
    return null;
  }
};
