let count = 1

function show(n) {
    let current_display = document.getElementsByClassName("display-content")
    let current_button = document.getElementsByClassName("button")
    count = n
    current_display[n].style.display = "block"
    current_button[n].style.backgroundColor = "gray"
    for (let index = 0; index < n; index++) {
        current_display[index].style.display = "none";
        current_button[index].style.backgroundColor = "whitesmoke"
    }
    for (let index = n + 1; index < current_display.length; index++) {
        current_display[index].style.display = "none";
        current_button[index].style.backgroundColor = "whitesmoke"
    }
}
function toggle(n) {
    let current_display = document.getElementsByClassName("display-content")
    let current_button = document.getElementsByClassName("button")
    count += n
    if (count > 2) {
        count = 0
    }
    else if (count < 0){
        count = 2
    }
    current_display[count].style.display = "block"
    current_button[count].style.backgroundColor = "gray"
    for (let index = 0; index < count; index++) {
        current_display[index].style.display = "none";
        current_button[index].style.backgroundColor = "whitesmoke"
    }
    for (let index = count + 1; index < current_display.length; index++) {
        current_display[index].style.display = "none";
        current_button[index].style.backgroundColor = "whitesmoke"
    }

}