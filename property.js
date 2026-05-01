// property.js

// Define property data
const properties = {
   1: {
        title: "Luxury Apartment, Lagos",
        image: "https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?q=80&w=1032&auto=format&fit=crop",
        info: "2 Beds • 2 Baths • 120 m²",
        price: "₦25,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "Apartment"
        },
        additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "C of O"
        },
        // This is where your long text now lives
        description: `
            <p>Experience refined living in Lekki Phase 1, Lagos. This 2-bedroom apartment perfectly blends comfort, style, and convenience and it's at an unbeatable price.</p>
            
            <h3>Exterior Features</h3>
            <p>This apartment is part of a well-secured gated estate, ensuring privacy and peace of mind.</p>

            <h3>Interior Walkthrough</h3>
            <ul>
                <li><strong>Living Areas:</strong> Large living room with high POP ceilings.</li>
                <li><strong>Kitchen:</strong> Fitted open kitchen with modern cabinets.</li>
                <li><strong>Bedrooms:</strong> Both bedrooms are en-suite.</li>
            </ul>
        `
    },

    2: {
        title: "Modern Villa, Abuja",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        info: "4 Beds • 3 Baths • 350 m²",
        price: "₦55,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "House"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
        // This is where your long text now lives
        description: `
            <p>This architectural masterpiece in Abuja represents the pinnacle of contemporary luxury, featuring a striking geometric design that blends natural wood textures with sleek metal accents. The expansive floor-to-ceiling glass walls invite abundant natural light, offering a seamless connection between the sophisticated interior and the lush, green surroundings.</p>
            
            <h3>Exterior Features</h3>
            <p>The facade showcases a masterful mix of vertical timber cladding and minimalist black frames set against a perfectly manicured lawn. An integrated majestic tree serves as a natural focal point, providing organic shade to the spacious, modern outdoor lounging deck.</p>

            <h3>Interior Walkthrough</h3>
            <ul>
                <li><strong>Living:</strong> Large The ground floor features a massive, glass-enclosed living area that erases the boundary between the home and the private garden..</li>
                <li><strong>Kitchen:</strong>Visible through the glass is a bright, high-end kitchen equipped with warm wood cabinetry and a large central island.</li>
                <li><strong>Staircase:</strong> A minimalist glass and steel staircase acts as a functional piece of structural art within the main foyer.</li>
                <li><strong>Bedrooms:</strong> Both bedrooms are en-suite.</li>
            </ul>
        `
    },
    3: {
        title: "Cozy House, Port Harcourt",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        info: "3 Beds • 2 Baths • 180 m²",
        price: "₦18,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "House"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "C of O"
        },
        
        description: `
            <p>Nestled in a serene environment, this charming "Cozy House" in Port Harcourt offers a perfect blend of classic cottage aesthetics and modern comfort. Its inviting multi-gabled roofline and extensive porch create a warm, family-oriented atmosphere that stands out in the local real estate market. With its "Featured" status and peaceful surroundings, this property is an ideal retreat for those seeking a tranquil yet stylish lifestyle.</p>
            
            <h3>Exterior Features</h3>
            <p>The home features elegant light-toned shingle siding paired with a crisp white wraparound porch supported by classic pillars. A spacious, sun-drenched lawn and meticulously maintained greenery frame the building, while the dark shingle roof provides a sophisticated contrast to the bright facade.</p>

            <h3>Interior Walkthrough</h3>
            <ul>
                <li><strong>Living Areas:</strong> The large front windows and glass-paneled doors suggest a bright, airy interior flooded with natural light from the porch.</li>
                <li><strong>Craftsmanship:</strong> The exterior design hints at an interior with high-quality woodwork.</li>
                <li><strong>Kitchen:</strong> Fitted open kitchen with modern cabinets.</li>
                <li><strong>Bedrooms:</strong> Both bedrooms are en-suite.</li>
            </ul>
        `
    },
    4: {
        title: "Beachfront Villa, Lagos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9nxlAhlwn0Ccq4VXm0SRVIF-vIjQQUZ9xg&s",
        info: "5 Beds • 4 Baths • 500 m²",
        price: "₦85,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "House"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
         description: `
            <p>This stunning beachfront villa in Lagos offers a rare combination of luxury and serenity, positioned as a "Featured" property for discerning buyers. The architectural design features a grand, multi-level structure that maximizes coastal views while maintaining a sophisticated, modern aesthetic.</p>
            
            <h3>Exterior Features</h3>
            <p>The exterior is defined by a clean, white facade accented with dark stone textures and elegant glass-paneled balconies. A spacious, paved driveway is lined with decorative potted plants, leading to a grand sheltered entrance that emphasizes the home's impressive scale.</p>

            <h3>Interior Walkthrough</h3>
            <ul>
                <li><strong>Living Areas:</strong> Large living room with high POP ceilings.</li>
                <li><strong>Kitchen:</strong> Fitted open kitchen with modern cabinets.</li>
                <li><strong>Bedrooms:</strong> Both bedrooms are en-suite.</li>
            </ul>
        `
    },
    5: {
        title: "Residential Land, Abuja",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        info: "500 sqm • Dry Land • Good Road Access",
        price: "₦8,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "Land"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
        // Notice how we use different headings for land
        description: `
            <p>Prime residential land located in a rapidly developing area of Abuja. This 500 sqm plot is perfectly positioned for those looking to build a custom dream home or secure a high-yield investment.</p>
            
            <h3>Topography & Soil</h3>
            <p>The land is 100% dry, firm ground, which means you won't have to spend extra on expensive sand-filling or specialized piling. It is ready for immediate construction.</p>

            <h3>Documentation & Title</h3>
            <ul>
                <li><strong>Title:</strong> Right of Occupancy (R of O)</li>
                <li><strong>Survey:</strong> Registered Survey Plan available</li>
                <li><strong>Deed:</strong> Fully executed Deed of Assignment</li>
            </ul>

            <h3>Neighborhood Features</h3>
            <p>This plot is situated in a serene environment with excellent road access. It is just a 10-minute drive from the main expressway and is surrounded by modern estate developments, ensuring steady value appreciation.</p>
        `
    },
    6: {
        title: "Executive 4-Bedroom Bungalow, Enugu",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        info: "4 Beds • 4 Baths • Enugu City",
        price: "₦35,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "Bungalow"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
         description: `
            <p>This "Featured" executive bungalow in Enugu offers a masterclass in modern, single-level luxury living. The architectural design features clean horizontal lines and a brilliant white facade that radiates sophistication.</p>
            
            <h3>Exterior Features</h3>
            <p>The property boasts a vast, sun-drenched tiled terrace that flows directly into a sparkling, integrated private pool.</p>
            <h3>Interior Walkthrough</h3>
            <ul>
                <li><strong>Living Areas:</strong> Large living room with high POP ceilings.</li>
                <li><strong>Kitchen:</strong> Fitted open kitchen with modern cabinets.</li>
                <li><strong>Bedrooms:</strong> Both bedrooms are en-suite.</li>
                <li><strong>Bathrooms:</strong>Equipped with a walk-in shower and water heater for your comfort.</li>
            </ul>
        `
    },
    7: {
        title: "Prime Estate Land, Enugu",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        info: "600 sqm • Registered Survey • Enugu",
        price: "₦5,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "Land"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
        description: `
            <p>Prime residential land located in a rapidly developing area of Abuja. This 500 sqm plot is perfectly positioned for those looking to build a custom dream home or secure a high-yield investment.</p>
            
            <h3>Topography & Soil</h3>
            <p>The land is 100% dry, firm ground, which means you won't have to spend extra on expensive sand-filling or specialized piling. It is ready for immediate construction.</p>

            <h3>Documentation & Title</h3>
            <ul>
                <li><strong>Title:</strong> Right of Occupancy (R of O)</li>
                <li><strong>Survey:</strong> Registered Survey Plan available</li>
                <li><strong>Deed:</strong> Fully executed Deed of Assignment</li>
            </ul>

            <h3>Neighborhood Features</h3>
            <p>This plot is situated in a serene environment with excellent road access. It is just a 10-minute drive from the main expressway and is surrounded by modern estate developments, ensuring steady value appreciation.</p>
        `
    },
    8: {
        title: "Modern 3-Bedroom Semi-Detached, Ibadan",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        info: "3 Beds • 3 Baths • Ibadan North",
        price: "₦28,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "House"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
         description: `
            <p>This "Featured" Ibadan home showcases contemporary elegance through a striking cantilevered design. Warm brick accents and bold geometric shapes create a unique, high-end profile. Expansive glass walls ensure a bright, airy atmosphere throughout the luxury structure.</p>
            
            <h3>Exterior Features</h3>
            <p>A stunning private infinity pool serves as the centerpiece of the perfectly manicured lawn. The spacious terrace is framed by modern concrete finishes and earthy brickwork for a sophisticated finish.</p>
            <h3>Interior Walkthrough</h3>
            <ul>
                <li><strong>Living Areas:</strong> Walk through the front door into a bright living area illuminated by warm spotlights and minimalist ceilings.</li>
                <li><strong>Kitchen:</strong> It’s fully fitted with high-end appliances and plenty of cabinet space, making cooking a pleasure.</li>
                <li><strong>Bedrooms:</strong> Your ensuite bedroom is spacious and features built-in closets, perfect for organized living.</li>
                <li><strong>Bathroom</strong> It’s fully fitted with high-end appliances and plenty of cabinet space, making cooking a pleasure.</li>  
            </ul>
        `
    },
    9: {
        title: "Commercial Plot, Akala Way, Ibadan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuHhNJPSUENQW9tDOTuYNVAIdm0Wdqzk8hw&s",
        info: "900 sqm • C of O • Akala Way",
        price: "₦3,500,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "Land"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
        description: `
            <p>Prime residential land located in a rapidly developing area of Abuja. This 500 sqm plot is perfectly positioned for those looking to build a custom dream home or secure a high-yield investment.</p>
            
            <h3>Topography & Soil</h3>
            <p>The land is 100% dry, firm ground, which means you won't have to spend extra on expensive sand-filling or specialized piling. It is ready for immediate construction.</p>

            <h3>Documentation & Title</h3>
            <ul>
                <li><strong>Title:</strong> Right of Occupancy (R of O)</li>
                <li><strong>Survey:</strong> Registered Survey Plan available</li>
                <li><strong>Deed:</strong> Fully executed Deed of Assignment</li>
            </ul>

            <h3>Neighborhood Features</h3>
            <p>This plot is situated in a serene environment with excellent road access. It is just a 10-minute drive from the main expressway and is surrounded by modern estate developments, ensuring steady value appreciation.</p>
        `
    },
    10: {
        title: "Luxury Duplex, Owerri",
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
        info: "5 Beds • 5 Baths • Owerri West",
        price: "₦45,000,000",
        status: "FOR SALE",    
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "House"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
         description: `
            <p>Experience refined living in Lekki Phase 1, Lagos. This 2-bedroom apartment perfectly blends comfort, style, and convenience and it's at an unbeatable price.</p>
            
            <h3>Exterior Features</h3>
            <p>This apartment is part of a well-secured gated estate, ensuring privacy and peace of mind.</p>

            <h3>Interior Walkthrough</h3>
            <ul>
                <li><strong>Living Areas:</strong> Large living room with high POP ceilings.</li>
                <li><strong>Kitchen:</strong> Fitted open kitchen with modern cabinets.</li>
                <li><strong>Bedrooms:</strong> Both bedrooms are en-suite.</li>
            </ul>
        `
    },
    11: {
        title: "Residential Cornerpiece, Owerri",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        info: "450 sqm • Allocation Paper • Owerri",
        price: "₦12,000,000",
        status: "FOR SALE",
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "Apartment"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },

        description: "Prime cornerpiece plot in a residential layout in Owerri. Fenced and ready for immediate construction."
    },
    12: {
        title: "Smart 5-Bedroom Mansion, Anambra",
        image: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51",
        info: "5 Beds • 6 Baths • Awka",
        price: "₦60,000,000",
        status: "FOR SALE",
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "Apartment"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },
        description: "State-of-the-art smart home in Anambra. Voice-controlled lighting, private cinema, and Olympic-sized pool."
    },
    13: {
        title: "Developed Plot, Awka, Anambra",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        info: "650 sqm • Freehold • Awka",
        price: "₦15,000,000",
        status: "FOR SALE",
        isFeatured: true,
        details: {
        id: "HZ42",
        garages: "2",
        type: "Apartment"
    },
    additional: {
            "Building Approval": "Available",
            "Registered Survey": "Available",
            "Title": "Governoor's Consent" 
        },

        description: "Excellent topography and proximity to the state capital. This plot is in a high-growth zone with fast appreciation."
    }
};

// Function to get query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load property data
function loadProperty() {
    const propertyId = getQueryParam("property");
    const property = properties[propertyId];

    if(property) {
        // 1. Basic Text & Data
        const titleElements = [document.getElementById("property-title"), document.getElementById("mobile-title")];
        const priceElements = [document.getElementById("property-price"), document.getElementById("mobile-price")];
        const locElements = [document.getElementById("property-location"), document.getElementById("mobile-location")];

        titleElements.forEach(el => { if(el) el.textContent = property.title; });
        priceElements.forEach(el => { if(el) el.textContent = property.price; });
        
        const city = property.title.split(',').pop().trim();
        locElements.forEach(el => { if(el) el.textContent = city; });

        // 2. Update Desktop Details Bar (The fix for "Apartment")
        const desktopType = document.querySelector(".desktop-details-bar .detail-item .detail-sub");
        if(desktopType) {
            desktopType.textContent = property.details.type;
        }

        // 3. Update Badge Logic
        const statusBadges = [document.getElementById("badge-status"), document.querySelector(".mobile-badge-status")];
        const featuredBadges = [document.getElementById("badge-featured"), document.querySelector(".mobile-badge-featured")];

        statusBadges.forEach(el => { if (el && property.status) el.textContent = property.status; });
        featuredBadges.forEach(el => { if (el) el.style.display = property.isFeatured ? "inline-block" : "none"; });

        // 4. Images & Description
        const mainImg = document.getElementById("property-img");
        if(mainImg) {
            mainImg.src = property.image;
            mainImg.alt = property.title;
        }
        document.getElementById("property-description").innerHTML = property.description;

        // 5. Parse Stats and Hide/Show for Land
        const stats = property.info.split('•');
        const bedsVal = stats[0] ? stats[0].trim().split(' ')[0] : "0";
        const bathsVal = stats[1] ? stats[1].trim().split(' ')[0] : "0";

        if(document.getElementById("stat-beds")) document.getElementById("stat-beds").textContent = bedsVal;
        if(document.getElementById("stat-baths")) document.getElementById("stat-baths").textContent = bathsVal;

        // NEW: If it's Land, hide the Bedroom/Bathroom/Garage items in the desktop bar
        const desktopDetailItems = document.querySelectorAll('.desktop-details-bar .detail-item');
        if (property.details.type.toLowerCase() === "land") {
            if(desktopDetailItems[1]) desktopDetailItems[1].style.display = 'none'; // Hide Beds
            if(desktopDetailItems[2]) desktopDetailItems[2].style.display = 'none'; // Hide Baths
            if(desktopDetailItems[3]) desktopDetailItems[3].style.display = 'none'; // Hide Garages
        } else {
            // Ensure they are visible for Houses/Apartments
            desktopDetailItems.forEach(item => item.style.display = 'flex');
        }

        // 6. Details Box (Bottom Section) - UPDATED FOR LAND
        const detailsContainer = document.getElementById("details-box");
        if(property.details && detailsContainer) {
            
            // Check if it's land to swap labels
            const isLand = property.details.type.toLowerCase() === "land";
            
            // Logic to handle labels: Land gets "Area" and "Title", Houses get "Bedroom" and "Bathrooms"
            const label1 = isLand ? "Area:" : "Bedroom:";
            const label2 = isLand ? "Title Document:" : "Bathrooms:";
            
            // Extract the values from your 'info' string (e.g., "900 sqm" and "C of O")
            const val1 = stats[0] ? stats[0].trim() : "N/A";
            const val2 = stats[1] ? stats[1].trim() : "N/A";

            detailsContainer.innerHTML = `
                <div class="detail-item">
                    <span class="detail-label">Property ID:</span>
                    <span class="detail-value">${property.details.id}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Price:</span>
                    <span class="detail-value">${property.price}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">${label1}</span>
                    <span class="detail-value">${val1}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">${label2}</span>
                    <span class="detail-value">${val2}</span>
                </div>
                ${!isLand ? `
                <div class="detail-item">
                    <span class="detail-label">Garages:</span>
                    <span class="detail-value">${property.details.garages}</span>
                </div>` : ''}
                <div class="detail-item">
                    <span class="detail-label">Property Type:</span>
                    <span class="detail-value">${property.details.type}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Property Status:</span>
                    <span class="detail-value">${property.status}</span>
                </div>
            `;
        }

        // 7. Additional Details
        const additionalContainer = document.getElementById("additional-details-list");
        if(property.additional && additionalContainer) {
            let additionalHTML = '';
            for (const [label, value] of Object.entries(property.additional)) {
                additionalHTML += `
                    <div class="additional-item">
                        <span class="additional-label">${label}:</span>
                        <span class="additional-value">${value}</span>
                    </div>`;
            }
            additionalContainer.innerHTML = additionalHTML;
        } else if (additionalContainer) {
            additionalContainer.closest('.additional-details-section').style.display = 'none';
        }
    } 
}
window.onload = loadProperty;