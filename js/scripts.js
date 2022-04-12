var inputText = "";

function createNode(word, count){
  this.word = word;
  this.count = count;
  return this;
}

function getInput(){
  inputText = document.getElementById("userInput").value;
  console.log(inputText);
  return inputText;
}

function splitString(string){
  const strArr = string.split(" ");
  // for(let i = 0; i < strArr.length; i++){
  //   console.log(strArr[i]);
  // }
  return strArr;
}


function generateArray(){

  var input = getInput();
  var retArr = splitString(input);
  var wordArr = [];
  var countArr = [];
  var index = 0;

  wordArr[0] = {word: retArr[0].toLowerCase(), count: 1};


  for(let i = 1; i < retArr.length; i++){
    var currStr = retArr[i].toLowerCase();

    var found = false;
    for(let j = 0; j < wordArr.length; j++){
      console.log("currStr: " + currStr);
      console.log("wordArr[j]: " + wordArr[j]);
      console.log(wordArr[j].count);
      if(currStr == wordArr[j].word){
        found = true;
        index = j;
      }
    }

    if(!found){
      wordArr.push({word: currStr, count: 1});
    } else{
      wordArr[index] = {word: currStr, count: wordArr[index].count + 1}
    }

  }

  console.log("FINAL ARR:");
  for(let p = 0; p < wordArr.length; p++){
    console.log(wordArr[p]);
  }

  return wordArr;

}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const WIDTH = document.body.clientWidth;
const HEIGHT = document.body.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function getRandNum(max){
  return Math.floor(Math.random() * max);
}

function randColor(){
  return Math.floor(Math.random() * 16777215).toString(16);
}

function generate(){
  var myArray = generateArray();
  var x = 0;
  var y = 0;
  var color = "ffffff";

  ctx.clearRect(0,0,WIDTH, HEIGHT);

  for(let i = 0 ; i <myArray.length; i++){
    x = getRandNum(WIDTH);
    y = getRandNum(HEIGHT);
    color = randColor();
    console.log(color);
    var size = 20;
    var printWord = myArray[i].word;
    for(let j = 0 ; j < myArray[i].count; j++){
      size = size + 20;
    }

    ctx.beginPath();
    console.log("font size: " + size);
    ctx.font = size + "px Trebuchet MS";
    ctx.fillStyle = "#" + color;
    ctx.fillText(printWord, x, y);

  }

}
