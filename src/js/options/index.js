//Create code editor
ace.config.set('basePath', '/libs')
ace.config.setModuleUrl('ace/mode/json_worker', '/libs/worker-json.min.js')
ace.config.setModuleUrl('ace/mode/css_worker', '/libs/worker-css.min.js')

let jsonEditor = ace.edit('json-editor')
jsonEditor.setTheme('ace/theme/github')
jsonEditor.session.setMode('ace/mode/json')

let cssEditor = ace.edit('css-editor')
cssEditor.setTheme('ace/theme/github')
cssEditor.session.setMode('ace/mode/css')

//Get Settings and Re-Populate
chrome.storage.sync.get(null, (data) => {

    if (data.injectedCSS) {
        cssEditor.setValue(data.injectedCSS);
        cssEditor.gotoLine(1);
        delete data.injectedCSS
    }
    let string = JSON.stringify(data, null, '\t')
    jsonEditor.setValue(string);
    jsonEditor.gotoLine(1);

})

let saveButton = document.getElementById('save')

//Save on click of save button
saveButton.addEventListener('click', () => {
    let json = jsonEditor.getValue()
    let css = cssEditor.getValue()

    chrome.storage.sync.set(JSON.parse(json), () => {
        console.log('Saved JSON')
    })

    chrome.storage.sync.set({injectedCSS: css}, () => {
        console.log('Saved CSS')
    })
})