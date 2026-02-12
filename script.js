// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger-btn');
    
    // Toggle Active Class for Menu Dropdown
    nav.classList.toggle('active');
    
    // Toggle Active Class for Hamburger Animation (Lines to X)
    hamburger.classList.toggle('active');
}

// --- DESKTOP 3D TILT EFFECT ---
document.addEventListener('DOMContentLoaded', () => {
    const tiltEl = document.querySelector('.tilt-element');
    const hero = document.querySelector('.hero');

    if (window.matchMedia("(pointer: fine)").matches && tiltEl) {
        hero.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;
            tiltEl.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });

        hero.addEventListener('mouseleave', () => {
            tiltEl.style.transform = `rotateY(-10deg) rotateX(5deg)`;
        });
    }
});





// --- MODERN IMAGE VIEWER ---
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerCaption = document.getElementById('viewer-caption');
const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        // 1. Set the content
        viewerImg.src = img.src;
        
        // Find the caption text from the sibling <caption> tag
        const caption = img.parentElement.querySelector('caption');
        viewerCaption.textContent = caption ? caption.textContent : '';

        // 2. Show the modal with animation
        viewer.classList.add('active');
        
        // 3. Lock site scroll
        document.body.style.overflow = 'hidden';
    });
});

// Close when clicking anywhere on the background
viewer.addEventListener('click', () => {
    viewer.classList.remove('active');
    document.body.style.overflow = 'auto'; // Unlock scroll
});

// Close with Escape key for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewer.classList.contains('active')) {
        viewer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});