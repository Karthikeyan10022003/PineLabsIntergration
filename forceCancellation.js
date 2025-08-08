const https = require('https');
require('dotenv').config();

exports.cancelTransaction = async function () {
  const body = {
    StoreId: process.env.Store_id,
    ClientId: process.env.Client_id,
    MerchantID: process.env.Merchant_id,
    SecurityToken: "a4c9741b-2889-47b8-be2f-ba42081a246e",
    PlutusTransactionReferenceID: 727817,
    Amount: "100",
    TakeToHomeScreen: true,
    ConfirmationRequired: false
  };

  try {
    const response = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'plutuscloudserviceuat.in',
        port: 8201,
        path: '/API/CloudBasedIntegration/V1/CancelTransactionForced',
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
    console.error("Force Cancellation Error:", error.message);
    return null;
  }
}
