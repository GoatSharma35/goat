
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const hamburgerNav = document.querySelector('.hamburger-nav');
    const hamburgerOverlay = document.querySelector('.hamburger-overlay');
    const hamburgerLinks = document.querySelectorAll('.hamburger-nav a');

    // Ensure elements exist before adding event listeners
    if (!hamburgerButton || !hamburgerNav || !hamburgerOverlay) {
        console.error('Hamburger menu elements not found');
        return;
    }

    function toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        
        hamburgerButton.classList.toggle('active');
        hamburgerNav.classList.toggle('active');
        hamburgerOverlay.classList.toggle('active');
        document.body.style.overflow = hamburgerNav.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        hamburgerButton.classList.remove('active');
        hamburgerNav.classList.remove('active');
        hamburgerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Multiple event listeners for better compatibility
    hamburgerButton.addEventListener('click', toggleMenu);
    hamburgerButton.addEventListener('touchstart', toggleMenu, { passive: false });
    hamburgerOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking on a link
    hamburgerLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Prevent body scroll when menu is open
    hamburgerNav.addEventListener('touchmove', function(e) {
        e.stopPropagation();
    });
});

// Location sharing functionality
function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const message = `Emergency! My location: https://maps.google.com/?q=${lat},${lng}`;
            
            // Send SMS with location
            window.location.href = `sms:4083324906?body=${encodeURIComponent(message)}`;
        }, function(error) {
            // Fallback if geolocation fails
            const message = "Emergency! Unable to get exact location. Please call for help.";
            window.location.href = `sms:4083324906?body=${encodeURIComponent(message)}`;
            alert("Location sharing failed. Please provide your location manually when texting.");
        });
    } else {
        // Fallback for browsers that don't support geolocation
        const message = "Emergency! Geolocation not supported. Please call for help.";
        window.location.href = `sms:4083324906?body=${encodeURIComponent(message)}`;
        alert("Geolocation not supported. Please provide your location manually when texting.");
    }
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchBtn || !searchResults) return;

    // Smart autocorrect functionality
    function calculateLevenshteinDistance(str1, str2) {
        const matrix = [];
        
        // Create matrix
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        // Fill matrix
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        matrix[i][j - 1] + 1,     // insertion
                        matrix[i - 1][j] + 1      // deletion
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }

    function findClosestMatch(input, targetList, threshold = 2) {
        let bestMatch = null;
        let bestDistance = Infinity;
        
        for (const target of targetList) {
            const distance = calculateLevenshteinDistance(input.toLowerCase(), target.toLowerCase());
            if (distance < bestDistance && distance <= threshold) {
                bestDistance = distance;
                bestMatch = target;
            }
        }
        
        return bestMatch;
    }

    function autocorrectQuery(query) {
        const allKeywords = searchData.flatMap(item => item.keywords);
        const words = query.toLowerCase().split(/\s+/);
        const correctedWords = [];
        
        for (const word of words) {
            if (word.length < 3) {
                correctedWords.push(word);
                continue;
            }
            
            const closestMatch = findClosestMatch(word, allKeywords, 2);
            if (closestMatch && calculateLevenshteinDistance(word, closestMatch.toLowerCase()) > 0) {
                correctedWords.push(closestMatch);
            } else {
                correctedWords.push(word);
            }
        }
        
        return correctedWords.join(' ');
    }

    // Define search data for all pages
    const searchData = [
        {
            title: "Cuts & Wounds",
            page: "cuts.html",
            keywords: ["cut", "wound", "bleeding", "laceration", "gash", "scrape", "abrasion", "puncture", "deep cut", "severe bleeding"],
            description: "Treatment for cuts, wounds, and bleeding injuries"
        },
        {
            title: "Burns",
            page: "burns.html", 
            keywords: ["burn", "scald", "fire", "hot", "heat", "chemical burn", "electrical burn", "steam", "boiling water", "sun burn"],
            description: "Emergency care for all types of burns"
        },
        {
            title: "Sprains & Strains",
            page: "sprains.html",
            keywords: ["sprain", "strain", "twisted ankle", "pulled muscle", "joint pain", "swelling", "ankle injury", "wrist injury"],
            description: "Treatment for sprains, strains, and joint injuries"
        },
        {
            title: "Fractures & Broken Bones",
            page: "fractures.html",
            keywords: ["fracture", "broken bone", "break", "bone injury", "arm fracture", "leg fracture", "wrist fracture", "deformed limb"],
            description: "Emergency care for suspected fractures and broken bones"
        },
        {
            title: "Choking",
            page: "choking.html",
            keywords: ["choking", "can't breathe", "heimlich maneuver", "airway blocked", "food stuck", "gasping", "coughing", "unable to speak"],
            description: "Life-saving techniques for choking emergencies"
        },
        {
            title: "Nosebleeds",
            page: "nosebleeds.html",
            keywords: ["nosebleed", "nose bleeding", "bloody nose", "nasal bleeding", "nose injury"],
            description: "How to stop and treat nosebleeds"
        },
        {
            title: "Eye Injuries",
            page: "eye-injuries.html",
            keywords: ["eye injury", "eye pain", "something in eye", "eye trauma", "vision problems", "eye cut", "chemical in eye", "flash burn"],
            description: "Emergency treatment for various eye injuries"
        },
        {
            title: "Insect Bites & Stings",
            page: "insect-bites.html",
            keywords: ["insect bite", "bee sting", "wasp sting", "spider bite", "tick bite", "mosquito bite", "ant bite", "bug bite", "swelling", "itching"],
            description: "Treatment for insect bites and stings"
        },
        {
            title: "CPR",
            page: "cpr.html",
            keywords: ["cpr", "cardiac arrest", "heart stopped", "unconscious", "not breathing", "chest compressions", "rescue breathing", "unresponsive"],
            description: "Cardiopulmonary resuscitation for life-threatening emergencies"
        },
        {
            title: "Anaphylaxis & Allergic Reactions",
            page: "allergies.html",
            keywords: ["allergic reaction", "anaphylaxis", "severe allergy", "epipen", "hives", "swelling", "difficulty breathing", "throat closing", "food allergy"],
            description: "Emergency treatment for severe allergic reactions"
        },
        {
            title: "Breathing Problems & Asthma",
            page: "breathing-problems.html",
            keywords: ["breathing problems", "asthma attack", "shortness of breath", "wheezing", "chest tightness", "inhaler", "respiratory distress", "can't breathe"],
            description: "Emergency care for breathing difficulties and asthma attacks"
        },
        {
            title: "Poisoning",
            page: "poisoning.html",
            keywords: ["poisoning", "poison", "overdose", "toxic", "ingested chemicals", "medication overdose", "household chemicals", "poison control"],
            description: "Emergency response to poisoning and toxic exposures"
        },
        {
            title: "Heat & Cold Exposure",
            page: "heat-cold-exposure.html",
            keywords: ["heat stroke", "heat exhaustion", "hypothermia", "frostbite", "overheating", "too hot", "too cold", "dehydration", "fever"],
            description: "Treatment for heat-related and cold-related emergencies"
        },
        {
            title: "First Aid Supplies",
            page: "first-aid-supplies.html",
            keywords: ["first aid kit", "medical supplies", "bandages", "gauze", "antiseptic", "emergency supplies", "first aid checklist"],
            description: "Essential first aid supplies for your emergency kit"
        },
        {
            title: "Medical Profile",
            page: "profile.html",
            keywords: ["medical profile", "emergency contacts", "medical history", "medications", "allergies", "blood type", "ice", "emergency info"],
            description: "Personal medical information and emergency contacts"
        }
    ];

    function performSearch(query) {
        if (!query || query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        // Try original query first
        let results = searchData.filter(item => {
            const searchText = query.toLowerCase();
            return item.title.toLowerCase().includes(searchText) ||
                   item.description.toLowerCase().includes(searchText) ||
                   item.keywords.some(keyword => keyword.toLowerCase().includes(searchText));
        });

        let correctedQuery = null;
        
        // If no results found, try autocorrect
        if (results.length === 0) {
            correctedQuery = autocorrectQuery(query);
            if (correctedQuery !== query.toLowerCase()) {
                results = searchData.filter(item => {
                    const searchText = correctedQuery.toLowerCase();
                    return item.title.toLowerCase().includes(searchText) ||
                           item.description.toLowerCase().includes(searchText) ||
                           item.keywords.some(keyword => keyword.toLowerCase().includes(searchText));
                });
            }
        }

        displayResults(results, query, correctedQuery);
    }

    function displayResults(results, originalQuery, correctedQuery = null) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item"><div class="result-title">No results found</div><div class="result-description">Try searching for symptoms like "chest pain", "bleeding", "difficulty breathing", etc.</div></div>';
            searchResults.style.display = 'block';
            return;
        }

        let correctionNotice = '';
        if (correctedQuery && correctedQuery !== originalQuery.toLowerCase()) {
            correctionNotice = `<div class="autocorrect-notice">Showing results for "<strong>${correctedQuery}</strong>" instead of "${originalQuery}"</div>`;
        }

        const queryToUse = correctedQuery || originalQuery;
        
        searchResults.innerHTML = correctionNotice + results.map(result => {
            const matchingKeywords = result.keywords.filter(keyword => 
                keyword.toLowerCase().includes(queryToUse.toLowerCase())
            ).slice(0, 3);

            return `
                <div class="search-result-item" onclick="navigateToPage('${result.page}')">
                    <div class="result-title">${result.title}</div>
                    <div class="result-description">${result.description}</div>
                    ${matchingKeywords.length > 0 ? `<div class="result-keywords">Related: ${matchingKeywords.join(', ')}</div>` : ''}
                </div>
            `;
        }).join('');

        searchResults.style.display = 'block';
    }

    window.navigateToPage = function(page) {
        window.location.href = page;
    };

    // Search input event listeners
    searchInput.addEventListener('input', function() {
        performSearch(this.value);
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                const results = searchData.filter(item => {
                    const searchText = query.toLowerCase();
                    return item.title.toLowerCase().includes(searchText) ||
                           item.description.toLowerCase().includes(searchText) ||
                           item.keywords.some(keyword => keyword.toLowerCase().includes(searchText));
                });
                
                if (results.length > 0) {
                    navigateToPage(results[0].page);
                }
            }
        }
    });

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            const results = searchData.filter(item => {
                const searchText = query.toLowerCase();
                return item.title.toLowerCase().includes(searchText) ||
                       item.description.toLowerCase().includes(searchText) ||
                       item.keywords.some(keyword => keyword.toLowerCase().includes(searchText));
            });
            
            if (results.length > 0) {
                navigateToPage(results[0].page);
            }
        }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    // Show search results when focusing on input
    searchInput.addEventListener('focus', function() {
        if (this.value.length >= 2) {
            performSearch(this.value);
        }
    });
});
