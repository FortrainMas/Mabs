const {remote} = require('electron');
const {screen} = remote;
//Declarate win as variable to use when I want to change size or do smth other with popup
const win = remote.getCurrentWindow();

const screenHeight = screen.getPrimaryDisplay().size.height;
const screenWidth = screen.getPrimaryDisplay().size.width;

win.setAlwaysOnTop(true);

console.log(screenHeight)

//Set Size of the window as 1/3
win.setSize(Math.floor(0.33 * screenWidth), Math.floor(0.33 * screenHeight), false);
//Set top and left of the window
win.setPosition(Math.floor(0.33 * screenWidth), Math.floor(0.33 * screenHeight), false);

console.log(remote);