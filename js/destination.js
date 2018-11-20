document.addEventListener("DOMContentLoaded", function(event) {
    console.log("running");
    var slideIndex = 1;
    var nextBtn = document.getElementById("next");
    var backBtn = document.getElementById("back");

    function slideCities(n) {
        showCities((slideIndex += n));
        console.log(nextBtn);
    }
    console.log(slideCities(1));

    function showCities(n) {
        var i;
        var x = document.getElementsByClassName("westCities");

        console.log(x);
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            console.log(x[i]);
        }

        x[slideIndex - 1].style.display = "block";
    }

    showCities(slideIndex);
    nextBtn.addEventListener("click", () => {
        slideCities(1);
    });
    backBtn.addEventListener("click", () => {
        slideCities(-1);
    });
});
