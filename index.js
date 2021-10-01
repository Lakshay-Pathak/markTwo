var input = require("readline-sync");
var score = 0;

var questions=[
  {
    "question":"Which among the following states of India is also known as Dev Bhoomi?\n",
    "options":["Uttar Pradesh","Uttarakhand","Rajasthan","Kerala"],
    "answer":"Uttarakhand",
    "answerInArray":2
    },
  {
      "question":"Cooch Behar in West Bengal is famous for which among the following industries?\n",
    "options":["Cotton Cloth Industry","Silk Industry","Petroleum Industry","Glass Industry"],
    "answer":"Silk Industry",
    "answerInArray":2

  },
  {
      "question":"Which of the following countries has world’s 25% Thorium reserves (maximum)?\n",
    "options":["India","China","Usa","Russia"],
    "answer":"India",
    "answerInArray":1

  },
  {
      "question":"Indravati Hydro Electric Project belongs to which state?\n",
    "options":["Tamil Nadu","Uttarakhand","Orissa","Kerala"],
    "answer":"Orissa",
    "answerInArray":3

  },
  {
      "question":"India shares land borders with how many countries?\n",
    "options":["Six","Seven","Eight","Nine"],
    "answer":"Seven",
    "answerInArray":2
      
    }];


    function start(){
var name= input.question("What's your name? \n");
console.log("\nWelcome "+name+" to How well do you know Indian Geography? \n \n");
}

function go(){
for(var i=0;i<questions.length;i++){
 game(questions[i].question, questions[i].answer,questions[i].options);
}}


function game(questions,answer,options){
var userAnswer=input.question("Q.no.1:"+questions+"options: "+options+"\nAns: ");
if (userAnswer.toLowerCase()==answer.toLowerCase()){
    score++;
    console.log("Your answer is Correct!");
    }
else{
 console.log("Your answer is wrong!"+"\n");
  console.log("Correct answer is "+answer);
    }

console.log("Current score is => "+score+"\n");
}


start();
go();