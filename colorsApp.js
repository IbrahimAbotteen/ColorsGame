/*  /* let t=document.querySelector('button')
 let t1=document.querySelector('.back')

t.addEventListener('click',()=>{
  window.location.href= "timerMode.html";
}) 
 console.log('hello world');
t1.addEventListener('click',()=>{
  window.location.href('mainPage.html')
})
*************************************************************************** */
let start=document.querySelectorAll('.start');
let startContainer=document.querySelector('.startContainer');
let tM=document.querySelector('#timerMode');//button
let eM=document.querySelector('#easyMode');//button
let mM=document.querySelector('#memoryMode');//button
let colBox=document.createElement('div');
let colorBoxArr=[];
let wordsArr=['blue','black','red','grey','green','brown'];
let score=null;
let currentWord=null;
let show=[];
let rand=null;
let word=null;
let s=document.createElement('p');//The score p element
let startButton=document.createElement('button');
startButton.innerText='Start';
startButton.setAttribute('class','hide');
document.body.append(startButton);
s.innerText=`Score:0`;
s.setAttribute('class','hide');
document.body.append(s);
/* let gamePlay=document.createElement('div');
gamePlay.setAttribute('class','hide');
gamePlay.append(s);//putting the score inside the gamePlay container
document.body.append(gamePlay); */



function hideElement(el){
  el.setAttribute('class','hide');
}

function gameOver(){
  playAgain=document.createElement('button');
  document.body.append(playAgain);
  playAgain.setAttribute('class','start')
  playAgain.innerText='PlayAgain';
  hideElement(colBox);
  playAgain.addEventListener('click',()=>{
    hideElement(playAgain);
    colBox.setAttribute('class','colContainer')
    score=0;
    s.innerText=`Score ${score}`;
    word.setAttribute('class','words')
  })
}

function wordShow(){

    rand = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    word=document.createElement('p');
    word.setAttribute('class','words');
    word.innerText=rand;
    //console.log(rand.target)
    document.body.append(word);
    currentWord=rand;
   // check(rand);
  
}

function timerModePlay(e){
  console.log('this is timer mode');
  console.log(e.target.id);
  console.log(currentWord);
  //return event.target.id===currentWord;
  hideElement(word);
  if(e.target.id===currentWord){
    score++;
    s.innerText=`score ${score}`;
    return wordShow();
  }
   
  else {
    score--;
    s.innerText=`score ${score}`;
    if(score<0)
      return gameOver();
    else
     return wordShow();
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
      col.addEventListener('click',(e) => timerModePlay(e))
  } 
  }
 else if(mode==='e'){
  for(let i of wordsArr){
    let col=document.createElement('div');
    col.setAttribute('class','colors');
    col.setAttribute('id',i);
    col.style.backgroundColor=i;
    colBox.append(col);
    colorBoxArr.push(col);
    col.addEventListener('click',easyModePlay)
} 
 }
  else if(mode==='m'){
    for(let i of wordsArr){
      let col=document.createElement('div');
      col.setAttribute('class','colors');
      col.setAttribute('id',i);
      col.style.backgroundColor=i;
      colBox.append(col);
      colorBoxArr.push(col);
      col.addEventListener('click',memoryModePlay)
  } 
  } 
}

function colorBox(mode){
  colBox.setAttribute('class','colContainer');
  startContainer.after(colBox);
  fillUP(mode);
}

function timerMode(){
  console.log("this is the timer mode function");
  startButtonFunc('t');
  //wordShow();
  let correct=true;
 /*  while(correct===true){
    let rand = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    let word=document.createElement('p');
    word.innerText=rand;
    document.body.append(word);//check the click 
    //if clikced.id===rand => do 69 -72 again
    //else correct=false; // this will break the loop
  } */    
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
  startButton.setAttribute('class','start');

})
}


tM.addEventListener('click',(e)=>{
  timerMode();
})

eM.addEventListener('click',(e)=>{
  easyMode();
})

mM.addEventListener('click',(e)=>{
  memoryMode();
})



function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

/* alert("jello");

alert("bye");

let p1=document.createElement('p');
p1.innerText='hello woed';
document.body.append(p1);

wait(4000);
let p2=document.createElement('p');
p2.innerText='hello woed';
document.body.append(p2);  */