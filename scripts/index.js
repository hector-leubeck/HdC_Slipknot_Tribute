window.addEventListener("load", function () {
  const act = document.getElementsByClassName("collapsible-btn");

  for (i = 0; i < act.length; i++) {
    act[i].addEventListener("click", function () {
      this.classList.toggle("active");

      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});
