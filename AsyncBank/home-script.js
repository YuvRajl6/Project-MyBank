function toggleSignupModal() {
    const modal = document.getElementById("signupModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("signupModal");
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.getElementById("closeModal");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

    window.onclick = function(event) {
        const modal = document.getElementById("signupModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    

    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#0f1e49";
            header.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        } else {
            header.style.backgroundColor = "rgba(30, 58, 138, 0.9)";
            header.style.boxShadow = "none";
        }
    });
    
    document.querySelectorAll(".feature-box").forEach(box => {
        box.addEventListener("mouseenter", function() {
            this.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.3)";
            this.style.transform = "scale(1.1)";
        });
        box.addEventListener("mouseleave", function() {
            this.style.boxShadow = "0px 5px 12px rgba(0, 0, 0, 0.25)";
            this.style.transform = "scale(1)";
        });
    });
    

    const sections = document.querySelectorAll(".features, .hero");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        observer.observe(section);
    });
});
