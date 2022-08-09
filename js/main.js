// =============== types
const typed = document.querySelector(".typing");
const string_data = ["Web Developer", "Web Designer", "Programmer"];
let ixd = 1;
let i = 0;

function typeing() {

    typed.innerText = string_data[i].slice(0, ixd);

    ixd++;


    if (ixd > string_data[i].length) {
        i++;
        ixd = 1;
        if (i > 2) {
            i = 0;
        }
    }
}

setInterval(typeing, 150)


// ======================= nav item active

let nav = document.querySelector(".nav");
navlist = nav.querySelectorAll("li");
size_nav = navlist.length;
for (let i = 0; i < size_nav; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < size_nav; j++) {
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        if (window.innerWidth <= 1199) {
            nav_box.style.left = -270 + "px";
            close.style.visibility = "hidden";
            open.style.visibility = "visible";
        }
        
    })
}


//==================== nav changer

let open = document.querySelector(".toggler-open");
let close = document.querySelector(".toggler-close");
let nav_box = document.querySelector(".aside");


function open_nav() {
    nav_box.style.left = 0 + "px";
    close.style.visibility = "visible";
    open.style.visibility = "hidden";
}

function close_nav() {
    nav_box.style.left = -270 + "px";
    close.style.visibility = "hidden";
    open.style.visibility = "visible";
}

open.addEventListener("click", open_nav);
close.addEventListener("click", close_nav);
