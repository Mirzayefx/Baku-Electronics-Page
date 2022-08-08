const navdropdown = document.getElementById("navdropdown")
const navlang = document.getElementById("navlang")
const a = document.getElementById("a")
navdropdown.style.display = "none"

function click_(){
    if( navdropdown.style.display == "block"){
        navdropdown.style.display = "none";
        a.style.transform = 'rotate(0)'
    }
    else{
        navdropdown.style.display = "block";
        a.style.transform = 'rotate(180deg)'
    }
}

const slider = document.getElementById("slider")
let x = 1

show()
setInterval(next,3000)

function next(){
    if(x < 3)x++; else x = 1
    show() 
}
function prev(){
    if(x > 1)x--; else x = 3
    show()
}
function show(){
    slider.style.backgroundImage = "url('image/" + x + ".jpeg')"
}

let input_ = document.getElementById("input_")
let demo1  = document.getElementById("demo1")
let demo2  = document.getElementById("demo2")
let y;

function hesabla(){
    if(input_.value <= 1){
        y = input_.value * 4.9
    }
    else if(input_.value > 1 && input_.value <= 5){
        y = input_.value * 4.5
    }
    else{
        y = input_.value * 4.1
    }
    demo1.innerHTML = y.toFixed(2)
    demo2.innerHTML = (y * 1.7).toFixed(2)
}
