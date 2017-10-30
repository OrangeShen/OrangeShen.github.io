'use strict'

var correct = 0;
var answer = "";

var QA = {
    "what's the name of apple's funder?": "Steve Jobs",
    "what's the capital of zhejiang province?": "hangzhou",
    "what's the capital of US?": "New york",
    "which city held the 29th Olympic games?": "Beijing"
};

for(var item in QA){
    answer = prompt(item);
    if (answer.toLowerCase() == QA[item].toLowerCase()) {
        correct++;
    }
}


alert("you anwsered " + correct + " questions right");
