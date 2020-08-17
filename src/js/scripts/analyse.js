//Get Settings, they may be needed
chrome.storage.sync.get(null, (data) => {

    let tags = document.querySelectorAll('body *')

    if (tags) {
        Array.prototype.forEach.call(tags, (element, i) => {

            let textNodes = document.createNodeIterator(element, NodeFilter.SHOW_TEXT)
            let textNode

            while (textNode = textNodes.nextNode()) {
                
                if (data.replacements) {
                    for (let [key, value] of Object.entries(data.replacements)) {
                        if (data.replacements.hasOwnProperty(key)) {
                            
                            textNode.textContent = textNode.textContent.replace(new RegExp(key, 'g'), value)

                        }
                    }
                }

            }       
        })
    }

})