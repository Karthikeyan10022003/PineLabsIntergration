const https = require('https');
require('dotenv').config();

exports.uploadBilledTransaction = async function () {
  const body = {
    TransactionNumber: `TXN${Date.now()}`, // Unique transaction number
    SequenceNumber: 1,
    AllowedPaymentMode: "1",
    Amount: "100",
    UserID: "Karthik",
    MerchantID: process.env.Merchant_id,
    SecurityToken: process.env.Security_token,
    Clientid: process.env.Client_id,
    Storeid: process.env.Store_id
  };

  console.log("Request Body:", body);

  try {
    const response = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'plutuscloudserviceuat.in',
        port: 8201,
        path: '/API/CloudBasedIntegration/V1/UploadBilledTransaction',
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
    console.error("Upload Error:", error.message);
    return null;
  }
};
