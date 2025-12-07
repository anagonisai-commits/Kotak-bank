document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('loginId').value.trim();
    const pwd = document.getElementById('password').value.trim();

    if (!id || !pwd) {
        alert('Please enter Login ID and MPIN');
        return;
    }

    alert('Login successful! (Demo app)');
    // later this will go to dashboard.html
    // window.location.href = 'dashboard.html';
});
