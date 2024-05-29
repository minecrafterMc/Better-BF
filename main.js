var BFCode = "";
var BFArr = [];
var p = 0;
var comP = 0;
var data = [0];
var tempVal = 0;
var loops = [];
var input = "";
var inputArr = [];
var iindex = 0;
var steps = 0;
var looped = 0;
var maxLooped = 40;
var output = document.getElementById("output");
var ascii = [""," ","<br>","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","y","z","0","1","2","3","4","5","6","7","8","9","+","-","<",">","[","]",".",",","#","$","@",":","~"];
var ignore = false;
function getIndexByValuee(array,value){
  let i = 0;
  while (i != array.length){
    if (array[i] === value){
      return i;
    }
    i++;
  }
}
var commands = {
  ">":function(){
  p++;
  if (data[p] == undefined){
    data[p] = 0;
  }
},
  "<":function(){
    if (p != 0)
    {
      p--;
    }
  },
  "+":function(){
      data[p]++;
  },
  "-":function(){
    if(data[p] == 0){
      data[p] = ascii.length - 1;
    }
    else{
      data[p]--;
    }
  },
  ".":function(){
    if (ascii.length > data[p])
    {
    output.innerHTML += ascii[data[p]];
    }
  },
  "[":function(){
    if (data[p] == 0){
      ignore = true;
    }
    else{
      loops[loops.length] = comP;
    }
  },
  "]":function(){
    if (loops.length != 0)
    {
    if (data[p] != 0){
      comP = loops[loops.length - 1];
    }
    else{
      loops.splice(loops.length - 1,1);
    }
    }
    else{
      console.error("missing '['; At char " + comP+ " on step: "+steps);
    }
    ignore = false;
  },
  ",":function(){
    let place = getIndexByValuee(ascii,inputArr[iindex]);
    if (place != -1){
      data[p] = place;
    }
    iindex++;
  },
  "~":function(){
    console.log(data);
  },
  "#":function(){
    tempVal = data[p];
  },
  "$":function(){
    data[p] = tempVal;
  },
  ":":function(){
    output.innerHTML += data[p];
  },
  "@":function(){
    data[p]++;
    if (data[p] == ascii.length)
    {
      data[p] = 0;
    }
  },
  ";":function(){
    
  },
  "!":function(){
    output.innerHTML = "output: ";
  },
  "*":function(){
    data[p] = inputArr.length - 1;
  },
  "^":function(){
    console.log("pointer: " + p + " command pointer: " + comP);
  }
}
function setup(){
  BFCode = document.getElementById("code").value;
  input = document.getElementById("input").value;
  inputArr = input.split("");
  BFArr = BFCode.split("");
}
function step(){
  if (comP >= BFArr.length || comP == 0)
  {
    //resetC();
  }
  steps++;
  if (commands[BFArr[p]] != undefined)
  {
  if (!ignore || BFArr[comP] == "]"){
    commands[BFArr[comP]]();
  }
  }
  comP++;
}
function aStep(){
  input = document.getElementById("input").value;
inputArr = input.split("");
iindex = 0;
  if (comP >= BFArr.length || comP == 0)
{
  resetC();
}
while (BFArr[comP] != ";" && comP != BFArr.length){
  step();
}
step();

}
function compile(){
  resetC()
  while (comP != BFArr.length){
    step()
  }
}

function resetC(){
  BFCode = document.getElementById("code").value;
comP = 0;
data = [0];
p = 0;
tempVal = 0;
BFArr = [];
input = "";
output.innerHTML = "output: ";
loops = [];
inputArr = [];
iindex = 0;
steps = 0;
ignore = false;
setup();
}