const correctAnswers = ['E','E','E','E'];

const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const form = document.querySelector(".question-form");

form.addEventListener("submit", (e) => {

  // preventDefault bi elementin default  özelliğini devre dışı bırakır. Burada butona basıldığında form submitini engellemek için kullandık.  
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  let score = 0;

  userAnswers.forEach((answer,index)=>{
    if(answer === correctAnswers[index]){
        score += 25;
    }
  });

  result.classList.remove("d-none");
  result.querySelector('#percentage').textContent = `${score}%`;

});
