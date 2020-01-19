function tem(x){
  document.getElementById("res").value+=x
}
function clr(){
  document.getElementById("res").value=""
}
function ans(){
  document.getElementById("res").value=
  eval(document.getElementById("res").value)
}
function bksp(){
  let x=document.getElementById("res")
  x.value=x.value.substring(0,x.value.length-1)
}
