
function button1Clicked(){
  document.getElementById('button1').classList.toggle('was-clicked');
}

function button2Activated(){
  document.getElementById('button2').classList.toggle('double-click');
}

function windowLoaded(){
  console.log('loaded ok');
  document.getElementById('button1').addEventListener('click', button1Clicked);
  document.getElementById('button2').addEventListener('dblclick', button2Activated);
}

window.onload = windowLoaded;
