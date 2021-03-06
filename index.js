const { app, BrowserWindow, screen, globalShortcut } = require('electron')


function createWindow () {
    const screenElectron = screen;
    const mainScreen = screenElectron.getPrimaryDisplay();
    const width = mainScreen.size.width;
    const height = mainScreen.size.height;
    // Создаем окно браузера.
    const win = new BrowserWindow({
      width: width,
      height: height,
      darkTheme: true,
      fullscreen: true,
      //12151C
      backgroundColor: '#12151C',
      frame: true,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
      }
    })
    
    // и загружаем index.html в приложении.
    win.loadFile('texteditor.html');
    win.webContents.openDevTools();
}

app.whenReady().then(()=>
{
  createWindow();
})



  