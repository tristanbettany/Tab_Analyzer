chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({autoAnalyse: true}, function() {
        console.log('Auto Analysis set to true');
    })
    chrome.storage.sync.set({domains: 'google.com'}, function() {
        console.log('Domains set to: google.com');
    })
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active == true) {
    
        chrome.storage.sync.get(null, function(data) {

            //Check to run auto analyse code
            if (data.autoAnalyse === true) {
                var url = tab.url;

                if (data.domains) {
                    //Split up domains to analyse
                    var domains = data.domains.split(',');
                    
                    //Loop Domains to see if we are on any currently
                    for (var i = 0; i <= domains.length; i++) { 
                        
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
                        }
                    }
                }
            }
        });
    }
});