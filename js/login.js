document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded");

    var logInBtn = document.querySelector(".loginLink");
    var overLay = document.querySelector(".overlay");
    var closeBtn = document.querySelector("#close");

    logInBtn.addEventListener("click", function() {
        overLay.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        overLay.style.display = "none";
    });
});

// function logIn() {
//     var loginModal = document.querySelector(".login-modal");
//     var modalBox = document.querySelector(".container-login");
//     loginModal.style.display = "block";
//     console.log(loginModal, modalBox);
// }
