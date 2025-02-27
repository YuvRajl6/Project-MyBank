document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                event.preventDefault(); // Prevent only for in-page navigation
                window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
            }
        });
    });
    
    });

    // Fade-in effect for sections on scroll
    const sections = document.querySelectorAll(".content-section");
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
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });

    // Dynamic year update in footer
    document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Banking System. All Rights Reserved.`;

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

    // Add hover effect to sections
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.3)";
        });
        section.addEventListener("mouseleave", () => {
            section.style.boxShadow = "0px 6px 12px rgba(0,0,0,0.2)";
        });
    });

    // Image gallery effect for about page
    const images = document.querySelectorAll(".about-gallery img");
    images.forEach(img => {
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");
            overlay.innerHTML = `<img src="${img.src}" class="expanded-image"><button class="close-overlay">×</button>`;
            document.body.appendChild(overlay);

            document.querySelector(".close-overlay").addEventListener("click", () => {
                overlay.remove();
            });
        });
    });
});