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

        if (data.textReplacements) {

            //Loop items to replace
            for (let [key, value] of Object.entries(data.textReplacements)) {

                if (data.textReplacements.hasOwnProperty(key)) {
                    
                    let div = document.createElement('div');
                    let parent = textNode.parentNode
                    
                    let pos = value.indexOf(key)
                    let regex = null
                    if (pos !== -1) {
                        let lookbehind = value.substring(0, pos)
                        regex = new RegExp('(?<!'+lookbehind+')'+key, 'g')
                    } else {
                        regex = new RegExp(key, 'g')
                    }

                    let matches = textNode.textContent.match(regex)

                    if (parent && matches) {
                        parent.insertBefore(div, textNode);
                        div.insertAdjacentHTML('afterend', textNode.textContent.replace(regex, value))
                        div.remove()
                        textNode.remove()
                    }

                }
            }
        }

    }       

    // ---

    let tags = document.querySelectorAll('body *')

    if (tags) {
        Array.prototype.forEach.call(tags, (element, i) => {

            if (data.htmlReplacements) {

                //Loop items to replace
                for (let [key, value] of Object.entries(data.htmlReplacements)) {
    
                    if (data.htmlReplacements.hasOwnProperty(key)) {

                        let regex = new RegExp(key, 'g')
                        let matches = element.innerHTML.match(regex)

                        if (matches) {
                            let parent = element.parentNode
                            let div = document.createElement('div')
                            parent.insertBefore(div, element.textNode)
                            div.insertAdjacentHTML('afterend', element.innerHTML.replace(regex, value))
                            div.remove()
                        }

                    }

                }

            }

        })

    }

    //End

})