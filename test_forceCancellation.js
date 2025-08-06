const force_cancel=require('./forceCancellation');
const main = async function () {
    try {
        const cancelResponse = await force_cancel.cancelTransaction();
        console.log("Cancellation Response:", cancelResponse);
    } catch (error) {
        console.error("Error in main function:", error.message);
    }
}
main();