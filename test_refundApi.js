const getRefund=require('./refundApi');
const main = async function () {
    try{
        const refund_res= await getRefund.getRefund();
        console.log("Refund Response:", refund_res);
    }
    catch (error) {
        console.error("Error in main function:", error.message);    
    }
}
main();