function filterProperties() {
    // 1. Get elements
    const locationInput = document.getElementById("search-location");
    const typeInput = document.getElementById("search-type");
    const priceInput = document.getElementById("search-price");
    const noResults = document.getElementById("no-results");

    // 2. Get values and clean them (lowercase and remove spaces)
    const locationValue = locationInput.value.toLowerCase().trim();
    const typeValue = typeInput.value;
    const priceRange = priceInput.value;

    const cards = document.querySelectorAll(".property-card");
    let visibleCount = 0;

    cards.forEach(card => {
        // 3. Get data from the card
        const cardLocation = (card.getAttribute("data-location") || "").toLowerCase().trim();
        const cardType = card.getAttribute("data-type");
        const cardPrice = parseFloat(card.getAttribute("data-price"));

        // 4. Run the checks
        const locationMatch = !locationValue || cardLocation.includes(locationValue);
        const typeMatch = !typeValue || cardType === typeValue;
        
        let priceMatch = true;
        if (priceRange) {
            if (priceRange === "100-plus") {
                priceMatch = cardPrice >= 100;
            } else {
                const parts = priceRange.split('-');
                const min = parseFloat(parts[0]);
                const max = parseFloat(parts[1]);
                priceMatch = (cardPrice >= min && cardPrice <= max);
            }
        }

        // 5. Find the link wrapper and show/hide
        const displayElement = card.closest('.property-link') || card;

        if (locationMatch && typeMatch && priceMatch) {
            displayElement.style.display = "block";
            visibleCount++;
        } else {
            displayElement.style.display = "none";
        }
    });

    // 6. Show "No Results" message
    if (noResults) {
        noResults.style.display = (visibleCount === 0) ? "block" : "none";
    }
}

/* =====================
    HAMBURGER MENU
===================== */
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const page = document.getElementById("page-content");

    if (menu) {
        menu.classList.toggle("active");
    }
    
    // Only shift the page if page-content exists
    if (page) {
        page.classList.toggle("shift");
    }
}

// Close menu when clicking outside
document.addEventListener("click", function (e) {
    const menu = document.getElementById("mobileMenu");
    const page = document.getElementById("page-content");

    if (!menu) return;

    const isInsideMenu = menu.contains(e.target);
    const isMenuBtn = e.target.closest(".menu-icon");

    if (!isInsideMenu && !isMenuBtn && menu.classList.contains("active")) {
        menu.classList.remove("active");
        if (page) page.classList.remove("shift");
    }
});

/* =====================
    ACCORDION (FOOTER)
===================== */
const headers = document.querySelectorAll(".accordion-header");
headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        document.querySelectorAll(".accordion-content").forEach(item => {
            if (item !== content) {
                item.classList.remove("active");
            }
        });
        content.classList.toggle("active");
    });
});

/* =====================
    STATS COUNTER
===================== */
const counters = document.querySelectorAll(".counter");
const startCounting = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"));
        if (isNaN(target)) return;
        let count = 0;
        const increment = target / 100;
        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

let started = false;
window.addEventListener("scroll", () => {
    const section = document.querySelector(".about-stats");
    if (!section) return;
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight && !started) {
        startCounting();
        started = true;
    }
});

/* =====================
    SCROLL REVEAL
===================== */
const revealElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    const targets = document.querySelectorAll(".reveal");
    targets.forEach(target => observer.observe(target));
};

document.addEventListener("DOMContentLoaded", revealElements);

/* =====================
    HOME PAGE REDIRECT
===================== */
function handleHomeSearch() {
    const loc = document.getElementById("search-location").value;
    const type = document.getElementById("search-type").value;
    const price = document.getElementById("search-price").value;

    // This moves the user to listings.html and attaches the search data
    window.location.href = `listings.html?location=${encodeURIComponent(loc)}&type=${type}&price=${price}`;
}
/* =====================
    AUTO-FILTER ON LOAD
===================== */
document.addEventListener("DOMContentLoaded", () => {
    // Check if the URL has search parameters (like ?location=anambra)
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('location') || params.has('type') || params.has('price')) {
        // Fill the inputs on the listings page with the URL data
        const locInput = document.getElementById("search-location");
        const typeInput = document.getElementById("search-type");
        const priceInput = document.getElementById("search-price");

        if (locInput) locInput.value = params.get('location') || "";
        if (typeInput) typeInput.value = params.get('type') || "";
        if (priceInput) priceInput.value = params.get('price') || "";

        // Run the filter function automatically after a tiny delay to ensure cards are loaded
        setTimeout(() => {
            filterProperties();
        }, 100);
    }
});
