function showStage(stageId) {
    document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));
    setTimeout(() => {
        document.getElementById(stageId).classList.add('active');
    }, 100);
}

function toCake() {
    const lid = document.querySelector('.lid');
    lid.style.transform = 'translateY(-180px) rotate(25deg)';
    lid.style.opacity = '0';
    
    // Ledakan Konfeti Kecil saat kado buka
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    
    setTimeout(() => showStage('stage-cake'), 800);
}

function blowCandle() {
    const flame = document.getElementById('flame');
    flame.classList.add('blown'); // Animasi api kena tiup
    
    // Ledakan Besar (Surprise Effect)
    setTimeout(() => {
        confetti({
            particleCount: 300,
            spread: 120,
            origin: { y: 0.6 },
            colors: ['#ff8fa3', '#ffffff', '#c8b6ff']
        });
    }, 300);
    
    setTimeout(() => showStage('stage-envelope'), 1800);
}

function toMain() {
    const whiteOut = document.getElementById('white-out');
    whiteOut.classList.add('active');
    
    setTimeout(() => {
        showStage('stage-main');
        new Swiper(".mySwiper", {
            pagination: { el: ".swiper-pagination" },
            autoplay: { delay: 3000 },
            loop: true
        });
        setTimeout(() => whiteOut.classList.remove('active'), 400);
    }, 800);
}

function finalBlast() {
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.8 } });
}