//Find Domains Setting Element
let domains = document.getElementById('domains');
let autoAnalyseEnableButton = document.getElementById('auto-enabled');
let autoAnalyseDisableButton = document.getElementById('auto-disabled');

//Get Settings and Re-Populate
chrome.storage.sync.get(null, function(data) {
    if (data.domains) {
        domains.innerHTML = data.domains;
    }
    
    if (data.autoAnalyse === true) {
        autoAnalyseEnableButton.setAttribute('checked', 'checked');
    } else {
        autoAnalyseDisableButton.setAttribute('checked', 'checked');
    }
});

//Save new Domains Setting On Change
domains.addEventListener('keyup', function() {
    chrome.storage.sync.set({domains: domains.value}, function() {
        console.log('Domains set to: ' + domains.value);
    })
});

//Enable Auto Analysation
autoAnalyseEnableButton.addEventListener('click', function() {
    chrome.storage.sync.set({autoAnalyse: true}, function() {
        console.log('Auto Analysis set to true');
    })
});

//Disable Auto Analysation
autoAnalyseDisableButton.addEventListener('click', function() {
    chrome.storage.sync.set({autoAnalyse: false}, function() {
        console.log('Auto Analysis set to false');
    })
});