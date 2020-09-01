const { app, BrowserWindow } = require('electron')

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
