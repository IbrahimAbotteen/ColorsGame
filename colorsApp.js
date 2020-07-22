 /* let t=document.querySelector('button')
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


function hideElement(el){
  el.setAttribute('class','hide');
}

function showElement(el){
  el.setAttribute('class','show');
}

function colorBox(){
  colBox.setAttribute('class','colContainer');
  startContainer.after(colBox);
  fillUP();
/*   let color0=document.createElement('div');
  color0.setAttribute('class','colors');
  color0.style.backgroundColor="blue";
  colBox.append(color0); */
}

function timerMode(){
  console.log("this is the timer mode function");
  colorBox();  
}

function easyMode(){
  console.log("this is the easy mode function");
  colorBox();
}

function memoryMode(){
  console.log("this is the memory mode function");
  colorBox();
}
function fillUP(){
  for(let i of wordsArr){
    let col=document.createElement('div');
    col.setAttribute('class','colors');
    col.setAttribute('id',i);
    col.style.backgroundColor=i;
    colBox.append(col);
    colorBoxArr.push(col);

} 
}


//click event for all start buttons to hide them when clicked
for(let i of start){
  i.addEventListener('click',(e)=>{
  console.log(i.innerText);
  hideElement(startContainer);//calling the hide function
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



