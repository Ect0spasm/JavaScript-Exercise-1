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

function press(board) { 
    if (press.key == '0' || press.key == '1' 
        || press.key == '2' || press.key == '3' 
        || press.key == '4' || press.key == '5' 
        || press.key == '6' || press.key == '7' 
        || press.key == '8' || press.key == '9' 
        || press.key == '+' || press.key == '-' 
        || press.key == '*' || press.key == '/') 
        document.getElementById("result").value += press.key; 
} 

/*let theQuestion = prompt("Enter a number into le calculator");

answer = window.prompt("Is this a question?");
console.log(theAnswer)*/