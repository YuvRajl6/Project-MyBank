document.addEventListener("DOMContentLoaded", function () {
    const transferForm = document.getElementById("fundTransferForm");
    const transferStatus = document.getElementById("transferStatus");

    transferForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const senderAccount = document.getElementById("senderAccount").value;
        const receiverAccount = document.getElementById("receiverAccount").value;
        const amount = document.getElementById("amount").value;
        const note = document.getElementById("note").value;

        if (!senderAccount || !receiverAccount || !amount) {
            transferStatus.textContent = "Please fill out all required fields.";
            transferStatus.style.color = "red";
            return;
        }

        transferStatus.textContent = "Processing your transaction...";
        transferStatus.style.color = "blue";

        setTimeout(() => {
            const transactionSuccess = Math.random() > 0.2;
            if (transactionSuccess) {
                transferStatus.textContent = `Transaction Successful! \n $${amount} transferred to ${receiverAccount}.`;
                transferStatus.style.color = "green";
                transferForm.reset();
            } else {
                transferStatus.textContent = "Transaction Failed. Please try again later.";
                transferStatus.style.color = "red";
            }
        }, 2000);
    });

    console.log("Transfer Funds script loaded successfully.");
});
