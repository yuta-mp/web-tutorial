var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/minion.png') {
      myImage.setAttribute ('src','images/grue.png');
    } else {
      myImage.setAttribute ('src','images/minion.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Minion はすばらしいよ、' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
