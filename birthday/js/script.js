document.addEventListener('DOMContentLoaded', function() {
    // 登录页面逻辑
    if (document.querySelector('.login-page')) {
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const nickname = document.getElementById('nickname').value;
            
            if (nickname.trim()) {
                localStorage.setItem('userNickname', nickname);
                window.location.href = 'second.html';
            } else {
                alert('请输入昵称！');
            }
        });
    }

    // 第二个页面逻辑
    if (document.querySelector('.second-page')) {
        const nickname = localStorage.getItem('userNickname') || '访客';
        document.getElementById('nicknameDisplay').textContent = nickname;
    }
});
//导航页
// 滚动时改变导航栏透明度
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.6)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.4)';
    }
});

// 高亮当前页面链接
document.querySelectorAll('.nav-links a').forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add('active');
    }
});