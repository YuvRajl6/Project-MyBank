document.addEventListener("DOMContentLoaded", function () {
    const statementResult = document.getElementById("statementResult");
    const accountInput = document.getElementById("accountNumber");
    
    document.querySelector("button").addEventListener("click", function () {
        const accountNumber = accountInput.value.trim();
        
        if (accountNumber === "") {
            statementResult.innerHTML = "<p style='color: red;'>Please enter a valid account number.</p>";
            return;
        }
        
        statementResult.innerHTML = "<p style='color: blue;'>Fetching statements...</p>";
        
        setTimeout(() => {
            const mockStatements = [
                { date: "2025-02-01", description: "Deposit", amount: "+$500.00" },
                { date: "2025-02-05", description: "Electricity Bill", amount: "-$60.00" },
                { date: "2025-02-10", description: "Grocery Shopping", amount: "-$120.00" },
                { date: "2025-02-15", description: "Salary Credit", amount: "+$2000.00" },
                { date: "2025-02-20", description: "Online Purchase", amount: "-$85.50" },
                { date: "2025-02-25", description: "Gym Membership", amount: "-$30.00" }
            ];
            
            let statementHTML = "<h3>Account Statements</h3><ul style='list-style:none; padding:0;'>";
            mockStatements.forEach(statement => {
                statementHTML += `<li><strong>${statement.date}</strong>: ${statement.description} - <span style='color: ${statement.amount.startsWith("+") ? "green" : "red"};'>${statement.amount}</span></li>`;
            });
            statementHTML += "</ul>";
            
            statementResult.innerHTML = statementHTML;
        }, 2000);
    });
    
    accountInput.addEventListener("keypress", function (event) {
        if (!/\d/.test(event.key)) {
            event.preventDefault();
            alert("Only numbers are allowed in the account number field.");
        }
    });
});
