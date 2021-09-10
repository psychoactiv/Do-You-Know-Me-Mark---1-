// 
var userInfo = require("readline-sync");
var userName = userInfo.question("What's your name ? \n");
console.log("Welcome "+userName+", let's see how much do you know about me ");

var knownArr =[{
  question : "Who is my favorite superhero ? \n",
  answer : "Deadpool",
},
{
  question : "Which is my favorite  song ? \n",
  answer : "Duniya",
},
{
  question: "Whom do i love the most ? \n",
  answer: "My mom",
},
{
  question: "Which type of place do i love to hangout ? \n",
  answer: "Nature",
},
{
  question: "Where do i live ? \n",
  answer: "Mumbai",
},
{
  question: "When do i love to code? \n",
  answer: "Night"
}

]

var highest = [{name: "Aman",
score:5,},
{name : "prit",
score: 3},];

var pointsTable = 0; 
var checkPoint = 0;


function game(question, answer){
  var userAnswer = userInfo.question(question + "# First letter of your answer should be capital \n# Please type 'Restart' if you want to restart the game \n" );
  
  if(userAnswer === answer){ 
    console.log("You've Won!!");
    pointsTable ++
  }
  else if(userAnswer === "Restart"){
    pointsTable = 0;
    checkPoint = 1;
    for(i=0; i<knownArr.length ;i++){
      console.log("\n");
    game( knownArr[i].question , knownArr[i].answer);
     }
     
  }
  else{
    console.log("You've lost sorry")
  }
  console.log("Your point is: "+pointsTable); 
  
}
for(i=0; i<knownArr.length ;i++){
  if(checkPoint===1) break;
  console.log("\n");
  game( knownArr[i].question , knownArr[i].answer);
}
console.log("Your final score is:-" + pointsTable + "\n");

var nam = userName;
var marks = pointsTable;

for(i=0; i<highest.length; i++){
  if(highest[i].score < pointsTable){
     highest.push({ name : userName, score : pointsTable  })
     break;
  }

}

for(i=0;i<highest.length;i++){
  console.log("Highscores are:- "+highest[i].name+" : "+highest[i].score);
}

