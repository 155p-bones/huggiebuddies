function display_menu() {
    let x = document.getElementById("navbarlinks");
    if (x.style.transform !== "translateX(80%)") {
      x.style.transform = "translateX(80%)"
      x.style.transition = "all 0.3s ease 0.3s"
    } else if (x.style.transform === "translateX(80%)"){
      x.style.transform = "translateX(300%)"
      x.style.transition = "all 0.3s ease 0.3s"
    }
  }
   