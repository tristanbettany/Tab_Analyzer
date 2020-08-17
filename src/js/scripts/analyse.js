//Get Settings, they may be needed
chrome.storage.sync.get(null, (data) => {

    if (data.injectedCSS) {
        let style = document.createElement('style')
        style.type = 'text/css';
        style.appendChild(document.createTextNode(data.injectedCSS));
        document.head.appendChild(style)
    }


    let textNodes = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT)
    let textNode

    //Loop nodes in document
    while (textNode = textNodes.nextNode()) {

        if (data.replacements) {

            //Loop items to replace
            for (let [key, value] of Object.entries(data.replacements)) {

                if (data.replacements.hasOwnProperty(key)) {
                    
                    let div = document.createElement('div');
                    let parent = textNode.parentNode
                    let regex = new RegExp(key, 'g')
                    let matches = textNode.textContent.match(regex)

                    if (parent && matches) {
                        parent.insertBefore(div, textNode);
                        div.insertAdjacentHTML('afterend', textNode.textContent.replace(regex, value))
                        div.remove();
                        textNode.remove();
                    }

                }
            }
        }

    }       


})