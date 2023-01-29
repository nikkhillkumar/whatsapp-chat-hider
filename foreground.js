let fakeImages;

function hide() {
  fakeImages = document.querySelectorAll("._13jwn, ._3g4Pn, ._21S-L, ._2KKXC, ._2rlF7, ._27K43, .ItfyB");
  fakeImages.forEach(image => image.style.filter = "blur(5px)");
}

document.addEventListener("click", hide);

document.addEventListener("keydown", function(event) {
  if (event.code === "Escape") {
    fakeImages.forEach(image => image.style.filter = "initial");
  }
});
