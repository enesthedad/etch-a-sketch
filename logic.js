const box = document.getElementById('sketch');
for(let i=0;i<64*64;i++){
    let el = document.createElement('div');
    el.id='b'+i;
    el.className='box';

    box.appendChild(el);

}
const randomHex=function(){
    return Math.trunc(Math.random()*255)+1;
}

const colored = document.querySelectorAll('.box');


const paintEle = function(boxi){
    boxi.onmousedown = ()=> console.log('1');
    boxi.addEventListener('mouseover',function(eve){
        boxi.style.backgroundColor=`rgb(${randomHex()},${randomHex()},${randomHex()})`;
    })
}
colored.forEach(ell =>paintEle(ell));
const btn = document.querySelector('#reset');

btn.addEventListener('click',function(){
    colored.forEach(el=>el.style.backgroundColor='white')
})

