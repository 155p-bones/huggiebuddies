// menu display functions
let size = document.getElementsByClassName("sizing")[0]
let menu = document.getElementsByClassName("diet")[0]
let toys = document.getElementsByClassName("toys")[0]

let size_button = document.getElementsByClassName("header-item")[0]
let menu_button = document.getElementsByClassName("header-item")[1]
let toys_button = document.getElementsByClassName("header-item")[2]



function sizing_change() {
    size.style.display = "block"
    menu.style.display = "none"
    toys.style.display = "none"

    size_button.classList.add("clicked")
    menu_button.classList.remove("clicked")
    toys_button.classList.remove("clicked")
}

function menu_change() {
    size.style.display = "none"
    menu.style.display = "block"
    toys.style.display = "none"

    size_button.classList.remove("clicked")
    menu_button.classList.add("clicked")
    toys_button.classList.remove("clicked")
}

function toys_change() {
    size.style.display = "none"
    menu.style.display = "none"
    toys.style.display = "block"

    size_button.classList.remove("clicked")
    menu_button.classList.remove("clicked")
    toys_button.classList.add("clicked")
}



// calculate function

function  calculate() {

    let total = 0

    let size = document.getElementById("size").value
    let small = 45
    let medium = 50
    let large = 55

    let diet = document.getElementById("diet").value
    let standard_diet = 5
    let mixed_diet = 10
    let premium_diet = 15

    let lifestyle = document.getElementById("lifestyle").value
    let standard_life = 0
    let active_life = 10
    let grooming = 20

    let input1 = document.getElementById("check_in_date").value
    let in_date = new Date(input1).getTime()
    let input2 = document.getElementById("check_out_date").value
    let out_date = new Date(input2).getTime()
    let days = (out_date - in_date)/(1000 * 60 * 60 * 24)

    if (size == "small") {
        total += days * small
    }
    else if (size == "medium") {
        total += days * medium
    }
    else {
        total += days * large
    }
    if (diet == "standard") {
        total += days * standard_diet
    }
    else if (diet == "mixed") {
        total += days * mixed_diet
    }
    else {
        total += days * premium_diet
    }
    if (lifestyle == "standard") {
        total +=  standard_life
    }
    else if (lifestyle == "active") {
        total += active_life
    }
    else {
        total += grooming
    }
    if (isNaN(total) == false) {
        document.getElementById("display").innerHTML = "$" + total
    }
}

// flip functions

function visa_flip_back() {
    document.getElementById("visa_front").style.display = "none";
    document.getElementById("visa_back").style.display = "block"
}
function visa_flip_front() {
    document.getElementById("visa_front").style.display = "block";
    document.getElementById("visa_back").style.display = "none"
}
function mastercard_flip_back() {
    document.getElementById("mastercard_front").style.display = "none";
    document.getElementById("mastercard_back").style.display = "block"
}
function mastercard_flip_front() {
    document.getElementById("mastercard_front").style.display = "block";
    document.getElementById("mastercard_back").style.display = "none"
}

// Card change radio functions

function visa() {
    document.getElementById("mastercard").style.display = "none"
    document.getElementById("visa").style.display = "block"
}
function mastercard() {
    document.getElementById("visa").style.display = "none"
    document.getElementById("mastercard").style.display = "block"
}

// display functions

function card_number() {
    document.getElementById("visa_display_card_number").innerHTML = document.getElementById("card_number").value 
    if (document.getElementById("visa_display_card_number").innerHTML == "") {
        document.getElementById("visa_display_card_number").innerHTML = "xxxx-xxxx-xxxx-xxxx"
    }
    document.getElementById("mastercard_display_card_number").innerHTML = document.getElementById("card_number").value 
    if (document.getElementById("mastercard_display_card_number").innerHTML == "") {
        document.getElementById("mastercard_display_card_number").innerHTML = "xxxx-xxxx-xxxx-xxxx"
    }
}
function card_holder() {
    document.getElementById("visa_display_card_holder").innerHTML = document.getElementById("card_holder").value
    if (document.getElementById("visa_display_card_holder").innerHTML == "") {
        document.getElementById("visa_display_card_holder").innerHTML = "James smith"  
    }
    document.getElementById("mastercard_display_card_holder").innerHTML = document.getElementById("card_holder").value
    if (document.getElementById("mastercard_display_card_holder").innerHTML == "") {
        document.getElementById("mastercard_display_card_holder").innerHTML = "James smith"
    }
}
function months() {
    document.getElementById("mastercard_display_months").innerHTML = document.getElementById("months").value
    document.getElementById("visa_display_months").innerHTML = document.getElementById("months").value
}
function years() {
    document.getElementById("mastercard_display_years").innerHTML = document.getElementById("years").value
    document.getElementById("visa_display_years").innerHTML = document.getElementById("years").value
}
function cvv() {
    document.getElementById("mastercard_display_cvv").innerHTML = document.getElementById("cvv").value
    document.getElementById("visa_display_cvv").innerHTML = document.getElementById("cvv").value
}
// validation
function validation() {
    let card_number = document.getElementById("card_number").value 
    let card_holder = document.getElementById("card_holder").value
    let card_cvv = document.getElementById("cvv").value
    let valid = 0
    if (card_number.length === 16) {
        valid += 1
    }
    if (card_holder != "" && isNaN(card_holder) === true) {
        valid += 1
    }
    if (isNaN(card_cvv) === false )  {
        valid += 1
    }
    if (valid === 3) {
        window.location = "thankyou.html"
    } else {
        alert("Error, invalid card details")
    }
}
