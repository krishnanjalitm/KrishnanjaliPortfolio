// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typed JS Animation
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'MCA Student', 'Tech Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Form Submission Handling
const contactForm = document.getElementById('contact-form');
window.submitted = false; // Global flag for iframe onload

window.showPopup = function() {
    const popupOverlay = document.getElementById('popup-overlay');
    if (popupOverlay) {
        popupOverlay.classList.add('active');
    }
    if (contactForm) {
        contactForm.reset();
    }
    window.submitted = false;
};

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Allow the default form submission to the hidden iframe
        window.submitted = true;
    });
}

// Popup Close Logic
const closePopupBtn = document.getElementById('close-popup');
const popupOverlay = document.getElementById('popup-overlay');

if (closePopupBtn && popupOverlay) {
    closePopupBtn.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
        }
    });
}
