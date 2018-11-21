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
            "<p>Price range: Tandem Skydiving 8,000-18,000 ft: $99 to $375</p><hr>"
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
            "<p>Cities Best For Hiking: SALT LAKE CITY - UT, PHOENIX - AZ, PORTLAND - OR, ASHEVILLE - NC, SEATTLE - WA, FORT COLLINS - CO, SOUTH LAKE TAHOE - CA, FAIRBANKS - AK, ALBUQUERQUE - NM, FLAGSTAFF - AZ</p>",
        price:
            "<p>Price Range: Tandem Skydiving 8,000-18,000 ft: $99 to $375</p>"
    }
];

activities.forEach(({ name, video, cities, price }) => {
    activitiesContainer.innerHTML += name + video + cities + price;
});
