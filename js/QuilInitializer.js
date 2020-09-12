const { globalShortcut } = require('electron')

let Delta = Quill.import('delta');

let quill = new Quill('#editor', {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }, { 'font': [] }],
      [
        { 'list': 'ordered'}, { 'list': 'bullet' },
        'bold',
        'italic',
        'underline',
        'strike', 
        'formula',
        'image',
        'code-block',
        { 'color': [] },
        { 'background': [] },
        { 'align': [] }
      ],
    ]
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'  // or 'bubble'
});



initialize();


let change = new Delta();
quill.on('text-change', function(delta) {
  change = change.compose(delta);
  console.log(change);
});

quill.format('color', 'red');


//Save change automaticly once per 5 seconds
setInterval(function() {
  saveChanges();
}, 5*1000);


setTimeout(()=>{quill.format('color', 'red', 'user');}, 5000);
setTimeout(()=>{console.log(quill.getText(0));}, 10000);


function initialize(){
  loadData();
  saveShortcut();
}

//Set data to the quiple 
function loadData(){
  if(localStorage.getItem('storedText') == true){
    console.log(localStorage.getItem('storedText'));
  }else{
    console.log(localStorage.getItem('storedText'));
    const data = JSON.parse(localStorage.getItem('storedText'));
    quill.setContents(data);
  }
}

function saveChanges(){
  if (change.length() > 0) {
    console.log('Saving changes', change);
    // Save the entire updated text to localStorage
    const data = JSON.stringify(quill.getContents())
    localStorage.setItem('storedText', data);
    change = new Delta();
  }
}

function saveShortcut(){
  window.addEventListener('keyup', (event)=>{
    console.log("Lenin")
    if( event.key == "s" & (event.ctrlKey || event.metaKey)){
      saveChanges();
    }
  }, true)
}