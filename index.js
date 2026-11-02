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

function never() {
  const play = document.createElement("iframe");
  play.src = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=uNPY1XsvgaKAyoZf&controls=0&autoplay=1&mute=1";
  play.width = 560;
  play.height = 315;
  play.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  play.referrerpolicy = "strict-origin-when-cross-origin";
  play.allowfullscreen = true;
  document.getElementById("never-playfield").appendChild(play);
}

document.getElementById("human-gradient").addEventListener("click", humanGradient);
document.getElementById("never").addEventListener("click", never);