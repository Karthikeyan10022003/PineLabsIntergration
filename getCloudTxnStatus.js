const axios = require('axios');
require('dotenv').config();

const statusUrl = "https://www.plutuscloudserviceuat.in:8201/API/CloudBasedIntegration/V1/GetCloudBasedTxnStatus";
exports.cloudStatus = async function (data) {
  const PTRN = data;

  const body = {
    MerchantID:process.env.Merchant_id,
    SecurityToken:process.env.Security_token,
    Clientid:process.env.Client_id,
    Storeid:process.env.Store_id,
    PlutusTransactionReferenceID:727817
  };
  console.log("Request Body:", body);

  try {
    const response = await axios.post(statusUrl, body);
    return response.data;
  } catch (error) {
    console.error("Status Check Error:", error.message);
    return null;
  }
};
