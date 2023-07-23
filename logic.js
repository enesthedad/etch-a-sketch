const btns = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('#reset');

const eraserBtn=document.getElementById('eraser');
const blackBtn=document.getElementById('black');
const rgbBtn=document.getElementById('rgb');
const box = document.getElementById('sketch');
let currentColor = 'black';
const grid16=document.getElementById('16');
const grid32=document.getElementById('32');
const grid48=document.getElementById('48');
const grid64=document.getElementById('64');


let grid = 64;



    for(let i=0;i<64*64;i++){
        const el = document.createElement('div');
        el.id='b'+i;
        el.className='box';
    
        box.appendChild(el);
    
    }



const randomHex=function(){
    return Math.trunc(Math.random()*255)+1;
}

resetBtn.addEventListener('click',function(){
    colored.forEach(el=>el.style.backgroundColor='white');
    currentColor='black';
    btns.forEach((but)=>but.classList.remove('active'));
    blackBtn.classList.add('active');
})
const colored = document.querySelectorAll('.box');
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


const paintEle = function(boxi){
    
    boxi.addEventListener('mouseover',function(eve){
        if(currentColor=='black'){
        boxi.style.backgroundColor=`black`;
        
        }else if(currentColor == 'white'){
        boxi.style.backgroundColor=`white`;
       
        }else if(currentColor=='rgb'){
        boxi.style.backgroundColor=`rgb(${randomHex()},${randomHex()},${randomHex()})`;
        
        }
        
        
    })
}



colored.forEach(ell =>paintEle(ell));


