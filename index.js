function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list');
  
  for(let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild(){
  var list = document.querySelectorAll('div#grand-node');
 
  while(list){
    list = list.querySelectorAll('div');
  }
  
  return list.innerHTML;
}