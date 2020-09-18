const config = require('config');
const fs = require('fs').promises;


//This function should be called in the start of programm and it will initialize all proceceses that should be initialized in fsWorker
//This function should be called in global initializer.
export function initializeCurrentFolder(){
    const conspectFolderName = document.getElementById("conspect_folder")
    const conspectName = getCurrentConspectName();
    conspectFolderName.innerHTML = conspectName;
    //console.log(stuff);
    setInFolderFiles();
}

//When user will use programm he can close and when he will open it again he will see the same folder whe   re he worked earlier
//So this function will return name of this folder
function getCurrentConspectName(){
    const folderPath = config.get('currentConspectFolder');
    const folderName = folderPath.split('\\')[folderPath.split('\\').length - 1];
    return folderName;
}


async function setInFolderFiles(){
    const stuff = await searchFilesInFolder(config.get('currentConspectFolder'));
    console.log(stuff);
    const placeForFiles = document.getElementById("files");
    stuff.forEach(el => {
        placeForFiles.appendChild(createInFolderFileElement(el, 34));
    })
}

//This function is a template for button fs button something like buttons in the vs code left menu.
function createInFolderFileElement(content, tag){
    var file = document.createElement('div');
    file.classList.add('inFolderFile');
    
    var text = document.createElement('h3');
    text.textContent = content;
    file.appendChild(text);

    file.addEventListener('click', () => {
        console.log(content);
    })

    return file;
}


//Return array of called files in folder
async function searchFilesInFolder(path){
    const files = [];
    const dir = await fs.opendir(path);
    for await (const dirent of dir) {
        console.log(dirent);
        files.push(dirent.name);

    }
    return files;
}