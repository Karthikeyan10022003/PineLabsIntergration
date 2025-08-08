const get_cloud_status= require("./getCloudTxnStatus.js");
// const upload_transaction = require("./uploadBilledTransactions.js");
get_cloud_status.cloudStatus().then((response) => {
    console.log("Cloud Transaction Status Response:", response);        
}).catch((error) => {
    console.error("Error during Cloud Transaction Status Check:", error);           });
// main();