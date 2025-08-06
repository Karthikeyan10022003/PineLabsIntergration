const upload_transaction= require("./uploadBilledTransactions.js");
const main=async function(){
    try {
       
        const uploadResponse = await upload_transaction.uploadBilledTransaction();
        console.log("Response:", uploadResponse);
        
    
    
    } catch (error) {
        console.error("Error in main function:", error.message);
    }
}
main();