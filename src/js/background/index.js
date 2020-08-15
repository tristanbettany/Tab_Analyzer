chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({autoAnalyse: true}, () => {
        console.log('Auto Analysis set to true')
    })
    chrome.storage.sync.set({domains: 'test.html'}, () => {
        console.log('Domains set to: test.html')
    })
})

chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.active == true) {
    
        chrome.storage.sync.get(null, (data) => {

            //Check to run auto analyse code
            if (data.autoAnalyse === true) {
                let url = tab.url
                console.log('Current URL: ' + url)
                
                if (data.domains) {
                    //Split up domains to analyse
                    let domains = data.domains.split(',')
                    
                    //Loop Domains to see if we are on any currently
                    for (let i = 0; i <= domains.length; i++) { 
                        
                        if (url.indexOf(domains[i]) != -1) {
                            console.log('Analysing - ' + domains[i]);
                            //Executes the analyse script
                            chrome.tabs.executeScript(
                                null,
                                {file: 'scripts/analyse.js'}
                            )
                            break
                        } else if (url.indexOf(domains[i]) == -1) {
                            console.log('Nothing To Analyse')
                        }
                    }
                }
            }
        })
    }
})