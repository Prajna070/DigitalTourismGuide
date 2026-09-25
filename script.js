// ==========================================
// TOURIST PLACES
// ==========================================

const places = [

    {
        name: "Mysore Palace",

        description:
            "A famous historical palace and one of the major tourist attractions of Mysuru.",

        timing:
            "10:00 AM - 5:30 PM",

        location:
            "Mysuru, Karnataka",

        image:
            "images/mysore-palace.jpg",

        gallery: [
            "images/mysore-palace.jpg",
            "images/mysore-palace-2.jpg"
            
        ],

        map:
            "https://www.google.com/maps/search/?api=1&query=Mysore+Palace+Mysuru"
    },


    {
        name: "Chamundi Hill",

        description:
            "A scenic hill known for the Chamundeshwari Temple and panoramic views of Mysuru.",

        timing:
            "7:30 AM - 9:00 PM",

        location:
            "Mysuru, Karnataka",

        image:
            "images/chamundi-hill.jpg",

        gallery: [
            "images/chamundi-hill.jpg",
            "images/chamundi-hill-2.jpg"
        ],

        map:
            "https://www.google.com/maps/search/?api=1&query=Chamundi+Hill+Mysuru"
    },


    {
        name: "Karanji Lake",

        description:
            "A peaceful nature destination with a lake, walking areas and bird watching.",

        timing:
            "8:30 AM - 5:30 PM",

        location:
            "Mysuru, Karnataka",

        image:
            "images/karanji-lake.jpg",

        gallery: [
            "images/karanji-lake.jpg",
            "images/karanji-lake-2.jpg"
        ],

        map:
            "https://www.google.com/maps/search/?api=1&query=Karanji+Lake+Mysuru"
    },


    {
        name: "Brindavan Gardens",

        description:
            "A beautiful garden famous for its landscaping, fountains and evening illumination.",

        timing:
            "8:00 AM - 9:00 PM",

        location:
            "Krishnarajasagara, Karnataka",

        image:
            "images/brindavan-gardens.jpg",

        gallery: [
            "images/brindavan-gardens.jpg",
            "images/brindavan-gardens-2.jpg"
        ],

        map:
            "https://www.google.com/maps/search/?api=1&query=Brindavan+Gardens+Mysuru"
    },


    {
        name: "St. Philomena's Church",

        description:
            "A historic Neo-Gothic church and an important heritage attraction in Mysuru.",

        timing:
            "Check current visiting and service timings before your visit.",

        location:
            "Mysuru, Karnataka",

        image:
            "images/philomena-church.jpg",

        gallery: [
            "images/philomena-church.jpg",
            "images/philomena-church-2.jpg"
        ],

        map:
            "https://www.google.com/maps/search/?api=1&query=St+Philomenas+Church+Mysuru"
    }

];


// ==========================================
// DISPLAY TOURIST PLACES
// ==========================================

function displayPlaces(placeList) {

    const container =
        document.getElementById("placesContainer");


    container.innerHTML = "";


    if (placeList.length === 0) {

        container.innerHTML = `
            <p class="no-result">
                No tourist place found.
            </p>
        `;

        return;
    }


    placeList.forEach(function(place) {

        const card =
            document.createElement("div");


        card.className =
            "place-card";


        card.innerHTML = `

            <img
                src="${place.image}"
                alt="${place.name}"
            >


            <div class="place-content">

                <h3>
                    ${place.name}
                </h3>


                <p>
                    ${place.description}
                </p>


                <p>
                    <strong>⏰ Timings:</strong>
                    ${place.timing}
                </p>


                <p>
                    <strong>📍 Location:</strong>
                    ${place.location}
                </p>


                <button
                    class="details-button">

                    ℹ️ View Details

                </button>


                <a
                    href="${place.map}"
                    target="_blank"
                    class="route-button">

                    🗺️ Get Route

                </a>

            </div>

        `;


        container.appendChild(card);


        // ==========================================
        // VIEW DETAILS
        // ==========================================

        const detailsButton =
            card.querySelector(".details-button");


        detailsButton.addEventListener(
            "click",
            function() {

                showDetails(place);

            }
        );

    });

}


// ==========================================
// SHOW DETAILS POPUP
// ==========================================

function showDetails(place) {

    const modal =
        document.getElementById("detailsModal");


    // PLACE NAME

    document.getElementById(
        "modalTitle"
    ).textContent =
        place.name;


    // DESCRIPTION

    document.getElementById(
        "modalDescription"
    ).textContent =
        place.description;


    // ==========================================
    // IMAGE GALLERY
    // ==========================================

    const gallery =
        document.getElementById("modalGallery");


    gallery.innerHTML = "";


    place.gallery.forEach(function(image) {

        const img =
            document.createElement("img");


        img.src = image;


        img.alt = place.name;


        gallery.appendChild(img);

    });


    // ==========================================
    // TIMINGS
    // ==========================================

    document.getElementById(
        "modalTiming"
    ).textContent =
        place.timing;


    // ==========================================
    // LOCATION
    // ==========================================

    document.getElementById(
        "modalLocation"
    ).textContent =
        place.location;


    // ==========================================
    // GOOGLE MAP
    // ==========================================

    document.getElementById(
        "modalMap"
    ).href =
        place.map;


    // ==========================================
    // RESET RATING
    // ==========================================

    document.querySelectorAll(
        ".star"
    ).forEach(function(star) {

        star.classList.remove(
            "selected"
        );

    });


    document.getElementById(
        "ratingMessage"
    ).textContent =
        "Select a rating";


    // ==========================================
    // SHOW POPUP
    // ==========================================

    modal.style.display =
        "block";

}


// ==========================================
// CLOSE POPUP
// ==========================================

function closeDetails() {

    document.getElementById(
        "detailsModal"
    ).style.display =
        "none";

}


// ==========================================
// CLOSE BUTTON
// ==========================================

document.getElementById(
    "closeModal"
).addEventListener(
    "click",
    closeDetails
);


// ==========================================
// CLICK OUTSIDE POPUP
// ==========================================

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "detailsModal"
            );


        if (event.target === modal) {

            closeDetails();

        }

    }
);


// ==========================================
// SEARCH
// ==========================================

const searchBox =
    document.getElementById(
        "searchBox"
    );


searchBox.addEventListener(
    "input",
    function() {

        const searchText =
            searchBox.value
                .toLowerCase()
                .trim();


        if (searchText === "") {

            displayPlaces(places);

            return;

        }


        const filteredPlaces =
            places.filter(
                function(place) {

                    return place.name
                        .toLowerCase()
                        .includes(searchText);

                }
            );


        displayPlaces(
            filteredPlaces
        );

    }
);


// ==========================================
// TOURIST RATING
// ==========================================

const stars =
    document.querySelectorAll(".star");


stars.forEach(function(star) {

    star.addEventListener(
        "click",
        function() {

            const rating =
                this.getAttribute(
                    "data-rating"
                );


            stars.forEach(function(item) {

                item.classList.remove(
                    "selected"
                );

            });


            stars.forEach(function(item) {

                if (
                    Number(
                        item.getAttribute(
                            "data-rating"
                        )
                    ) <= Number(rating)
                ) {

                    item.classList.add(
                        "selected"
                    );

                }

            });


            document.getElementById(
                "ratingMessage"
            ).textContent =
                "You rated this place " +
                rating +
                " out of 5 ⭐";

        }
    );

});


// ==========================================
// FEEDBACK FORM
// ==========================================

const feedbackForm =
    document.getElementById(
        "feedbackForm"
    );


feedbackForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        document.getElementById(
            "feedbackMessage"
        ).textContent =
            "Thank you! Your feedback has been submitted.";


        feedbackForm.reset();

    }
);


// ==========================================
// MOBILE MENU
// ==========================================

const menuButton =
    document.getElementById(
        "menuButton"
    );


const mainNav =
    document.getElementById(
        "mainNav"
    );


menuButton.addEventListener(
    "click",
    function() {

        mainNav.classList.toggle(
            "show"
        );

    }
);


// ==========================================
// CLOSE MOBILE MENU AFTER CLICK
// ==========================================

const navLinks =
    mainNav.querySelectorAll("a");


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            mainNav.classList.remove(
                "show"
            );

        }
    );

});


// ==========================================
// INITIAL DISPLAY
// ==========================================

displayPlaces(places);