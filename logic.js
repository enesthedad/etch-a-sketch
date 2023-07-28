const btns = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('#reset');

const eraserBtn=document.getElementById('eraser');
const blackBtn=document.getElementById('black');
const rgbBtn=document.getElementById('rgb');
const box = document.getElementById('sketch');
let currentColor = 'black';
const grid16=document.getElementById('grid16');
const grid32=document.getElementById('grid32');
const grid48=document.getElementById('grid48');
const grid64=document.getElementById('grid64');
const gridBtns = document.querySelectorAll('.grid-btn');
const colorPicker=document.getElementById('color-picker');
let toggle = false;
let grid = 64;
const toggleClick=function(){
    if(toggle==false){
        toggle=true;
    }
    else{
        toggle=false;
    }
}
const createGrid = function(gridNum){
    for(let i=0;i<gridNum*gridNum;i++){
        const el = document.createElement('div');
        el.id='b'+i;
        el.className='box';
    
        box.appendChild(el);
        
    }
}
const resetGrid=function(){
    colored.forEach(el=>el.style.backgroundColor='white');
    currentColor='black';
    btns.forEach((but)=>but.classList.remove('active'));
    blackBtn.classList.add('active');
}
createGrid(grid);
grid64.classList.add('active');
const randomHex=function(){
    return Math.trunc(Math.random()*255)+1;
}
grid16.addEventListener('click',function(){
    colored.forEach(function(div){
     div.style.width='40px';
     div.style.height='40px';
     
    })
    gridBtns.forEach(btn=>btn.classList.remove('active'));
    grid16.classList.add('active');
    resetGrid();
 })
grid32.addEventListener('click',function(){
   colored.forEach(function(div){
    div.style.width='20px';
    div.style.height='20px';
    
   })
   gridBtns.forEach(btn=>btn.classList.remove('active'));
   grid32.classList.add('active');
   resetGrid();
})
grid48.addEventListener('click',function(){
    colored.forEach(function(div){
     div.style.width='13.3333px';
     div.style.height='13.3333px';
    })
    gridBtns.forEach(btn=>btn.classList.remove('active'));
    grid48.classList.add('active');
    resetGrid();
    
 })
 grid64.addEventListener('click',function(){
    colored.forEach(function(div){
     div.style.width='10px';
     div.style.height='10px';
     
    })
    gridBtns.forEach(btn=>btn.classList.remove('active'));
    grid64.classList.add('active');
    
    resetGrid();
 })
resetBtn.addEventListener('click',resetGrid)

blackBtn.addEventListener('click',function(){ 
    currentColor='black';
    btns.forEach((but)=>but.classList.remove('active'));
    blackBtn.classList.add('active');
});
eraserBtn.addEventListener('click',function(){
    currentColor='white'
    btns.forEach((but)=>but.classList.remove('active'));
    eraserBtn.classList.add('active');
});
rgbBtn.addEventListener('click',function() {
    currentColor='rgb';
    btns.forEach((but)=>but.classList.remove('active'));
    rgbBtn.classList.add('active');
});

colorPicker.addEventListener('input',()=>{
    currentColor='selected';
    btns.forEach((but)=>but.classList.remove('active'));
    selectedValue = colorPicker.value;
    colorPicker.classList.add('active');
})
const createCustomGrid = function(userInput){
    let gridPx = 192/userInput;
    colored.forEach(function(div){
        div.style.width=`${gridPx}px`;
        div.style.height=`${gridPx}px`;
        
       })
       resetGrid();
}
const colored = document.querySelectorAll('.box');
const paintEle = function(boxi){
    

    boxi.addEventListener('mouseover',function(eve){
        if(currentColor=='black'&& toggle){
            
                boxi.style.backgroundColor=`black`;
                
            
        }else if(currentColor == 'white' && toggle){
        boxi.style.backgroundColor=`white`;
       
        }else if(currentColor=='rgb' && toggle){
        boxi.style.backgroundColor=`rgb(${randomHex()},${randomHex()},${randomHex()})`;
        
        }else if(currentColor=='selected'&& toggle){
            boxi.style.backgroundColor=`${selectedValue}`;
          
        }
        
        
    })
    
}

// const user = prompt('Enter a number');
// createCustomGrid(user);

colored.forEach((ell) =>{
    
    paintEle(ell);

});


box.addEventListener('click',()=>{
    if(toggle==false){
        toggle=true;
    }else{
        toggle=false;
    }

});
