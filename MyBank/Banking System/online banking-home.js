document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                event.preventDefault(); // Prevent only for in-page links
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
    
    });

    // Get Started button alert
    document.getElementById("getStarted").addEventListener("click", function () {
        alert("Redirecting to Online Banking Portal...");
        window.location.href = "login.html";
    });

    // Back-to-top button functionality
    const backToTop = document.createElement("button");
    backToTop.innerText = "↑";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Feature section hover effect
    document.querySelectorAll(".feature").forEach(feature => {
        feature.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.3)";
        });
        feature.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0px 6px 12px rgba(0,0,0,0.2)";
        });
    });
});
