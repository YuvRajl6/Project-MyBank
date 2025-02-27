document.addEventListener("DOMContentLoaded", function () {
    const learnMoreBtn = document.getElementById("learnMore");
    const featureList = document.querySelector(".feature-list");
    
    learnMoreBtn.addEventListener("click", function () {
        alert("Your security is our top priority! We implement the latest encryption and fraud detection technologies to keep your data safe.");
    });
    
    featureList.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("feature")) {
            event.target.style.transform = "scale(1.1)";
            event.target.style.transition = "transform 0.3s ease-in-out";
        }
    });
    
    featureList.addEventListener("mouseout", function (event) {
        if (event.target.classList.contains("feature")) {
            event.target.style.transform = "scale(1)";
        }
    });
    
    console.log("Security & Protection script loaded successfully.");
});
