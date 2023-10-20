


// Smooth Scroll Animation
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });

            // Highlight Active Menu Link
            document.querySelectorAll('.menu-link').forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
});

// Add 'active' class to the appropriate menu link based on scroll position
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('.menu-link').forEach(link => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            const sectionTop = target.offsetTop;
            const sectionHeight = target.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.menu-link').forEach(link => {
                    link.classList.remove('active');
                });
                link.classList.add('active');
            }
        }
    });
});



const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('nav-scrolled');
    } else {
        header.classList.remove('nav-scrolled');
    }
});


// ... Previous script ...

// Toggle modal
document.querySelectorAll('[data-toggle="modal"]').forEach(item => {
    item.addEventListener('click', () => {
        const targetModalId = item.getAttribute('data-target');
        const modal = document.getElementById(targetModalId);
        modal.style.display = 'block';
    });
});

// Close modal
document.querySelectorAll('.close-modal').forEach(item => {
    item.addEventListener('click', () => {
        const modal = item.closest('.modal');
        modal.style.display = 'none';
    });
});


const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const isInViewport = el => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * 0.2 && // Adjust the threshold here
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        elements.forEach(el => {
            if (isInViewport(el)) {
                el.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
};

window.addEventListener('DOMContentLoaded', animateOnScroll); // Use DOMContentLoaded event


document.addEventListener("DOMContentLoaded", function() {
   
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const popup = document.querySelector(".popup");
    const popupImage = popup.querySelector(".popup-image");
    const closePopup = popup.querySelector(".close-popup");


    
     // Apply zoom-in effect with linear infinite animation to a specific image
     function applyZoomInEffect(image) {
        image.style.animation = "zoomIn 2s linear infinite";
        image.style.filter = "grayscale(100%)";
        image.style.filter = "blur(10px)";
    }

    // Animation trigger when the gallery section comes into view
    function checkScroll() {
        const rect = document.getElementById("gallery-section").getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            const randomIndex = Math.floor(Math.random() * galleryItems.length);
            applyZoomInEffect(galleryItems[randomIndex]);
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);



    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            popupImage.src = this.src;
            popup.classList.add("open");
        });
    });

    closePopup.addEventListener("click", function() {
        popup.classList.remove("open");
    });

    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.classList.remove("open");
        }
    });
});

