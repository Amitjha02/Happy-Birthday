document.addEventListener('DOMContentLoaded', () => {
    // === CONFIGURATION ===
    // Set the birthday date here (Year, Month (0-11), Day, Hour, Minute)
    // Example: December 25th, 2025 -> new Date(2025, 11, 25, 0, 0)
    // If the date is past, it will set for the next year.
    const today = new Date();
    let birthdayDate = new Date(today.getFullYear(), 2, 20); // March 20th (Month is 0-indexed)

    // If birthday has passed this year, set for next year
    if (today > birthdayDate) {
        birthdayDate.setFullYear(today.getFullYear() + 1);
    }

    // === COUNTDOWN LOGIC ===
    function updateCountdown() {
        const now = new Date();
        const diff = birthdayDate - now;

        if (diff < 0) {
            document.querySelector('.countdown').innerHTML = "<h1>Happy Birthday! 🎉</h1>";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // === FLOATING HEARTS BACKGROUND ===
    const heartsContainer = document.querySelector('.hearts-bg');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.2;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 5000);

    // === SHOWER LOVE BUTTON ===
    const loveBtn = document.getElementById('love-btn');
    const emojis = ['💖', '💕', '💋', '🌹', '🥰', '😍', '✨', '💝'];

    loveBtn.addEventListener('click', showerLove);

    function showerLove() {
        for (let i = 0; i < 30; i++) {
            setTimeout(createEmoji, i * 100);
        }
    }

    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.bottom = '-50px';
        emoji.style.fontSize = Math.random() * 30 + 20 + 'px';
        emoji.style.zIndex = '1000';
        emoji.style.pointerEvents = 'none';

        // Animation
        const duration = Math.random() * 3 + 2;
        emoji.style.transition = `all ${duration}s ease-out`;

        document.body.appendChild(emoji);

        // Trigger animation
        setTimeout(() => {
            emoji.style.bottom = '120vh';
            emoji.style.left = `calc(${emoji.style.left} + ${Math.random() * 200 - 100}px)`;
            emoji.style.opacity = '0';
            emoji.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 50);

        // Cleanup
        setTimeout(() => {
            emoji.remove();
        }, duration * 1000);
    }

    // === RED ROSE PROPOSAL ===
    const roseBtn = document.getElementById('rose-btn');
    const modal = document.getElementById('proposal-modal');

    roseBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    window.closeModal = function () {
        modal.classList.add('hidden');
    }

    window.celebrateProposal = function () {
        closeModal();
        showerLove(); // Double the love!
        showerLove();

        // Change title
        document.querySelector('h1').innerText = "SHE SAID YES! 💍";
    }
});
