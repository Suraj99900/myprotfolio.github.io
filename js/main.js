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


// =================== slider images

let left_chng = document.querySelector(".banner-left");
let right_chng = document.querySelector(".banner-right");
let banner_img = document.getElementById("banner_img");

let anim = document.querySelector(".caption-box");

var myImages = [
    "img/1_.jpg",
    "img/2_.jpg",
    "img/3_.jpg",
    "img/gallery_4.jpg",
];

var number = 0;

function changeImgRight() {
    add_Anim();
    switch (number) {
        case 0:
            banner_img.src = myImages[number];
            number++;
            break;
        case 1:
            banner_img.src = myImages[number];
            
            number++;
            break;
        case 2:
            banner_img.src = myImages[number];
           
            number++;
            break;
        case 3:
            banner_img.src = myImages[number];
           
            number++;
            break;
        default:
            number = 0;
            banner_img.src = myImages[number];
            break;
    }
}


function changeImgLeft() {
    add_Anim();
    switch (number) {
        case 0:
            banner_img.src = myImages[number];
            number--;
            break;
        case 1:
            banner_img.src = myImages[number];
           
            number--;
            break;
        case 2:
            banner_img.src = myImages[number];
            
            number--;
            break;
        case 3:
            banner_img.src = myImages[number];
            
            number--;
            break;
        default:
            number = 3;
            banner_img.src = myImages[number];
            break;
    }

}

function add_Anim(){
    anim.classList.add("anim");
}

function remove_Anim(){
    anim.classList.remove("anim");
}

setInterval(() => {
    remove_Anim();
}, 1000);

setInterval(() => {
    changeImgRight()
}, 2500);

left_chng.addEventListener('click', changeImgLeft);

right_chng.addEventListener('click', changeImgRight);



// ==================== gallery
const gallery = document.querySelectorAll(".collection__gallery .gallery-box"),
    previewBox = document.querySelector(".preview-box");

let prev_src = document.getElementById("prev_src");

let cancel_box = document.querySelector(".cancel-box");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        console.log(gallery[i].querySelector("img").src);
        gallery[i].onclick = () => {
            prev_src.src = gallery[i].querySelector("img").src;
            previewBox.classList.add("show");

            cancel_box.onclick = () => {
                previewBox.classList.remove("show");
            }
        }
    }
}
