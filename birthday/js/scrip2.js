const emojis = ['💖', '🎈', '⭐', '🍰'];
const messages = [
    '愿你的生日如璀璨星辰般闪耀，幸福永远与你相伴！',
    '在这个特别的日子里，祝你生日快乐，梦想成真！',
    '生日快乐！愿生活的每一天都充满阳光和欢笑。',
    '愿你的生日是一场奇妙的冒险，快乐永不止步！',
    '祝你生日快乐，岁岁年年都有今朝的快乐！'
];
const messageElement = document.getElementById('message');
const audio = document.getElementById('birthdayMusic');
const musicToggle = document.getElementById('musicToggle');

document.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
});

function createFallingEmoji() {
    const emoji = document.createElement('span');
    emoji.classList.add('falling');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(emoji);

    setTimeout(() => {
        document.body.removeChild(emoji);
    }, 5000);
}

setInterval(createFallingEmoji, 500);

document.addEventListener('mousemove', (e) => {
    const cake = document.createElement('span');
    cake.classList.add('falling');
    cake.textContent = '🎈';
    cake.style.left = e.clientX + 'px';
    cake.style.top = e.clientY + 'px';
    cake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(cake);

    setTimeout(() => {
        document.body.removeChild(cake);
    }, 5000);
});

musicToggle.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
    