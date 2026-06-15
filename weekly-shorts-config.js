// ==========================================
// NOT SO WEEKLY SHORTS CONFIGURATION
// ==========================================

const WEEK_CONFIG = {
    // 1. Display name in place of the version number
    weekName: "Week 1",
    
    // 2. Custom Tab Name
    tabName: "Not So Weekly Shorts",

    // 3. Your Polytrack Export Codes (Loaded directly in place of files)
    tracks: {
        short1: "PolyTrack24pdbOnrmbCDAFG9VyYZATJgYxsjhhlpTASgwgFY25pPTelUkiU8fUdLu5uVWBmXQfCqrbYg5xltRaH0pcNj9ceIvHNRaLqKuM4xDf1V7MXHB1M3xYOfPQfclmoV2RgiqkAGWsCxked0BvY5BfU8eBzulvyASdvJ3jB4XBYgJhSu5QwBkp5hTfk1r4jLBAcRmGGgNvnIGQAJZVdDfEJRKIGKLcFTVZAexiYtk72Mjeyxee5485usr6HI1bzS5zVxWqrrc7mbuXCQ2GoBqVZaCUKO0woezcDXz04FvajtvAUqKDK046C7hmFq6LNrpQCyDn8cfzNDMbsPX2yIki7ZgXrapK2lOE08dOkVpTj4tqq7LeX1iCduoYHF8Uw63I9nv1Y8QZO0kh7Hmdn7efgX4NF1gfLPH9j4eXwYb3ze3eBmGnv4fixWFYNV32z5hddETdEm2NAz7Sk7C1Z7Ahzaebq3CztmsRikUETXhL9JTbsGFW01XEeL5uaMHuuY0XgiYV7f7esGsF67J71siugzZ0askwZVxYAKt9dLtTxh3pc2oLsYT4ud2Ftp3pTFyf2YLcrvsale9uACHde6pYVBZD2Allyucs47CfTtfpAQCUUPpRiOu5oKsPgbVF0XpRWxikXDSkjPOSePxCsd0V95acrfhl0k2Ms3LLev1mAmXnprcTBbVclASbYqtVk8vAAmI76A",
        short2: "PolyTrack24pdBBHteGCGMAA6rEjpcJRoJBNsWep3RFqeXtYWGyTfdO1pd0sJAhCx41ZR9NOEezNCpeFDUROGDD9BCqdyWdMqZ8OSF5CcSvpLHPzex5F1iKZ5AYfZyrUVRtMrSuzvU58m3OrLb0ahTu28qZUZl8wzQ8eDLxXvcu6sodP9XXXH0P4hZb60HYfhDSfjBE8OzdKWDqZJiys7bjX6TxsszyvhicNFsEksoj9VLDf2mzKeiMKRGlGk0emocFkfNPeYzenYYnv5JOCtDefeEkTTC",
        short3: "PolyTrack24pdDPnlgDBDAAA9KN0SkP1UStOWL6fUEELVo2ypfMvbwLzp08XRew7311xVco2iRmfiPIUyOwXDFW6vQbNywyexafWf1eeMTDWQ0hlV5J5Q5RL5im3mAYnDVgg3yTHUKv6Zqio0cyKxGIXFGBhzDbXhjVi0vuHireeOBTC4z2oHFnBe4XITbbeUVmJk1FXZd31aZV94x94mwGrNGF1Mh6RpmORfgyNFKWoNveJXagyrd7w6dbVwX1nDe7DEV9sGduRWiy8Ey6kAOx5gpHrCyl4bvPvqOxCsoRKBFeSkess7fNifTJWwvF02gHtbYoe4UbiJ7u2kxuLLArbqsTKH2AEt8vzFufD0xXp1F",
        short4: "PolyTrack24pdLOmktiCDAA8KJygwSGCDBRynIGkdAGGjCITBO9fd3veuqWV1zgXQk4B2yy2W3hKfNYmAtSl8LsXtSECj786qNJnCj5Bgtgu6QpumGjo5zkxSdgr6abZCBtObrY9hesoKfwR12QNrs4sRytS1k8SJrSq2VCVOFdbetgX01sS6m7868m6BfHV8pVYjXkiY5cmwo259e3xq32VQ5HrZB1eGu8Gu6NE8IX1Jt0iIG64X737kVBzm6eFwsf9phrULbqPOC2CvKprhmcMwxe44GG4KkgL6k84RNtAXY4fKQe7NfAQQ6fh4qOdoB2MKtyuoaZUzbwFqlOiuLHwOiNubH8SaRRZpNtPKFE8f9DwjnSSy2MdFiWn66j4ebrx9mj1OPxTFvjk23bZHXWoW4WhcUshwPWXicenb7zltVHZ7LMOJTmIrjAV0KadRveFgzmZW330wHejZ5tPc2lZOa0x9eIeLnLImfw4pKX3KN8wiPO5eXAvaNHC",
        short5: "PolyTrack24pdjQmskCCDAE9XCBkljghYEBZJB04NJADbiADIBe1PUlXm52UvD9lX1dVN1N12XUwBYBhG674NZlD9h6pOHjJ1BWYLbcdQ908BbRaBsECJP6v2Hhh8DOfe8hhZsz3vyLuKtSxPXrl2nmNt6WNS0OyRT7m4pPEu0R49jJSu7VcyZjqqCyTKj4ykdTJLAufnMV97eS03NZvOYmH7lnOmpKlHteipDAYsoIFnBkvF8OIgCKuYJuFw2SCvT2ld0D02oQNcqbN9FNDLCKWZRa2om8RfnZLyo90nKeuqoHQfSYPH34BbD3gb46pu0BSf1dtwLyYvlpeVFSCtH8MbfFZuTOidembx689tdaIoHRmIcICMWCSTzPzeRkfjI4jo4NM6hFxusCG2WBWmHea5dxsdYhwgmJkZmcKWRfbtVcnfjNVjtVaIV6yaqbCBt9erk91y7qP9Le6PQfH0iVQCnSUPdLGRY9VdvX4aelpcJWUmUWu5ffmQl0E8kxPwyGgra"
    }
};

// ==========================================
// BACKGROUND INJECTION LOGIC
// ==========================================

const originalFetch = window.fetch;
window.fetch = function(resource, init) {
    const url = typeof resource === 'string' ? resource : (resource && resource.url);
    
    // Quick, non-blocking check: Support relative paths by removing the leading slash from the search pattern
    if (!url || !url.includes('tracks/')) {
        return originalFetch.apply(window, arguments);
    }
    
    return (async () => {
        try {
            const urlObj = new URL(url, window.location.href);
            const path = urlObj.pathname;
            
            // 1. Mock the community directory listing (exactly 5 files)
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
            
            // 2. Mock individual track code files
            if (path.endsWith('.track')) {
                const filename = path.split('/').pop();
                const trackName = filename.replace('.track', '');
                
                // Flexible mapper to support track keys named "short1" or "track1" interchangeably
                const trackKey = WEEK_CONFIG.tracks[trackName] ? trackName : trackName.replace('short', 'track');
                
                // Fallback to any valid track code in your configuration to guarantee no 404s
                const fallbackTrackCode = WEEK_CONFIG.tracks.short1 || WEEK_CONFIG.tracks.track1 || "PolyTrack24pdbOnrmbCDAFG9VyYZATJgYxsjhhlpTASgwgFY25pPTelUkiU8fUdLu5uVWBmXQfCqrbYg5xltRaH0pcNj9ceIvHNRaLqKuM4xDf1V7MXHB1M3xYOfPQfclmoV2RgiqkAGWsCxked0BvY5BfU8eBzulvyASdvJ3jB4XBYgJhSu5QwBkp5hTfk1r4jLBAcRmGGgNvnIGQAJZVdDfEJRKIGKLcFTVZAexiYtk72Mjeyxee5485usr6HI1bzS5zVxWqrrc7mbuXCQ2GoBqVZaCUKO0woezcDXz04FvajtvAUqKDK046C7hmFq6LNrpQCyDn8cfzNDMbsPX2yIki7ZgXrapK2lOE08dOkVpTj4tqq7LeX1iCduoYHF8Uw63I9nv1Y8QZO0kh7Hmdn7efgX4NF1gfLPH9j4eXwYb3ze3eBmGnv4fixWFYNV32z5hddETdEm2NAz7Sk7C1Z7Ahzaebq3CztmsRikUETXhL9JTbsGFW01XEeL5uaMHuuY0XgiYV7f7esGsF67J71siugzZ0askwZVxYAKt9dLtTxh3pc2oLsYT4ud2Ftp3pTFyf2YLcrvsale9uACHde6pYVBZD2Allyucs47CfTtfpAQCUUPpRiOu5oKsPgbVF0XpRWxikXDSkjPOSePxCsd0V95acrfhl0k2Ms3LLev1mAmXnprcTBbVclASbYqtVk8vAAmI76A";
                const trackCode = WEEK_CONFIG.tracks[trackKey] || fallbackTrackCode;
                
                return new Response(trackCode, {
                    status: 200,
                    headers: { 'Content-Type': 'text/plain' }
                });
            }
        } catch (interceptorError) {
            console.error("Interceptor warning:", interceptorError);
        }
        
        return originalFetch.apply(window, arguments);
    })();
};

// UI Cleaning/Layer Hiding Logic
function applyUIModifications() {
    try {
        const elements = document.querySelectorAll('button, p, span, a, h1, h2, h3, div');
        
        elements.forEach(el => {
            // SAFETY GUARD: If the element has child HTML tags, skip it.
            if (el.children.length > 0) return;
            
            const textContent = el.textContent;
            if (!textContent) return;
            const text = textContent.trim().toLowerCase();
            
            // HIDE "Official tracks" tab
            if (text === 'official tracks' || text === 'official') {
                hideElementAndParent(el);
            }
            
            // HIDE "Custom tracks" / "My Tracks" / "Import" buttons
            if (text === 'custom tracks' || text === 'custom' || text === 'import') {
                hideElementAndParent(el);
            }
            
            // RENAME "Community tracks"
            if (text === 'community tracks') {
                if (el.textContent !== WEEK_CONFIG.tabName) {
                    el.textContent = WEEK_CONFIG.tabName;
                }
            }
            
            // REPLACE Version Number text elements safely (using direct comparison to avoid feedback triggers)
            const versionPattern = /kodub\.com|VERSION\s*[0-9.]+|0\.[56]\.[0-9]+/i;
            if (versionPattern.test(textContent)) {
                if (el.textContent !== WEEK_CONFIG.weekName) {
                    el.textContent = WEEK_CONFIG.weekName;
                }
            }
        });
    } catch (e) {
        // Suppress any errors to prevent blocking the game loop
    }
}

function hideElementAndParent(el) {
    if (el.style.display !== 'none') {
        el.style.display = 'none';
    }
    const parentButton = el.closest('button') || el.closest('.tab') || el.closest('.menu-item');
    if (parentButton && parentButton.style.display !== 'none') {
        parentButton.style.display = 'none';
    }
}

const uiObserver = new MutationObserver(() => {
    // Temporarily stop observing to avoid infinite loop when we modify elements
    uiObserver.disconnect();
    
    applyUIModifications();
    
    // Resume observing
    uiObserver.observe(document.body, { childList: true, subtree: true });
});
uiObserver.observe(document.body, { childList: true, subtree: true });
