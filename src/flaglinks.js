(function() {
    const domains = [
        "adelaidenow.com.au",
        "theaustralian.com.au",
        "bostonglobe.com",
        "bostonherald.com",
        "couriermail.com.au",
        "dailytelegraph.com.au",
        "fijitimes.com",
        "ft.com",
        "geelongadvertiser.com.au",
        "theglobeandmail.com",
        "heraldsun.com.au",
        "chron.com",
        "irishtimes.com",
        "latimes.com",
        "technologyreview.com",
        "nbr.co.nz",
        "nationalpost.com",
        "nytimes.com",
        "nnsl.com",
        "ntnews.com.au",
        "ocregister.com",
        "scientificamerican.com",
        "thestar.com",
        "thetimes.co.uk",
        "volkskrant.nl",
        "wsj.com"
    ];

    const createStyle = () => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.flagwall-flagged-link { text-decoration: underline dotted red !important }';
        document.querySelector('head').appendChild(style);
    };

    const flagLinks = () => {
        document.querySelectorAll('a[href]').forEach(tag => {
            const hostname = new URL(tag.href).hostname;
            if (domains.find(domain => hostname.endsWith(domain))) {
                if (!tag.classList.contains('flagwall-flagged-link')) {
                    tag.classList.add('flagwall-flagged-link');
                }
            }
        });
    }

    const observer = new MutationObserver(flagLinks);
    const body = document.querySelector('body');
    observer.observe(body, {
        childList: true,
        subtree: true
    });

    chrome.storage.sync.get('enabled', result => {
        if (result.enabled) {
            createStyle();
            flagLinks();
        }
    });
})();
