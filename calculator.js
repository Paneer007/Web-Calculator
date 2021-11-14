let parentSelector;
let childSelector;
let number;
let listOfOperators=['x','/','+','-'];
let prevNumber;
function floatEnabled(){
    objectThatACalculatorMightNeed.floatActivated=true;
    updateNumber('floatInitiated')
}
const objectThatACalculatorMightNeed={
    floatActivated:false,
    floatcounter:0,
    number:0,
    number2:0,
    isFuncApplied:false,
    evaluted:false,
    result:undefined,
    operator:undefined,
    prevNumber:0,
    add:(num1,num2)=> num1+num2,
    subtract:(num1,num2)=> num1-num2,
    multiply:(num1,num2)=> num1*num2,
    divide:(num1,num2)=> {
        if (num2==0){
            return 'Error Division by 0 is not possible'
        }else{
            return num1/num2
        }
    }
}
function returnToOriginalButton(e){
    console.log(e);
    if ((e.key!='Enter')){
    childSelector=document.getElementById(`${e.key}`);
    }else{
        childSelector=document.getElementById(`=`);
    }
    console.log(childSelector)
    switch(e.key){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '=':
        case '.':
        case 'Enter':
            childSelector.style.backgroundColor='rgb(80, 80, 80)'
            break;
        case '+':
        case '-':
        case 'x':
            console.log('hello')
            childSelector.style.backgroundColor='rgb(255, 149, 0)'
            break;
        case 'Backspace':
        case 'Delete':
            childSelector.style.backgroundColor='rgb(212, 212, 212)'
            break;
        case '/':
            childSelector.style.backgroundColor='rgb(255, 149, 0)'
            break;

    }
}
function calcKeyboard(e){
    console.log(e.key);
    if ((e.key!='Enter')){
        childSelector=document.getElementById(`${e.key}`);
    }else{
        childSelector=document.getElementById(`=`);
    }
    childSelector.style.backgroundColor='white'
    console.log(e.key)
    switch(e.key){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            updateNumberKeyboard(e.key);
            break;
        case '+':
        case '-':
        case '/':
        case 'x':
            operatorKeyboard(e.key);
            break;
        case '=':
        case 'Enter':
            execute(undefined);
            break;            
        case '.':
            floatEnabled();
            break;
        case 'Backspace':
            clearEntry();
            break;
        case 'Delete':
            clearStuff(undefined);
            break;
    }
}
function execute(e){

    switch((objectThatACalculatorMightNeed.operator).trim()){
        case '+':
            objectThatACalculatorMightNeed.result=objectThatACalculatorMightNeed.add(objectThatACalculatorMightNeed.number,objectThatACalculatorMightNeed.number2);
            break
        case '-':
            objectThatACalculatorMightNeed.result=objectThatACalculatorMightNeed.subtract(objectThatACalculatorMightNeed.number,objectThatACalculatorMightNeed.number2);
            break
        case 'x':
            objectThatACalculatorMightNeed.result=objectThatACalculatorMightNeed.multiply(objectThatACalculatorMightNeed.number,objectThatACalculatorMightNeed.number2);
            break
        case '/':
            objectThatACalculatorMightNeed.result=objectThatACalculatorMightNeed.divide(objectThatACalculatorMightNeed.number,objectThatACalculatorMightNeed.number2);
            break
    }

    objectThatACalculatorMightNeed.evaluted=true;
    display();
    if (objectThatACalculatorMightNeed.result=='Error Division by 0 is not possible'){
        objectThatACalculatorMightNeed.number=objectThatACalculatorMightNeed.number;
    }else{
        objectThatACalculatorMightNeed.number=objectThatACalculatorMightNeed.result;
    }
    objectThatACalculatorMightNeed.evaluted=false;
    objectThatACalculatorMightNeed.result=undefined;
    objectThatACalculatorMightNeed.number2=0;
    objectThatACalculatorMightNeed.prevNumber=0;
    objectThatACalculatorMightNeed.isFuncApplied=false;
    objectThatACalculatorMightNeed.floatActivated=false;
    objectThatACalculatorMightNeed.floatcounter=0;
    objectThatACalculatorMightNeed.operator=undefined;
}
function darkerNumber(e){
    e.target.style.backgroundColor='rgb(0, 0, 0)';
}
function originalNumber(e){
    e.target.style.backgroundColor='rgb(80, 80, 80)';
}
function darkerFunction(e){
    e.target.style.backgroundColor='rgb(0, 0, 0)';
}
function originalFunction(e){
    e.target.style.backgroundColor='rgb(255, 149, 0)';
}
function operatorKeyboard(e){
    console.log(typeof(e));
    objectThatACalculatorMightNeed.operator=(e).trim();
    objectThatACalculatorMightNeed.isFuncApplied=true;
    objectThatACalculatorMightNeed.floatActivated=false;
    objectThatACalculatorMightNeed.floatcounter=0;
    objectThatACalculatorMightNeed.prevNumber=0;
    display(objectThatACalculatorMightNeed.operator);   
}
function operator(e){
    console.log(typeof(e.target.textContent));
    objectThatACalculatorMightNeed.operator=(e.target.textContent).trim();
    objectThatACalculatorMightNeed.isFuncApplied=true;
    objectThatACalculatorMightNeed.floatActivated=false;
    objectThatACalculatorMightNeed.floatcounter=0;
    objectThatACalculatorMightNeed.prevNumber=0;
    display(objectThatACalculatorMightNeed.operator);
}
function updateNumberKeyboard(newNumber){
    if (objectThatACalculatorMightNeed.floatActivated==false){
        if(objectThatACalculatorMightNeed.isFuncApplied==false){
            number = newNumber;
            number = Number(number);
            objectThatACalculatorMightNeed.number*=10;
            objectThatACalculatorMightNeed.number+=number;
            console.log(objectThatACalculatorMightNeed.number)
            display(objectThatACalculatorMightNeed.number)
        }else{
            number = newNumber;
            number = Number(number);
            objectThatACalculatorMightNeed.number2*=10;
            objectThatACalculatorMightNeed.number2+=number;
            console.log(objectThatACalculatorMightNeed.number2);
            display(objectThatACalculatorMightNeed.number2);
            
        }
    }else{
        if(objectThatACalculatorMightNeed.isFuncApplied==false){
            if (newNumber =='floatInitiated'){
                display((objectThatACalculatorMightNeed.number).toFixed(1))
            }else{
            number = newNumber;
            number = Number(number);
            objectThatACalculatorMightNeed.floatcounter++;
            number*=10**-(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number+=number;
            objectThatACalculatorMightNeed.number*=10**(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number=Math.round(objectThatACalculatorMightNeed.number);
            objectThatACalculatorMightNeed.number*= 10**-(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number=Number((objectThatACalculatorMightNeed.number).toFixed(objectThatACalculatorMightNeed.floatcounter));
            display((objectThatACalculatorMightNeed.number).toFixed(objectThatACalculatorMightNeed.floatcounter));
            }
        }else{
            if (newNumber =='floatInitiated'){
                console.log('activated');
                console.log((objectThatACalculatorMightNeed.number2).toFixed(1))
                display('firstFloat')
            }else{
            number = newNumber;
            number = Number(number);
            objectThatACalculatorMightNeed.floatcounter++;
            number*=10**-(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number2+=number;
            objectThatACalculatorMightNeed.number2*=10**(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number2=Math.round(objectThatACalculatorMightNeed.number2);
            objectThatACalculatorMightNeed.number2*=10**-(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number2=Number((objectThatACalculatorMightNeed.number2).toFixed(objectThatACalculatorMightNeed.floatcounter))
            display((objectThatACalculatorMightNeed.number2).toFixed(objectThatACalculatorMightNeed.floatcounter));
            }
        }
    }
}

function updateNumber(event){
    //clean the code here Kumar
    if (objectThatACalculatorMightNeed.floatActivated==false){
        if(objectThatACalculatorMightNeed.isFuncApplied==false){
            number = event.target.innerText;
            number = Number(number);
            objectThatACalculatorMightNeed.number*=10;
            objectThatACalculatorMightNeed.number+=number;
            console.log(objectThatACalculatorMightNeed.number)
            display(objectThatACalculatorMightNeed.number)
        }else{
            number = event.target.innerText;
            number = Number(number);
            objectThatACalculatorMightNeed.number2*=10;
            objectThatACalculatorMightNeed.number2+=number;
            console.log(objectThatACalculatorMightNeed.number2);
            display(objectThatACalculatorMightNeed.number2);
            
        }
    }else{
        if(objectThatACalculatorMightNeed.isFuncApplied==false){
            if (event =='floatInitiated'){
                display((objectThatACalculatorMightNeed.number).toFixed(1))
            }else{
            number = event.target.innerText;
            number = Number(number);
            objectThatACalculatorMightNeed.floatcounter++;
            number*=10**-(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number+=number;
            objectThatACalculatorMightNeed.number*=10**(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number=Math.round(objectThatACalculatorMightNeed.number);
            objectThatACalculatorMightNeed.number*= 10**-(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number=Number((objectThatACalculatorMightNeed.number).toFixed(objectThatACalculatorMightNeed.floatcounter));
            display((objectThatACalculatorMightNeed.number).toFixed(objectThatACalculatorMightNeed.floatcounter));
            }
        }else{
            if (event =='floatInitiated'){
                console.log('activated');
                console.log((objectThatACalculatorMightNeed.number2).toFixed(1))
                display('firstFloat')
            }else{
            number = event.target.innerText;
            number = Number(number);
            objectThatACalculatorMightNeed.floatcounter++;
            number*=10**-(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number2+=number;
            objectThatACalculatorMightNeed.number2*=10**(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number2=Math.round(objectThatACalculatorMightNeed.number2);
            objectThatACalculatorMightNeed.number2*=10**-(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number2=Number((objectThatACalculatorMightNeed.number2).toFixed(objectThatACalculatorMightNeed.floatcounter))
            display((objectThatACalculatorMightNeed.number2).toFixed(objectThatACalculatorMightNeed.floatcounter));
            }
        }
    }
}
function clearEntry(){
    if (objectThatACalculatorMightNeed.isFuncApplied==false){
        if (objectThatACalculatorMightNeed.floatActivated==true){
            objectThatACalculatorMightNeed.floatcounter--;
            objectThatACalculatorMightNeed.number*=10**(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number= Math.floor(objectThatACalculatorMightNeed.number);
            objectThatACalculatorMightNeed.number*=10**-(objectThatACalculatorMightNeed.floatcounter);
            display(objectThatACalculatorMightNeed.number);
            if (objectThatACalculatorMightNeed.number%1==0){
                objectThatACalculatorMightNeed.floatActivated=false;
                objectThatACalculatorMightNeed.floatcounter=0;
            }
        }else{
            objectThatACalculatorMightNeed.number*=10**-1;
            objectThatACalculatorMightNeed.number= Math.floor(objectThatACalculatorMightNeed.number);
            objectThatACalculatorMightNeed
            display(objectThatACalculatorMightNeed.number);
        }
    }else{
        if (objectThatACalculatorMightNeed.floatActivated==true){
            objectThatACalculatorMightNeed.floatcounter--;
            objectThatACalculatorMightNeed.number2*=10**(objectThatACalculatorMightNeed.floatcounter);
            objectThatACalculatorMightNeed.number2= Math.floor(objectThatACalculatorMightNeed.number2);
            objectThatACalculatorMightNeed.number2*=10**-(objectThatACalculatorMightNeed.floatcounter);
            display(objectThatACalculatorMightNeed.number2);
            if (objectThatACalculatorMightNeed.number2%1==0){
                objectThatACalculatorMightNeed.floatActivated=false;
                objectThatACalculatorMightNeed.floatcounter=0;
            }
        }else{
            objectThatACalculatorMightNeed.number2*=10**-1;
            objectThatACalculatorMightNeed.number2= Math.floor(objectThatACalculatorMightNeed.number2);
            objectThatACalculatorMightNeed
            display(objectThatACalculatorMightNeed.number2);
        }
    }
}
function display(number=undefined){
    childSelector=document.querySelector('.DisplayText')
    if(objectThatACalculatorMightNeed.evaluted==false){
        if(objectThatACalculatorMightNeed.isFuncApplied==false){
            childSelector.textContent=number;
            prevNumber=number;
        }else{
            if (number=='firstFloat'){
            childSelector.textContent=`${objectThatACalculatorMightNeed.number} ${objectThatACalculatorMightNeed.operator} ${(objectThatACalculatorMightNeed.number2).toFixed(1)}`;
            }else{
                childSelector.textContent=`${objectThatACalculatorMightNeed.number} ${objectThatACalculatorMightNeed.operator} ${objectThatACalculatorMightNeed.number2}`
            }
        }   
    }else{
        childSelector.textContent=objectThatACalculatorMightNeed.result;
    }
}
function darkGreyButton(e){
    e.target.style.backgroundColor='white';
}
function greyButtonDarken(e){
    e.target.style.backgroundColor='black';
    e.target.style.color='rgb(212,212,212)';
}
function greyButtonOriginal(e){
    e.target.style.backgroundColor='rgb(212,212,212)';
    e.target.style.color='black'
}
function clickColorNumber(e){
    e.target.style.backgroundColor='white';
}
function clickColorFunction(e){
    e.target.style.backgroundColor='white';
}
let num_buttons = document.querySelectorAll('.numButton');
num_buttons.forEach((button)=>{
    button.addEventListener('mouseover',darkerNumber);
    button.addEventListener('mouseout',originalNumber);
    button.addEventListener('click',updateNumber);
    button.addEventListener('mousedown',clickColorNumber);
    button.addEventListener('mouseup',originalNumber);
});
let func_buttons = document.querySelectorAll('.funcButton');
func_buttons.forEach((button)=>{
    button.addEventListener('mouseover',darkerFunction);
    button.addEventListener('mouseout',originalFunction);
    button.addEventListener('mousedown',clickColorFunction);
    button.addEventListener('mouseup',originalFunction);
    button.addEventListener('click',operator);
})
function clearStuff(e){
    objectThatACalculatorMightNeed.number=0;
    objectThatACalculatorMightNeed.number2=0;
    objectThatACalculatorMightNeed.isFuncApplied=false;
    objectThatACalculatorMightNeed.evaluted=false;
    objectThatACalculatorMightNeed.result=undefined;
    objectThatACalculatorMightNeed.operator=undefined;
    objectThatACalculatorMightNeed.floatActivated=false;
    objectThatACalculatorMightNeed.floatcounter=0;
    display(0)
}
let execute_button= document.querySelector('.executeButton');
execute_button.addEventListener('mouseover',darkerNumber);
execute_button.addEventListener('mouseout',originalNumber);
execute_button.addEventListener('click',execute);
execute_button.addEventListener('mousedown',clickColorNumber);
execute_button.addEventListener('mouseup',originalNumber);
let clearButton=document.querySelector('.C');
clearButton.addEventListener('click',clearStuff);
clearButton.addEventListener('mouseover',greyButtonDarken);
clearButton.addEventListener('mouseout',greyButtonOriginal);
clearButton.addEventListener('mousedown',darkGreyButton);
clearButton.addEventListener('mouseup',greyButtonDarken);
let clearEntryButton=document.querySelector('.CE');
clearEntryButton.addEventListener('click',clearEntry)
clearEntryButton.addEventListener('mouseover',greyButtonDarken);
clearEntryButton.addEventListener('mouseout',greyButtonOriginal);
clearEntryButton.addEventListener('mousedown',darkGreyButton);
clearEntryButton.addEventListener('mouseup',greyButtonDarken);
let floatButton = document.querySelector('.floatButton');
floatButton.addEventListener('mouseover',darkerNumber);
floatButton.addEventListener('mouseout',originalNumber);
floatButton.addEventListener('mousedown',clickColorNumber);
floatButton.addEventListener('mouseup',originalNumber);
floatButton.addEventListener('click',floatEnabled);
window.addEventListener('keydown',calcKeyboard);
window.addEventListener('keyup',returnToOriginalButton);