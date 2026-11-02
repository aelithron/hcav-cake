let hgToggle = false;
function humanGradient() {
  const hg = document.getElementById("human-gradient");
  if (hgToggle) {
    hg.classList.replace("bg-gradient-to-l", "bg-gradient-to-r");
    hgToggle = false;
  } else {
    hg.classList.replace("bg-gradient-to-r", "bg-gradient-to-l");
    hgToggle = true;
  }
}

let neverPlaying = false;
function never() {
  if (neverPlaying) return;
  neverPlaying = true;
  setTimeout(() => {
    neverPlaying = false;
  }, 7000);
  new Audio("assets/never.mp3").play();
}

document.getElementById("human-gradient").addEventListener("click", humanGradient);
document.getElementById("never").addEventListener("click", never);