var wordsArr = ['quarter', 'twenty', 'five', 'half', 'ten', 'past', 'oclock', 'to']
var h;
var m;
var s;

function updateTime(){
    var today = new Date();
    h = today.getHours() % 12 || 12;
    m = today.getMinutes();
    s = today.getSeconds();
    return h + ":" + m

}

function correctHours(inputh, inputm){
    if (m > 34){
        h = h + 1;
    }
    if (inputm > 34){
        return inputh = inputh + 1;
    } else {
        return inputh;
    }
}
function hourString(input){
    h = "hour_" + h
    input = "hour_" + input
    return input;
}

function dimHours(){
    for(var i = 1; i <= 12; i++){
        var id = "hour_" + i;
        document.getElementById(id).className= "dimmed";
    }
}
function dimMinutes(){
    wordsArr.forEach(function(word) {
        document.getElementById(word).className= "dimmed";
    });
}

function highlightHour(){
    document.getElementById(h).className= "highlighted";
}

function setClock(){
    if(0 <= m && 5 > m){
        document.getElementById('oclock').className= "highlighted";
    }
    if(4 < m && m < 35){
        document.getElementById('past').className= "highlighted";
    }
    if((4 < m && m < 10) || (24 < m && m < 30) || (34 < m && m < 40) || (54 < m && m < 60)) {
        document.getElementById('five').className= "highlighted";
    }
    if(34 < m && m < 60){
        document.getElementById('to').className= "highlighted";
    }
    if((44 < m && m < 50)||(14 < m && m < 20)){
        document.getElementById('quarter').className= "highlighted";
    }
    if((9 < m && m < 15)||(49 < m && m < 55)){
        document.getElementById('ten').className= "highlighted";
    }
    if((34 < m && m < 45)||(19 < m && m < 30)){
        document.getElementById('twenty').className= "highlighted";
    }
    if(29 < m && m < 35){
        document.getElementById('half').className= "highlighted";
    }
}

function updateBackground() {
  var remainderMinutes = m % 5;
  var secondsPassed = (remainderMinutes * 60) + s;
  var fraction = (secondsPassed) / 300;
  if (secondsPassed > 150) {
    fraction = (300 - (secondsPassed)) / 300;
  }
  var middle = "0,0,0," + (0.8 - (fraction * 0.6));
  document.getElementById('pattern').style.background = "rgba(" + middle + ") url(pattern.png)";
  console.log(secondsPassed, (0.8 - fraction))
}

var run = function update(){
    updateTime();
    correctHours(h,m);
    hourString(h);
    dimHours();
    dimMinutes();
    highlightHour();
    setClock();
    updateBackground();
}

setInterval(run, 1000);
