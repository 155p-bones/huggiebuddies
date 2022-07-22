const form = document.getElementById("form")
const pop = document.getElementById("pop-up")
const body = document.getElementById("body")
form.addEventListener("submit", popup)


function popup() {
    let name = document.getElementById("name").value
    let subject = document.getElementById("subject").value
    let x = document.getElementById("navbarlinks");
    x.style.display = "none"
    document.getElementById("display-name").innerHTML = name
    document.getElementById("display-subject").innerHTML = subject
    body.style.filter = "blur(8px)"
    pop.style.top = "30%"
    pop.style.left = "25%"
    pop.style.right = "25%"
    pop.style.transform = "scale(1)"
    pop.style.transition = "all 0.3s ease 0.3s"
}