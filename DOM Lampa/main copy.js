const btn = document.querySelector('.btn');
const image1 = document.querySelector('.image1');
let nimadir = true;
console.log(nimadir);
btn.addEventListener('click', ()=>{
      if(nimadir){
            image1.src = './img1.jpg'
            nimadir = false;
            btn.textContent = 'TURN OFF'
      }else{
            image1.src = './img2.jpg'
            nimadir = true;
            btn.textContent = 'TURN ON'
      }
})