var box = document.getElementsByClassName("box");
function redify(){
  for (x=0; x<box.length; x++){
    box[x].classList.add("red")
  }
}
function clearOut(){
  for (x=0; x<box.length; x++){
    box[x].classList.remove("red")
  }
}
for (i=0; i < box.length; i++){
  box[i].addEventListener("mouseenter", redify);
  box[i].addEventListener("mouseout", clearOut);
};
box[0].addEventListener("click", function(){
  document.getElementById("update").innerHTML = "Oooh - so close, but no cigar"
});
box[1].addEventListener("click", function(){
  document.getElementById("update").innerHTML = "DING DING DING - We have a winner"
});
box[2].addEventListener("click", function(){
  document.getElementById("update").innerHTML = "Oops, butter luck next time"
});
