var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  if (currentScrollPos !== 0) {
      document.getElementById("navbar").style.backgroundColor = "rgba(12, 14, 14, 0.672)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(12, 14, 14, 0)";
  }
  prevScrollpos = currentScrollPos;
}