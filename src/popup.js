(function() {
    const toggle = () => {
        chrome.storage.sync.get('enabled', result => {
            const { enabled } = result;
            chrome.storage.sync.set({enabled: !enabled}, () => {
                console.log('enabled:', !enabled);
            });
        });  
    };

    chrome.storage.sync.get('enabled', result => {
        const { enabled }  = result;
        const checkbox = document.querySelector("#toggleEnable");
        checkbox.onclick = toggle;
        checkbox.disabled = false;
        checkbox.checked = enabled;
    });
    
})();