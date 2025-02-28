document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                event.preventDefault(); 
                window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
            }
        });
    });

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

    
    const footer = document.querySelector("footer p");
    if (footer) {
        footer.innerHTML = `&copy; ${new Date().getFullYear()} Banking System. All Rights Reserved.`;
    }

   


    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.3)";
        });
        section.addEventListener("mouseleave", () => {
            section.style.boxShadow = "0px 6px 12px rgba(0,0,0,0.2)";
        });
    });


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

    
    const lazyImages = document.querySelectorAll("img[data-src]");
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.removeAttribute('data-src');
                observer.unobserve(image);
            }
        });
    });

    lazyImages.forEach(image => {
        lazyLoadObserver.observe(image);
    });


    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});
