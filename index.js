const chalk = require('chalk');
var readlineSync = require('readline-sync');
var userName = readlineSync.question('Enter your name? ');
console.log(chalk.bold.rgb(10, 100, 200)('Hi ' + userName + '!!'));
console.log(chalk.bgBlue.white("Welcome to quiz: Do you know Prachi"));

var score = 0;

function play(Que,Ans){
  var userans = readlineSync.question(Que)
  if(userans.toUpperCase() == Ans.toUpperCase()){
    score = score + 1;
    console.log(chalk.green("Hurray!! Right"))
  }
  else{
    console.log(chalk.bold.red("Oops!!Wrong ans"))
  }
  console.log("current score:", score)

}

function db(name,result){
  if(score == result){
    console.log("You have beaten", name)
  }
}

//array of object
var quiz = [
  {Que:"My favourite colour \n",
  Ans:"Blue"},
  {Que:"My favourite passtime \n",
  Ans:"painting"},
  {Que:"My favourite hero \n",
  Ans:"Hritik"},
  {Que:"Where do I live \n",
  Ans:"wani"},
  {Que:"Where do i work \n",
  Ans:"cognizant"}
];


var data = [
  {name:"The Best",
  result:5
  },
  {name:"Master",
  result:4
  }
]


//accessing array elements using for loop and calling it through function
for (var i=0;i < quiz.length;i++){
  var currentque = quiz[i];
  play(currentque.Que,currentque.Ans)
}


for (var j=0; j < data.length; j++){
  var currentdata = data[j];
  db(currentdata.name,currentdata.result)
}

console.log(chalk.bold.rgb(10, 100, 200)("send me your screenshot if you have scored 5/5"))
