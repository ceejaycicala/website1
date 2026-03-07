// Navbar Visibility 
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const progressTrack = document.querySelector('.progress-track');

window.addEventListener('scroll', () => {
    if (window.scrollY > hero.offsetHeight - 200) {
        navbar.classList.remove('hidden');
        progressTrack.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
        progressTrack.classList.add('hidden');
    }
});

// Progress Bar 
const bar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
});