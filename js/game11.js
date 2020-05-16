function AgeInDays(){
    var birthyear =prompt('what year you were born?');
    var ageindays=(2020-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are ' +ageindays +' days old.');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageindays);
}
//challenge 2:cat generator
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-box-gen');
    image.src="images/Cats-Animated-Gifs-4.gif";
    div.appendChild(image);
}
//challenge 3:rock,paper,scissors;
function rpsgame(yourchoice){
   
    var userchoice,botchoice;
    userchoice=yourchoice.id;

    botchoice=numberToChoice(randomRpsInt());
    console.log('computer choice:',botchoice);

    results=decideWinner(userchoice,botchoice);
    console.log(results);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourchoice.id,botchoice,message);
}

//botchoice randomly;
 function randomRpsInt(){
     return Math.floor(Math.random()*3);
 }
 function numberToChoice(number){
     return ['rock','paper','scissors'][number];
 }
 function decideWinner(yourchoice, computerchoice){
  var rpsDatabase={
      'rock':{'scissors':1,'rock':0.5,'paper':0},
      'paper':{'rock':1,'paper':0.5,'scissors':0},
      'scissors':{'paper':1,'scissors':0.5,'rock':0},

  };
  var yourscore=rpsDatabase[yourchoice][computerchoice];
  var computerscore=rpsDatabase[computerchoice][yourchoice];
  return [yourscore,computerscore];
}

function finalMessage([yourscore,computerscore]){
    if(yourscore===0){
        return {'message':'you lost','color':'red'};
    }else if(yourscore===0.5){
     return {'message':'you tied','color':'blue'};
    }else{
    return {'message':'you win','color':'green'};
    }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
   var imagesDatabase={
     'rock': document.getElementById('rock').src,
     'paper': document.getElementById('paper').src,
     'scissors': document.getElementById('scissors').src
   }
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();

   var humandiv=document.createElement('div');
   var msgdiv=document.createElement('div');
   var botdiv=document.createElement('div');
   
   humandiv.innerHTML="<img src='" +imagesDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
   msgdiv.innerHTML="<h2 style='color: " +finalMessage['color']+ "; font-size:60px; padding:20px;'>" + finalMessage['message'] + "</h2>"
   botdiv.innerHTML="<img src='" +imagesDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

   document.getElementById('flex-box-rps-div').appendChild(humandiv); 
   document.getElementById('flex-box-rps-div').appendChild(msgdiv); 
   document.getElementById('flex-box-rps-div').appendChild(botdiv); 
}
//challenge-4: change the color of all buttons;
var all_buttons = document.getElementsByTagName('button');

var copyallbuttons=[];
for(let i=0;i<all_buttons.length;i++){
copyallbuttons.push(all_buttons[i].classList[1]);
}


function buttonColorChange(buttonthingy){
    if(buttonthingy.value === 'red'){
     buttonRed();
    }else if(buttonthingy.value === 'green'){
     buttonGreen();
    }else if(buttonthingy.value === 'random'){
     buttonRandom();
    }else if(buttonthingy.value === 'reset'){
     buttonReset();
    }
}

function buttonRed(){
    for(let i=0;i<all_buttons.length;i++){
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }

}
function randomno(){
    return Math.floor(Math.random()*4);
    
}

function buttonRandom(){
        for(let i=0;i<all_buttons.length;i++){
            var choice=['btn-danger','btn-success','btn-warning','btn-primary'];
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(choice[randomno()]);
        }
    }
    function buttonReset(){
        for(let i=0;i<all_buttons.length;i++){
          all_buttons[i].classList.remove(all_buttons[i].classList[1]);
          all_buttons[i].classList.add(copyallbuttons[i]);
        }
    }

