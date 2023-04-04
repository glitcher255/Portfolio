const fade_animation = [
    {opacity: "1"},
    {opacity: "0"},
]

const fade_animation_timer = {
    duration: 500,
    interation: 1,
}


//meant for fade out on click, but transfers happen too quick
for (let x = 0; x < document.getElementsByClassName("div7").length; x++) {
    document.getElementsByClassName("div7")[x].addEventListener("click", function() {
        for (let x = 0; x < document.getElementsByClassName("div7").length; x++) {
        document.getElementsByClassName("div7")[x].animate(fade_animation, fade_animation_timer)
        }
    })
}