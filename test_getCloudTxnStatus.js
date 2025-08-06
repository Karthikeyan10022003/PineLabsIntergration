const get_cloud_status= require("./getCloudTxnStatus.js");
// const upload_transaction = require("./uploadBilledTransactions.js");
const main = async function () {    
    try {
       
        const PTRN=730406;
        const status=await get_cloud_status.cloudStatus(PTRN)
        console.log("Status Response:", status);
    
    } catch (error) {
        console.error("Error in main function:", error.message);
    }
}
main();