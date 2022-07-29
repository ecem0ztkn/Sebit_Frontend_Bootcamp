// Htmlden element çekme yöntemleri
// const button = document.querySelector('button');
// const button = document.querySelector('#buttonId');
// const button = document.querySelector('.buttonClass');
// const button = document.getElementById('buttonId');
const button = document.getElementsByClassName("buttonClass")[0];

//İlk yöntem
// button.addEventListener('click' , () => {
//     console.log('tıklandı');
// });

//İkinci yöntem
// function add(){
//     console.log('Tıklandı');
// }


console.log(button);

const liElemanları = document.querySelectorAll("li");
console.log(liElemanları);

liElemanları.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    e.target.style.color = blue;
  });
});

const ulElemanları = document.querySelectorAll("ul");
console.log(ulElemanları);

liElemanları.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    e.target.remove();
  });
});


function add(){
    ulElemanları.append(liElemanim);
}

const liElemanim = document.createElement("li");
liElemanim.textContent = "Javascript";
// append = sona eleman ekler
// prepend = başa eleman ekler
