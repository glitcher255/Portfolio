let nav = `
<a href="../home/home.html" id="div16" style="outline: unset;">
<img id="IMG23" src="https://i.postimg.cc/5NgvdLRv/Untitled-2.png"
        style="outline: unset;"></a>
</a>
<div id="div22" style="outline: unset;">
<div class="input_container">

<input id="INPUT17" placeholder="Search..." >
<div class="a_container"> </div>
</div>
        
    <div id="div18" style="outline: unset;">
    <!--  <div id="div19" class="nav_btns" style="outline: unset;">Something</div> -->
     <a href="../more/index.html" id="div20" class="nav_btns" style="outline: unset;">More</a> 
        <a href="../about/about.html" id="div21" class="nav_btns" style="outline: unset;">About</a>
    </div>
</div>
`

document.getElementById("div2").innerHTML = nav


//keys for finding keys, values for values and enteries for both
let searchables = {
    1: ["../about/about.html", "about"],
    3: ["../port/port.html", "portfolio"],
    4: ["../learn/learn.html", "learn"],
    5: ["../more/index.html", "more"],
}

//Create a element from searchable arary
for (let x = 0; x < Object.entries(searchables).length; x++) {
    let ele = document.createElement('a')
    ele.href = Object.entries(searchables)[x][1][0]
    ele.innerHTML = Object.entries(searchables)[x][1][1]
    document.getElementsByClassName("a_container")[0].appendChild(ele)
    ele.className = "a_dropdowns"
}


//Searching
let dropdown_count = document.getElementsByClassName("a_dropdowns").length
document.getElementById("INPUT17").addEventListener("keyup", function() {
    for (let x = 0; x < dropdown_count; x++) {
        console.log("clicks galore")
        if (document.getElementsByClassName("a_dropdowns")[x].textContent.indexOf(document.getElementById("INPUT17").value))
        {
            document.getElementsByClassName("a_dropdowns")[x].style.display = "none"
        }
        else {
            document.getElementsByClassName("a_dropdowns")[x].style.display = ""
        }
    }
})

let dontrun = true
//Show and hide a_container (dropdown)
document.getElementById("INPUT17").addEventListener("focus", function() {
    document.getElementsByClassName("a_container")[0].style.display = "flex"
})
// document.getElementById("INPUT17").addEventListener("blur", function() {
//     setTimeout(() => {
//         document.getElementsByClassName("a_container")[0].style.display = "none"
//     }, 110);
// })
document.addEventListener("click", function() {
    console.log(event.target)
    if (event.target != document.getElementById("INPUT17")) {
    document.getElementsByClassName("a_container")[0].style.display = "none"
    }

})