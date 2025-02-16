// Settings Panel Toggle
document.getElementById('settings-toggle').addEventListener('click', function() {
    document.getElementById('settings-panel').classList.toggle('active');
});

// Font Size Control
document.getElementById('font-size-slider').addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--font-size', e.target.value + 'px');
});

// Theme Selector
document.getElementById('theme-selector').addEventListener('change', function(e) {
    const theme = e.target.value;
    if (theme === 'dark') {
        document.body.style.backgroundColor = var(--midnight-blue);
        document.body.style.color = var(--pearl-white);
    } else {
        document.body.style.backgroundColor = var(--pearl-white);
        document.body.style.color = var(--deep-mocha);
    }
});
