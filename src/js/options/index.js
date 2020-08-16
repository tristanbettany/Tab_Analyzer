//Create code editor
ace.config.set('basePath', '/libs')
ace.config.setModuleUrl('ace/mode/json_worker', '/libs/worker-json.min.js')
let editor = ace.edit('json-editor')
editor.setTheme('ace/theme/github')
editor.session.setMode('ace/mode/json')

//Get Settings and Re-Populate
chrome.storage.sync.get(null, (data) => {
    let string = JSON.stringify(data, null, '\t')
    editor.setValue(string);
    editor.gotoLine(1);
})

let saveButton = document.getElementById('save')

//Save on click of save button
saveButton.addEventListener('click', () => {
    let json = editor.getValue()

    chrome.storage.sync.set(JSON.parse(json), () => {
        console.log('Saved data')
    })
})