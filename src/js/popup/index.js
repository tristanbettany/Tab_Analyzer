//Find Options Button
let options = document.getElementById('options')

options.onclick = (element) => {
    chrome.tabs.create({ url: "options.html" })
}