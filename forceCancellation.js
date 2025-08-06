const axios = require('axios');
require('dotenv').config();
const force_url="https://www.plutuscloudserviceuat.in:8201/API/CloudBasedIntegration/V1/CancelTransactionForced"
exports.cancelTransaction = async function (data) {
   

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
    const response = await axios.post(force_url, body);
    return response.data;
  } catch (error) {
    console.error("Force Cancellation Error:", error.message);
    return null;
  }
}
