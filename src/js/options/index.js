//Get Settings and Re-Populate
chrome.storage.sync.get(null, (data) => {

    if (data.configUrl) {
        document.getElementById('config-url').value = data.configUrl
    }

})

let saveButton = document.getElementById('save')

//Save on click of save button
saveButton.addEventListener('click', () => {
    let value = document.getElementById('config-url').value

    chrome.storage.sync.set({configUrl: value}, () => {
        console.log('Saved JSON')
    })
})