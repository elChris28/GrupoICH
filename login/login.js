document.addEventListener("DOMContentLoaded", function () {
    const users = [
        { username: "admin", password: "1234", redirectTo: "" },
        { username: "usuario", password: "5678", redirectTo: "../index.html"} 
    ];

    if (window.location.pathname.includes("/login/login.html")) {
        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let errorMsg = document.getElementById("error-msg");

            let validUser = users.find(user => user.username === username && user.password === password);

            if (validUser) {
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("user", username); 
                window.location.href = validUser.redirectTo; 
            }  else {
                errorMsg.textContent = "Usuario o contraseña incorrectos.";
            }
        });
    } else {
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "login/login.html"; // 🔄 Ajustar ruta de login
        }
    }
});
