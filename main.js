const display = document.getElementById("answer");

function connectAnswer(input){
    answer.value += Input;
}

function calculate(){
    try{
        display.value = eval(answer.value);
    }
    catch(error){
        answer.value = "This is not the path.";
    }
}

function clearDisplay(){
    display.value = "";
}

/*let theQuestion = prompt("Enter a number into le calculator");

answer = window.prompt("Is this a question?");
console.log(theAnswer)*/