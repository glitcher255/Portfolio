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
     <div id="div20" class="nav_btns" style="outline: unset;">More</div> 
        <a href="../about/about.html" id="div21" class="nav_btns" style="outline: unset;">About</a>
    </div>
</div>
`

document.getElementById("div2").innerHTML = nav


//keys for finding keys, values for values and enteries for both
let searchables = {
    1: ["./about3_COMPLETE/about.html", "oh my god is this a search?"],
    2: "WTF",
    3: ["./something", "Portfolio"],
    4: ["./wow", "wow man this is amazing"]
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

//Show and hide a_container (dropdown)
document.getElementById("INPUT17").addEventListener("focus", function() {
    document.getElementsByClassName("a_container")[0].style.display = "flex"
})

document.getElementById("INPUT17").addEventListener("blur", function() {
    document.getElementsByClassName("a_container")[0].style.display = "none"
})