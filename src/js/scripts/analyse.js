//Get Settings, they may be needed
chrome.storage.sync.get(null, (data) => {

    if (data.injectedCSS) {
        let style = document.createElement('style')
        style.type = 'text/css';
        style.appendChild(document.createTextNode(data.injectedCSS));
        document.head.appendChild(style)
    }

    let tags = document.querySelectorAll('body *')

    if (tags) {
        Array.prototype.forEach.call(tags, (element, i) => {

            let textNodes = document.createNodeIterator(element, NodeFilter.SHOW_TEXT)
            let textNode

            while (textNode = textNodes.nextNode()) {
                
                if (data.replacements) {
                    for (let [key, value] of Object.entries(data.replacements)) {
                        if (data.replacements.hasOwnProperty(key)) {

                            let div = document.createElement('div');
                            textNode.parentNode.insertBefore(div, textNode);
                            div.insertAdjacentHTML('afterend', textNode.textContent.replace(new RegExp(key, 'g'), value))
                            div.remove();
                            textNode.remove();

                        }
                    }
                }

            }       
        })
    }

})