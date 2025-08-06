const axios = require('axios');

require('dotenv').config();
const uploadUrl = "https://www.plutuscloudserviceuat.in:8201/API/CloudBasedIntegration/V1/UploadBilledTransaction";




exports.getRefund = async function () {
  const body = {
   TransactionNumber:`TXN${Date.now()}`, // Unique transaction number
    SequenceNumber: 1,                            
    AllowedPaymentMode: "1",                              
    Amount: "100",                                     
    UserID: "Karthik",                 
    MerchantID:process.env.Merchant_id ,                                
    SecurityToken: process.env.Security_token,  
    Clientid:process.env.Client_id,
    Storeid:process.env.Store_id,
    TxnType:3,
    OriginalPlutusTransactionId:727550
  };
  console.log("Request Body:", body);
  try {
    const response = await axios.post(uploadUrl, body);
    return response.data;
  } catch (error) {
    console.error("Upload Error:", error.message);
    return null;
  }
};




