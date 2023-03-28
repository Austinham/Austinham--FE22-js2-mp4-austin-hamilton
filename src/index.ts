const calScreen = document.querySelector(".screen input") as HTMLInputElement;

// const numberButtons = document.querySelectorAll(".buttons button:not(.operator)");
const numberButtons = document.querySelectorAll("button");


// 'const operatorButtons = document.querySelectorAll(".buttons button.operator");'

const img = document.createElement("img");
document.body.appendChild(img);

const  imgUrl = new URL( './images/GNOME_Calculator_icon_2021.svg.png', import.meta.url);
img.src = imgUrl.href;


let fristUser: string;
let secondUser: string;

let operator: string;
let result: string;
let operator2: boolean = false;
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(button.textContent !== null)
    result = button.textContent;
    // console.log(result);
    getFristUser();
    saveoperator();
  });
  
});

function getFristUser(){
  if(/\d/.test(result)){ 
    if(!operator2){
      if(fristUser === undefined) {
        fristUser = "";
      }
      fristUser += result;
      calScreen.value = fristUser;
    } else { 
      if(secondUser === undefined) {
        secondUser = "";
      }
      secondUser += result;
      calScreen.value += secondUser;
    }
  }
}


function saveoperator(){
  if(['*', '/', '+', '-', '%'].includes(result)){ 

    operator = result;
    operator2= true
    console.log('operator',operator)
    calScreen.value += operator;
    
    
  }
}

function calculate(num1: number, num2: number, operator: string): number {
  let result = 0;
  num1 = parseFloat(fristUser);
  num2 = parseFloat(secondUser);


  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      console.log("Invalid operator!");
      break;
  }
  clearval();
  return result;

  
}





const equalBtn = document.querySelector(".equal");
console.log(equalBtn)

if(equalBtn) {
  equalBtn.addEventListener("click", () => {
    const num1 = parseFloat(fristUser);
    const num2 = parseFloat(secondUser);
    const result = calculate(num1, num2, operator);

    

    calScreen.value = result.toString();
    
    console.log(result);
  });
}


function clearval(){
  fristUser = "";
  secondUser = "";
  operator = "";
  result = "";
  operator2 = false;

 }

 const clearbtn = document.querySelector(".operator-Clear");

 if(clearbtn) {
  clearbtn.addEventListener("click", () => {
    calScreen.value = "";
    clearval();
  });
 }









