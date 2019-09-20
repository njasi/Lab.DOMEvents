function mouseup(){
  document.removeEventListener("mousemove",mouseup);
  document.removeEventListener("mousemove",mousemove);
}
function mousedown(){
  document.addEventListener("mouseup",mouseup);
  document.addEventListener("mousemove",mousemove);
}
function mousemove(event){
  event.target.style.top = + event.clientY - 50 + "px";
  event.target.style.left = + event.clientX - 50 + "px";
}

document.addEventListener("mousedown",mousedown);

