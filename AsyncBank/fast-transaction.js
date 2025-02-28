document.addEventListener("DOMContentLoaded", function () {
    const transactionBtn = document.getElementById("startTransaction");
    const statusMessage = document.getElementById("statusMessage");
    
    transactionBtn.addEventListener("click", function () {
        statusMessage.textContent = "Processing your transaction...";
        statusMessage.style.color = "blue";
        
        setTimeout(() => {
            const success = Math.random() > 0.2;
            if (success) {
                statusMessage.textContent = "Transaction Successful!";
                statusMessage.style.color = "green";
            } else {
                statusMessage.textContent = "Transaction Failed. Please try again.";
                statusMessage.style.color = "red";
            }
        }, 2000);
    });
    
    document.getElementById("securityTips").addEventListener("mouseover", function () {
        this.style.color = "#ffcc00";
    });
    
    document.getElementById("securityTips").addEventListener("mouseout", function () {
        this.style.color = "#003366";
    });
});
