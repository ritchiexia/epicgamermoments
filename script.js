document.body.onkeyup = function(e) {
    if (e.code == "Space") {
      document.body.classList.toggle("dark");
    }
  }