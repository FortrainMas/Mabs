const { app, BrowserWindow } = require('electron')

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);
function createWindow () {
  // Создаем окно браузера.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
// и загружаем index.html в приложении.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
