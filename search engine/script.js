const profiles = [
    {
        name: "Amisha Rathore",
        description: "Silent chaos in a loud world",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
    },
    {
        name: "Kiara Mehta",
        description: "Main character energy",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"
    },
    {
        name: "Amita Oberoi",
        description: "Walking through dreams",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400"
    },
    {
        name: "Prince dubey",
        description: "Good vibes and great energy",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
    },
    {
        name: "Diya Bansal",
        description: "Life is better with a smile",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400"
    },
    {
        name: "Tanay Rawat",
        description: "Enjoying the journey",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    },
    {
        name: "Mohit Chhabra",
        description: "Living life my way",
        image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400"
    }
];

const search = document.querySelector("#search");
const container = document.querySelector("#container");
const message = document.querySelector("#message");

// Function to display profile cards
function displayProfiles(data) {

    container.innerHTML = "";

    if (data.length === 0) {
        message.textContent = "No matching profiles found!";
        return;
    }

    message.textContent = "";

    data.forEach(function (profile) {

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = profile.image;
        img.alt = profile.name;

        const details = document.createElement("div");
        details.classList.add("details");

        const name = document.createElement("h3");
        name.textContent = profile.name;

        const description = document.createElement("p");
        description.textContent = profile.description;

        details.append(name, description);
        card.append(img, details);
        container.append(card);

    });
}

// Function to search profiles
function searchProfiles() {

    const searchValue = search.value.toLowerCase().trim();

    const filteredProfiles = profiles.filter(function (profile) {

        return (
            profile.name.toLowerCase().includes(searchValue) ||
            profile.description.toLowerCase().includes(searchValue)
        );

    });

    displayProfiles(filteredProfiles);
}

// Search whenever the user types
search.addEventListener("input", searchProfiles);

// Display all profiles initially
displayProfiles(profiles);