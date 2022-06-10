// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
   }
   function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
  }
  
  function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
  }
  
  function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
  }
  
  function appendCat(name){
    var name_1= [...cats,name];
    return name_1;
  }
  
  function prependCat(name){
    var name2=[name, ...cats];
    return name2;
  }
  
  function removeLastCat(){
    var cats2= cats.slice(0,cats.length-1);
    return cats2;
  }
  
  function removeFirstCat(){
    var cats2= cats.slice(1)
    return cats2;
  }