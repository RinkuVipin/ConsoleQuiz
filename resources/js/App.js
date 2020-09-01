(function() {
    
var questionBank = {
    question: function (qNo, i) {

        switch (qNo) {
            case 0:
                console.log('Q'+i+'. Inside which HTML element do we put the JavaScript?');
                console.log(' 1. <scripting> \n 2. <script> \n 3. <javascript> \n 4. <js>');
                break;

            case 1:
                console.log('Q'+i+'. Where is the correct place to insert a JavaScript?');
                console.log(' 1. <body> \n 2. <head> \n 3. Both <head> and <body> is correct \n 4. None of the above');
                break;

            case 2:
                console.log('Q'+i+'. What is the correct syntax for referring to an external script called "abc.js"?');
                console.log(' 1. <script src="abc.js"> \n 2. <script href="sbc.js"> \n 3. <script name="abc.js"> \n 4. None of the above');
                break;
            case 3:
                console.log('Q'+i+'. How do you create a function in JavaScript?');
                console.log(' 1. function = myFunction() \n 2. function:myFunction() \n 3. function myFunction()');
                break;
            case 4:
                console.log('Q'+i+'. The external JavaScript file must contain the <script> tag.');
                console.log(' 1. True \n 2. False');
                break;
        }

    }

}

function jsQuiz() {
    var i, qNo, ansKey, totalPoints;
    i = 1;
    totalPoints=0;
    
    while (i !== 0) {
        qNo = Math.floor(Math.random() * 5);
        questionBank.question(qNo,i);
        ansKey = prompt("Please Enter your Answer");
        if (ansKey !== 'exit') {
            totalPoints += ansCheck(qNo, ansKey);
            console.log('Total Score : '+totalPoints);
            console.log('--------------------------------------------------');
            i++;
        }
        else{
            i=0;
        } 
    }
}

function ansCheck(qNo, ansKey) {
    var answers = [2, 3, 1, 3, 2];
    if (answers[qNo] == ansKey) {
        console.log('Correct Answer !!');
        return 1;
    } else {
        console.log('Incorrect Answer. Try again.');
        return 0;
    }

}

jsQuiz();
    
})();
