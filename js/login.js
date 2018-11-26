document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded");

    var logInBtn = document.querySelector(".loginLink");
    var overLay = document.querySelector(".overlay");
    var closeBtn = document.querySelector("#close");
    var signInBtn = document.getElementById("signIn");

    logInBtn.addEventListener("click", function() {
        overLay.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        overLay.style.display = "none";
    });

    signInBtn.addEventListener("click", function(e) {
        e.preventDefault();
        let userName = document.getElementsByName("userName")[0].value;
        let password = document.getElementsByName("password")[0].value;
        console.log(userName);
        if (userName === "sdiperi" && password === "saida") {
            alert("success");
            overLay.style.display = "none";
            logInBtn.innerHTML = `Hello ${userName}`;
        } else {
            alert("Incorrect Username or Password");
        }
    });
});
