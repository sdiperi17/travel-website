var activitiesContainer = document.querySelector(".activities-container");

var activities = [
    {
        name: "<h1>Skydiving</h1>",
        video: `<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/j54R3P76aS4"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>`,
        cities:
            "<p>Cities best for Skydiving: Hawaii - Waialua,  Alaska - Anchorage, Florida - Key West, Pennsylvania - Poconos Mountains, California - Monterey</p>",
        price:
            "<p>Price range: Tandem Skydiving 8,000-18,000 ft: $99 to $375</p>"
    },
    {
        name: "<h1>Scuba Diving</h1>",
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xm-gC4qq6js?start=28" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        cities:
            "<p> Cities best for Scuba Diving: Monterey Bay - California, Santa Catalina Island - California, Channel Islands - California, Southeast Florida, Morehead - North Carolina, Bonne Terre - Missouri, Flower Garden Banks - Texas</p>",
        price:
            "<p>Price range: A quick survey of dive centers in the Midwest US showed training costs to run between $350 and $450 or more depending on what was included and location. We sometimes see dive centers advertising $99 classes – let's look at those a little later.</p>"
    },
    {
        name: "<h1>Hiking</h1>",
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/wdA4LZEAge0?start=77" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        cities:
            "<p>Cities Best For Hiking: Salt Lake City - UT, Phoenix - AZ, Portland - OR, Asheville - NC, Seattle - WA, Fort Collins - CO, South Lake Tahoe - CA, Fairbanks - AK, Albuquerque - NM, Flagstaff - AZ</p>",
        price:
            "<p>Price Range: Tandem Skydiving 8,000-18,000 ft: $99 to $375</p>"
    }
];

activities.forEach(({ name, video, cities, price }) => {
    activitiesContainer.innerHTML += name + video + cities + price;
});

var thingsPics = [
    "../images/scuba-diving.jpg",
    "../images/surfing1.jpeg",
    "../images/skuba-diving2.jpg",
    "../images/snowboarding2.webp",
    "../images/skydive3.jpg",
    "../images/skydiving-in-usa.jpg",
    "../images/snowboarding2.webp"
];

var thingsBackground = document.querySelector(".things-to-do-background");

var count = 0;

setInterval(function() {
    if (count < thingsPics.length) {
        thingsBackground.style.backgroundImage = `url(${thingsPics[count]})`;
        count++;
        console.log(count);
    } else {
        count = 0;
    }
}, 5000);
