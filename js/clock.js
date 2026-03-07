// Live Clock 
function updateClock() {
    const now = new Date().toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Melbourne',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const day = new Date().toLocaleDateString('en-AU', {
        timeZone: 'Australia/Sydney',
        weekday: 'long'
    }).toUpperCase();
    const el = document.getElementById('footer-time');
    if (el) el.textContent = `${day} ${now} MEL`;
}

updateClock();
setInterval(updateClock, 1000);