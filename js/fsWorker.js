const config = require('config');


//When user will use programm he can close and when he will open it again he will see the same folder where he worked earlier
//So this function will return name of this folder
function getCurrentConspectName(){
    const folderPath = config.get('currentConspectFolder');

    const folderName = folderPath.split('/')[folderPath.split('/').length - 1];
    return folderName;
}

function initializeCurrentFolder(){
    const conspectFolderName = document.getElementById("conspect_folder")
    const conspectName = getCurrentConspectName();
    conspectFolderName.innerHTML = conspectName;
}