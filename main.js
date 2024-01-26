const display = document.getElementById("answer");

function calculate(){
    answer.value += Input;
    try{
        display.value = eval(answer.value);
    }
    catch(error){
        answer.value = "This is not the path.";
    }
}

/*let theQuestion = prompt("Enter a number into le calculator");

answer = window.prompt("Is this a question?");
console.log(theAnswer)*/