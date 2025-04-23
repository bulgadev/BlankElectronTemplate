const { app, BrowserWindow } = require('electron')


//creates the window :O
function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true //allows renderer to do nodejs
        }
    })

    //html to run
    win.loadFile('index.html')
}

//when ready creates a windows with our specs
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit
    }
})
