const calculatorBtns = document.querySelectorAll(".calc-btn");
let result = document.getElementById('display');
const evalResult = document.getElementById('display')
const resetResult = "";
const operazione = eval(result)
let finalResult = "";

let choosedNumber = 0 ;
const resetBtn = document.getElementById('cancella');
const uguale = document.getElementById('equal');



 calculatorBtns.forEach(btn  => {
     btn.addEventListener('click', (evt) => {
         choosedNumber = evt.target.innerHTML 
         result.innerHTML += choosedNumber  
     })
 });

function clearAll() {
    resetBtn.addEventListener('click', () => {
        result.innerHTML = resetResult
    })
}

function ev() {
    uguale.addEventListener('click', console.log(result.innerHTML = eval(result.textContent)))
}












 


