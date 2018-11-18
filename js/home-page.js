var homePics = [
    "../images/Josh-Miller-Tahoe-3-824x579.jpg",
    "../images/Josh-Miller-Tahoe-10-824x526.jpg",
    "../images/Young_Milky-Way-Over-Bonsai-Rock.jpg",
    "../images/Young_Milky-Way-Over-Bonsai-Rock.jpg",
    "../images/green-field.jpg",
    "../images/tulip-garden.jpg"
];

var homeBackground = document.querySelector(".home-slideshow");

var count = 0;

setInterval(function() {
    if (count < homePics.length) {
        homeBackground.style.backgroundImage = `url(${homePics[count]})`;
        count++;
        console.log(count);
    } else {
        count = 0;
    }
}, 5000);
