document.addEventListener("DOMContentLoaded", function(event) {
    var west = [
        {
            name: `<a href="../pages/san-francisco.html"><h2>San Francisco</h2></a>`,
            image: `<div class="abt-city">
       <img src="../images/San-francisco.jpg" alt="" />
</div>`,
            description: `<p>
        The city of San Francisco is situated at the tip of
        a peninsula surrounded by the Pacific Ocean on the
        west, the San Francisco Bay on the east, and the
        Golden Gate, a narrow marine passageway between San
        Francisco and Marin County to the north.</p>`
        },
        {
            name: `<h2>Seattle</h2>`,
            image: `<div class="abt-city">
        <img src="../images/seattle.jpg" alt="" />
    </div>`,
            description: `<p>
        Seattle, a city on Puget Sound in the Pacific
        Northwest, is surrounded by water, mountains and
        evergreen forests, and contains thousands of acres
        of parkland. Washington State’s largest city, it’s
        home to a large tech industry, with Microsoft and
        Amazon headquartered in its metropolitan area. The
        futuristic Space Needle, a 1962 World’s Fair legacy,
        is its most iconic landmark.</p>`
        },
        {
            name: `<h2>Las Vegas</h2>`,
            image: `<div class="abt-city">
    <img src="../images/seattle.jpg" alt="" />
</div>`,
            description: `<p>
    Las Vegas, in Nevada’s Mojave Desert, is a resort
    city famed for its vibrant nightlife, centered
    around 24-hour casinos and other entertainment
    options. Its main street and focal point is the
    Strip, just over 4 miles long. This boulevard is
    home to themed hotels with elaborate displays such
    as fountains synchronized to music as well as
    replicas of an Egyptian pyramid, the Venetian Grand
    Canal, and the Eiffel Tower.</p>`
        },
        {
            name: `<h2>Los Angeles</h2>`,
            image: `<div class="abt-city">
        <img src="../images/los-angeles.jpeg" alt="" />
    </div>`,
            description: `<p>
        The City of Los Angeles holds many distinctions.
        L.A. is the entertainment capital of the world, a
        cultural mecca boasting more than 100 museums, and a
        paradise of idyllic weather. From tourist
        attractions like the Walk of Fame’s collection of
        stars (numbering more than 2,614 and growing by one
        or two a month) to career opportunities like those
        presented in the expanding tech industry,
        Los&nbsp;Angeles is the place to be.</p>`
        }
    ];

    var central = [
        {
            name: "<h2>Nashville</h2>",
            image: `<div class="abt-city">
            <img src="../images/Skydiving-Nashville.jpg" alt="" />
        </div>`,
            description: `<p>Nashville is the capital of the U.S. state of Tennessee and home to Vanderbilt University. Legendary country music venues include the Grand Ole Opry House, home of the famous “Grand Ole Opry” stage and radio show. The Country Music Hall of Fame and Museum and historic Ryman Auditorium are Downtown, as is the District, featuring honky-tonks with live music and the Johnny Cash Museum, celebrating the singer's life.
            </p>`
        },
        {
            name: `<h2>Chicago</h2>`,
            image: `<div class="abt-city"><img src="../images/Chicago.jpg" alt="" /></div>`,
            description: `<p>
        Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.</p>`
        },
        {
            name: `<h2>New Orleans</h2>`,
            image: `<div class="abt-city">
            <img src="../images/new-orleans.jpg" alt="" />
        </div>
    `,
            description: `New Orleans is a Louisiana city on the Mississippi River, near the Gulf of Mexico. Nicknamed the "Big Easy," it's known for its round-the-clock nightlife, vibrant live-music scene and spicy, singular cuisine reflecting its history as a melting pot of French, African and American cultures. Embodying its festive spirit is Mardi Gras, the late-winter carnival famed for raucous costumed parades and street parties.</p>`
        },
        {
            name: `<h2>Dallas</h2>`,
            image: `
            <div class="abt-city"><img src="../images/Dallas.jpg" alt="" /></div>
            `,
            description: `<p>
            Dallas, a modern metropolis in north Texas, is a commercial and cultural hub of the region. Downtown’s Sixth Floor Museum at Dealey Plaza commemorates the site of President John F. Kennedy’s assassination in 1963. In the Arts District, the Dallas Museum of Art and the Crow Collection of Asian Art cover thousands of years of art. The sleek Nasher Sculpture Center showcases contemporary sculpture.</p>`
        }
    ];

    var east = [
        {
            name: "<h2>Miami</h2>",
            image: `<div class="abt-city">
            <img src="../images/miami.jpg" alt="" />
        </div>`,
            description: `<p>Miami is an international city at Florida's southeastern tip. Its Cuban influence is reflected in the cafes and cigar shops that line Calle Ocho in Little Havana. On barrier islands across the turquoise waters of Biscayne Bay is Miami Beach, home to South Beach. This glamorous neighborhood is famed for its colorful art deco buildings, white sand, surfside hotels and trendsetting nightclubs.
            </p>`
        },
        {
            name: `<h2>New York</h2>`,
            image: `<div class="abt-city"><img src="../images/ny.jpg" alt="" /></div>`,
            description: `<p>
            New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.
            .</p>`
        },
        {
            name: `<h2>Boston</h2>`,
            image: `<div class="abt-city"><img src="../images/boston.jpg" alt="" /></div>`,
            description: `Boston is Massachusetts’ capital and largest city. Founded in 1630, it’s one of the oldest cities in the U.S. The key role it played in the American Revolution is highlighted on the Freedom Trail, a 2.5-mile walking route of historic sites that tells the story of the nation’s founding. One stop, former meeting house Faneuil Hall, is a popular marketplace.</p>`
        },
        {
            name: `<h2>Atlanta</h2>`,
            image: `<div class="abt-city"><img src="../images/atlanta.jpg" alt="" /></div>`,
            description: `<p>
            Atlanta is the capital of the U.S. state of Georgia. It played an important part in both the Civil War and the 1960s Civil Rights Movement. Atlanta History Center chronicles the city's past, and the Martin Luther King Jr. National Historic Site is dedicated to the African-American leader’s life and times. Downtown, Centennial Olympic Park, built for the 1996 Olympics, encompasses the massive Georgia Aquarium.</p>`
        }
    ];

    var slideContainer = document.querySelector(".cities");
    var westBtn = document.getElementById("west");
    var centralBtn = document.getElementById("central");
    var eastBtn = document.getElementById("east");
    var selectedState = west;
    westBtn.style.color = "red";

    westBtn.addEventListener("click", function() {
        eastBtn.style.color = "black";
        centralBtn.style.color = "black";
        westBtn.style.color = "red";
        selectedState = west;
        showCities(0);
    });

    centralBtn.addEventListener("click", function() {
        westBtn.style.color = "black";
        eastBtn.style.color = "black";
        centralBtn.style.color = "red";
        selectedState = central;
        showCities(0);
    });

    eastBtn.addEventListener("click", function() {
        westBtn.style.color = "black";
        centralBtn.style.color = "black";
        eastBtn.style.color = "red";
        selectedState = east;
        showCities(0);
    });
    // Slide Show

    console.log("running");
    var slideIndex = 0;
    var nextBtn = document.getElementById("next");
    var backBtn = document.getElementById("back");

    function slideCities(n) {
        console.log(n, slideIndex);
        showCities((slideIndex += n));
    }

    function showCities(n) {
        console.log("showcities", n, slideIndex);

        console.log(west[slideIndex]);
        if (n > selectedState.length - 1) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = selectedState.length;
        }
        let { name, image, description } = selectedState[slideIndex];
        slideContainer.innerHTML = name + image + description;
        console.log(image);
    }

    showCities(slideIndex);
    nextBtn.addEventListener("click", () => {
        slideCities(1);
    });
    backBtn.addEventListener("click", () => {
        slideCities(-1);
    });
});
