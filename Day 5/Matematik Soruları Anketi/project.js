const correctAnswers = ['8','10','3','25'];

const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const message = document.querySelector("#message");
const form = document.querySelector(".question-form");

form.addEventListener("submit", (e) => {

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
        if(score === 100){
          button.disabled = true;
         message.classList.remove("d-none");
        }
    }
  });

  result.classList.remove("d-none");
  result.querySelector('#percentage').textContent = `${score}%`;

});
