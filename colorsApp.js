let start=document.querySelectorAll('.start');
let startContainer=document.querySelector('.startContainer');
let tM=document.querySelector('#timerMode');//button
let h=document.createElement('div');
let colBox=document.createElement('div');
let s=document.createElement('div');//The score p element
let startButton=document.createElement('button');
let losingReport=document.createElement('p');
let colorBoxArr=[];
let wordsArr=['blue','black','red','grey','green','brown'];
let score=0;
let high=0;
h.setAttribute('class','hide');
h.innerText="HighScore: 0";
let currentWord=null;
let rand=null;
let word=null;
startButton.innerText='Start';
startButton.setAttribute('class','hide');
document.body.append(startButton);
s.innerText=`Score: 0`;
s.setAttribute('class','hide');
document.body.append(s);
document.body.append(h);
document.body.append(losingReport);
losingReport.setAttribute('class','hide');

function hideElement(el){
  el.setAttribute('class','hide');
}

function gameOver(){
  playAgain=document.createElement('button');
  document.body.append(playAgain);
  playAgain.setAttribute('class','lose');
  playAgain.innerText='PlayAgain';
  hideElement(colBox);
  losingReport.setAttribute('class','report');
  losingReport.innerText=`Game Over \n Your score is:${score} \n Your high score is:${high}`;
  hideElement(h);
  hideElement(s);
  playAgain.addEventListener('click',()=>{
      hideElement(playAgain);
      hideElement(losingReport);
      s.setAttribute('class','score');
      h.setAttribute('class','hScore');
      colBox.setAttribute('class','colContainer')
      score=0;
      s.innerText=`Score: ${score}`;
      word.setAttribute('class','words')
  })
}

function wordShow(){
    rand = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    word=document.createElement('p');
    word.setAttribute('class','words');
    word.innerText=rand;
    word.style.color=rand;
    //console.log(rand.target)
    document.body.append(word);
    currentWord=rand;
   // check(rand);
  
}

function modePlay(e){
  console.log('this is timer mode');
  console.log(e.target.id);
  console.log(currentWord);
  //return event.target.id===currentWord;
   hideElement(word);
  if(e.target.id===currentWord){
    score++;
    s.innerText=`Score: ${score}`;
    return wordShow();
  }  
  else {
    s.innerText=`Score: ${score}`;
    if(score>high){
      high=score;
      h.innerText=`HighScore: ${high}`;
    } 
    return gameOver();
 }     
}
function easyModePlay(e){
  console.log('this is easy mode')
}

function memoryModePlay(e){
  console.log('this is memory mode');
}

function startButtonFunc(mode){
  startButton.addEventListener('click',()=>{
    hideElement(startButton);
    rand = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    word=document.createElement('p');
    word.setAttribute('class','words');
    word.innerText=rand;
    word.style.color=rand;
    currentWord=rand; 
    colorBox(mode);
    document.body.append(word);
   })
}

function fillUP(mode){
  if (mode==='t'){
    for(let i of wordsArr){
      let col=document.createElement('div');
      col.setAttribute('class','colors');
      col.setAttribute('id',i);
      col.style.backgroundColor=i;
      colBox.append(col);
      colorBoxArr.push(col);
      col.addEventListener('click',(e) => modePlay(e))
  } }}
  
function colorBox(mode){
  colBox.setAttribute('class','colContainer');
  startContainer.after(colBox);
  fillUP(mode);
}

function mode(){
  console.log("this is the timer mode function");
  startButtonFunc('t');
  //wordShow();
  let correct=true;   
}

function easyMode(){
  console.log("this is the memory mode function");
  startButtonFunc('e');
}

function memoryMode(){
  console.log("this is the memory mode function");
  startButtonFunc('m');
}

//click event for all start buttons to hide them when clicked
for(let i of start){
  i.addEventListener('click',(e)=>{
  console.log(i.innerText);
  hideElement(startContainer);//calling the hide function
  s.setAttribute('class','score');
  h.setAttribute('class','hScore');
  startButton.setAttribute('class','start');
  startButton.setAttribute('id','start');
})
}
tM.addEventListener('click',(e)=>{
  mode();
})



