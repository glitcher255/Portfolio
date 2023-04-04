let z = 0
let y = 93
let cancel_interval = false

//Auto rotates to 90 +- 3 ish degrees because of prespective being global
let myInterval = setInterval(wait, 100)
function wait () {
    if (cancel_interval === false) {
        console.log(cancel_interval)
    document.getElementsByClassName("div502")[z].style.transform = "rotateY(" + y + "deg)"
    y -= 3.2
    document.getElementsByClassName("div502")[z].style.visibility = "visible"
    document.getElementsByClassName("div502")[z].style.animationPlayState = "running"
    z += 1
    if (z === 3) {
        clearInterval(myInterval);
        setTimeout(interval_over, 500)
    }
}
}

//reset rotate to 0 after finish - because of wait() func
function interval_over () {
for (let z = 0; z < document.getElementsByClassName("div502").length; z++) {
    document.getElementsByClassName("div502")[z].style.transform = "rotateY(" + "0deg" + ")"
}
}

//Resets rotate to 0 on hover - because of wait() func
for (let x = 0; x < document.getElementsByClassName("div502").length; x++) {
    document.getElementsByClassName("div502")[x].addEventListener("mouseover", function() {
        document.getElementsByClassName("div502")[x].style.transform = "rotateY(" + "0deg" + ")"
    })
}

const fade_animation = [
    {},
    {opacity: "0"},
]

const fade_timing = {
    duration: 200,
    interation: 1,
}

// const fade_animated = document.querySelector
document.getElementById("div16").addEventListener('click', function () {
    for (let x = 0; x < document.getElementsByClassName("div502").length; x++) {
    document.getElementsByClassName("div502")[x].animate(fade_animation, fade_timing)
}})
