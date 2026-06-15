// ==========================================
// NOT SO WEEKLY SHORTS CONFIGURATION
// ==========================================

const WEEK_CONFIG = {
    // 1. Display name in place of the version number (e.g. "Week 1" instead of "0.6.1")
    weekName: "Week 1",
    
    // 2. Custom Tab Name
    tabName: "Not So Weekly Shorts",

    // 3. Track Import Codes for the 5 weekly shorts
    // Replace the placeholders with your actual Polytrack track export codes
    tracks: {
        short1: "v1n... (Paste Track 1 Export Code Here)",
        short2: "v1n... (Paste Track 2 Export Code Here)",
        short3: "v1n... (Paste Track 3 Export Code Here)",
        short4: "v1n... (Paste Track 4 Export Code Here)",
        short5: "v1n... (Paste Track 5 Export Code Here)"
    }
};

// ==========================================
// BACKGROUND INJECTION LOGIC
// ==========================================

// Intercept game fetch requests to load track codes from this file instead of disk files
const originalFetch = window.fetch;
window.fetch = async function(resource, init) {
    const url = typeof resource === 'string' ? resource : resource.url;
    const urlObj = new URL(url, window.location.href);
    const path = urlObj.pathname;
    
    // 1. Mock the folder directory listing so the game discovers exactly 5 tracks
    if (path.endsWith('/tracks/community/') || path.endsWith('/tracks/community')) {
        const mockHtml = `
            <!DOCTYPE html>
            <html>
            <body>
                <a href="short1.track">short1.track</a>
                <a href="short2.track">short2.track</a>
                <a href="short3.track">short3.track</a>
                <a href="short4.track">short4.track</a>
                <a href="short5.track">short5.track</a>
            </body>
            </html>
        `;
        return new Response(mockHtml, {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        });
    }
    
    // 2. Mock individual track requests and return the custom codes directly
    if (path.includes('/tracks/community/')) {
        const filename = path.split('/').pop();
        const trackName = filename.replace('.track', '');
        
        if (WEEK_CONFIG.tracks[trackName]) {
            return new Response(WEEK_CONFIG.tracks[trackName], {
                status: 200,
                headers: { 'Content-Type': 'text/plain' }
            });
        }
    }
    
    return originalFetch.apply(this, arguments);
};

// UI Cleaning/Layer Hiding Logic
function applyUIModifications() {
    const elements = document.querySelectorAll('button, div, p, span, a, h1, h2, h3');
    
    elements.forEach(el => {
        const text = el.textContent.trim().toLowerCase();
        
        // HIDE "Official tracks" tab and container layers
        if (text === 'official tracks' || text === 'official') {
            hideElementAndParent(el);
        }
        
        // HIDE "Custom tracks" / "My Tracks" / "Import" buttons and layers
        if (text === 'custom tracks' || text === 'custom' || text === 'import') {
            hideElementAndParent(el);
        }
        
        // RENAME "Community tracks" to "Not So Weekly Shorts"
        if (text === 'community tracks') {
            el.textContent = WEEK_CONFIG.tabName;
        }
        
        // REPLACE Version Number (e.g. "VERSION 0.6.1" or "0.6.1") with "Week 1"
        if (el.textContent.includes('VERSION') || el.textContent.includes('0.6.')) {
            el.textContent = el.textContent.replace(/VERSION\s+[0-9.]+|0\.6\.[0-9]+/gi, WEEK_CONFIG.weekName);
        }
    });
}

// Safely hide active containers to avoid leaving empty buttons or structures in the menu
function hideElementAndParent(el) {
    el.style.display = 'none';
    const parentButton = el.closest('button') || el.closest('.tab') || el.closest('.menu-item');
    if (parentButton) {
        parentButton.style.display = 'none';
    }
}

// Continuously watch the DOM to keep unwanted elements hidden as the game dynamically switches menus
const uiObserver = new MutationObserver(() => {
    applyUIModifications();
});
uiObserver.observe(document.body, { childList: true, subtree: true });
