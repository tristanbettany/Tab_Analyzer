//Get Settings, they may be needed
chrome.storage.sync.get(null, (data) => {

    let tags = document.querySelectorAll('body *')

    if (tags) {
        Array.prototype.forEach.call(tags, (element, i) => {

            let textNodes = document.createNodeIterator(element, NodeFilter.SHOW_TEXT)
            let textNode

            while (textNode = textNodes.nextNode()) {
                textNode.textContent = textNode.textContent.replace(/TEST/g, "REPLACED")
            }       
        })
    }

})