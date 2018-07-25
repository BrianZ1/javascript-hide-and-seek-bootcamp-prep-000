function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var nested = document.getElementsByClassName('nested');
  console.log(nested);
  var target = nested.getElementById('target');
  return target;
}