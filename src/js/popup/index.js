//Find Analyse Button
let analyse = document.getElementById('analyse');

analyse.onclick = function(element) {
    chrome.storage.sync.get(null, function(data) {
        chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
            var url = tab[0].url;

            if (data.domains) {
                //Split up domains to analyse
                var domains = data.domains.split(',');
                
                //Loop Domains to see if we are on any currently
                for (var i = 0; i < domains.length; i++) { 
                    if (url.indexOf(domains[i]) != -1) {
                        console.log('Analysing - ' + domains[i]);
                        //Executes the analyse script
                        chrome.tabs.executeScript(
                            null,
                            {file: 'scripts/analyse.js'}
                        );
                        break;
                    } else if (url.indexOf(domains[i]) == -1) {
                        console.log('Nothing To Analyse');
                        break;
                    }
                }
            }
        });
    });
};

//Find Options Button
let options = document.getElementById('options');

options.onclick = function(element) {
    chrome.tabs.create({ url: "options.html" });
};