const noBtn = document.getElementById("noBtn");

if(noBtn){
  function moveNo(){
    const x=Math.random()*(window.innerWidth-150);
    const y=Math.random()*(window.innerHeight-100);
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";
  }
  noBtn.addEventListener("mouseover",moveNo);
  noBtn.addEventListener("touchstart",moveNo);
}

function yesClick(){
  document.getElementById("result").style.display="block";
}
