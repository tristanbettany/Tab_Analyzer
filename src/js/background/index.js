chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({configUrl: 'http://cg.dev.test?format=js'}, () => {
        console.log('Default Config Url Set')
    })
})

chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.active == true) {
    
        chrome.storage.sync.get(null, (data) => {

            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function() {
                if (this.readyState == 4) {
                    let jsonObj = JSON.parse(this.responseText);

                    console.log(jsonObj);

                    if (jsonObj.autoAnalyse === true) {
                        let url = tab.url
                        console.log('Current URL: ' + url)

                        if (jsonObj.domains) {
                            //Loop Domains to see if we are on any currently
                            for (let i = 0; i <= jsonObj.domains.length; i++) {

                                if (url.indexOf(jsonObj.domains[i]) != -1) {
                                    console.log('Analysing - ' + jsonObj.domains[i]);

                                    //Executes the analyse script
                                    chrome.tabs.executeScript(
                                        tab.id,
                                        {file: 'scripts/analyse.js'}, function() {
                                            chrome.tabs.sendMessage(tab.id, jsonObj);
                                        }
                                    )

                                    //End
                                } else if (url.indexOf(jsonObj.domains[i]) == -1) {
                                    console.log('Nothing To Analyse')
                                }
                            }
                        }
                    }

                }
            }
            xhr.open('GET', data.configUrl)
            xhr.send()

        })
    }
})