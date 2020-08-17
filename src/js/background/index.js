chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({autoAnalyse: true}, () => {
        console.log('Auto Analysis set to true')
    })
    chrome.storage.sync.set({domains: ['test.html']}, () => {
        console.log('Domains set')
    })
    chrome.storage.sync.set({replacements: {'TEST': '<span style="color:red;">REPLACEMENT</span>'}}, () => {
        console.log('Replacements set')
    })
    chrome.storage.sync.set({injectedCSS: '* { color: blue; }'}, () => {
        console.log('CSS Set')
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
                    //Loop Domains to see if we are on any currently
                    for (let i = 0; i <= data.domains.length; i++) { 
                        
                        if (url.indexOf(data.domains[i]) != -1) {
                            console.log('Analysing - ' + data.domains[i]);
                            //Executes the analyse script
                            chrome.tabs.executeScript(
                                null,
                                {file: 'scripts/analyse.js'}
                            )
                            break
                        } else if (url.indexOf(data.domains[i]) == -1) {
                            console.log('Nothing To Analyse')
                        }
                    }
                }
            }
        })
    }
})