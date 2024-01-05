


const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score")

const question = document.getElementById("question");

let score= JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreEl.innerText = `score:${score}`

question.innerText = `What is ${num1} multiply by ${num2} ?`;
const correctAns = num1 * num2;
// console.log(correctAns);


formEl.addEventListener("submit",()=>{

    const userAns = +inputEl.value;
        
    // console.log(userAns,typeof userAns);

    if(userAns===correctAns){
        score++;
        console.log(score)
        updateLocalStorage()
    }
    else{
        score--;
        console.log(score)
        updateLocalStorage()
    }

});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}


