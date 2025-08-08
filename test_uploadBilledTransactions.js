const upload_transaction= require("./uploadBilledTransactions.js");
upload_transaction.uploadBilledTransaction().then((response) => {
    console.log("Upload Billed Transaction Response:", response);        
}).catch((error) => {
    console.error("Error during Upload Billed Transaction:", error);          
});