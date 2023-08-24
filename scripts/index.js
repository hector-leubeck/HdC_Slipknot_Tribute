window.addEventListener("load", function () {
  const act = document.getElementsByClassName("collapsible-btn");

  for (i = 0; i < act.length; i++) {
    act[i].addEventListener("click", function () {
      const allPanels = document.querySelectorAll(".history-panel");
      allPanels.forEach((panel) => {
        console.log(panel);
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        }
      });
      const allButtons = document.querySelectorAll(".collapsible-btn");
      allButtons.forEach((button) => {
        button.classList.remove("active");
      });
      let panel = this.nextElementSibling;
      let content = panel.nextElementSibling;
      console.log(content);
      this.classList.toggle("active");

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
