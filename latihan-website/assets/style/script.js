const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

// Set initial position for sidebar
sidebar.style.left = '-250px';

sidebarToggle.addEventListener('click', () => {
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
});

function typeWriter(element, text, speed = 70) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

let text_subjudul = 'Lampung, provinsi di ujung selatan Sumatera, menawarkan keindahan alam yang memukau dengan pantai-pantai eksotis dan pegunungan yang hijau';

window.onload = function() {
    const title = document.getElementById('typing-title');
    const subtitle = document.getElementById('typing-subtitle');
    
    // Ensure title and subtitle elements exist
    if (title && subtitle) {
        typeWriter(title, 'Lampung', 100);
        setTimeout(() => {
            typeWriter(subtitle, text_subjudul, 30);
        }, 1000);
    } else {
        console.error('Element with ID "typing-title" or "typing-subtitle" not found.');
    }
};
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true,
});
sr.reveal('.awal',{delay:100,origin:'left'});
sr.reveal('.tengah',{delay:150,origin:'right'});
sr.reveal('.akhir',{delay:200,origin:'left'});
sr.reveal('img',{delay:100,origin: 'top'});