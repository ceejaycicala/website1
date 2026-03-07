const DEV = false;

const INITIAL_DELAY = 400;
const COMPLETION_DELAY = 150;

const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loader-fill');
const loaderNum = document.getElementById('loader-num');

let isFirstRender = true;

// Render digits individually
function updateNum(val) {
    const chars = String(val).split('');

    loaderNum.innerHTML = chars.map((ch, i) => {
        const cls = isFirstRender ? ' changing' : '';
        const delay = isFirstRender ? `style="animation-delay:${i * 40}ms"` : '';
        return `<span class="loader-digit${cls}" ${delay}>${ch}</span>`;
    }).join('');

    isFirstRender = false;
    loaderFill.style.height = val + '%';
}

function complete() {
    // Exit each digit
    loaderNum.querySelectorAll('.loader-digit').forEach((d, i) => {
        d.style.animationDelay = `${i * 30}ms`;
        d.classList.add('exit');
    });

    // Sweep fill to 100%
    setTimeout(() => {
        loaderFill.classList.add('sweeping');
        loaderFill.style.height = '100%';
    }, COMPLETION_DELAY);

    // Wipe the whole loader upward to reveal the page
    setTimeout(() => {
        loader.classList.add('revealing');
        loader.addEventListener('transitionend', () => {
            loader.style.display = 'none';
        }, { once: true });
    }, COMPLETION_DELAY + 300);
}

if (DEV) {
    loader.style.display = 'none';
} else {
    let current = 0;
    updateNum(0);

    setTimeout(() => {
        const interval = setInterval(() => {
            current += Math.floor(Math.random() * 6) + 2;
            if (current >= 100) {
                current = 100;
                updateNum(current);
                clearInterval(interval);
                setTimeout(complete, 300);
            } else {
                updateNum(current);
            }
        }, 60);
    }, INITIAL_DELAY);
}