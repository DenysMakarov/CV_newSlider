let slides = Array.from(document.getElementsByClassName("change_line"))
let btnChangeSlide = document.getElementById("btn_chahge");

let classAdd;
let current = 1;
let x=0;

let arrLine = Array.from(document.getElementsByClassName("change_line"));
let arrLineFirstBg1 = Array.from(document.getElementsByClassName("change_line_bg_2"));
let arrLineFirstBg2 = Array.from(document.getElementsByClassName("change_line_bg_1"));
let arrLineFirstBg3 = Array.from(document.getElementsByClassName("change_line_bg_3"));
let change_line_cover = Array.from(document.getElementsByClassName("change_line_cover"));



for(i=0; i < arrLineFirstBg1.length; i++){
    arrLineFirstBg1[i].style.backgroundPositionX = x + "%";
    arrLineFirstBg2[i].style.backgroundPositionX = x + "%";
    arrLineFirstBg3[i].style.backgroundPositionX = x + "%";
    x=x+5;
}

for(i=0; i < change_line_cover.length; i++){
    change_line_cover[i].setAttribute("data-name", i);
    
    change_line_cover[i].addEventListener("click", (e)=>{
        // console.log(e.target.dataset.name)
        chngeOpacity()

        console.log(current)
    })
}

function chngeOpacity() {
    if (current == 0) {
        arrLineFirstBg3.map(el => el.style.opacity = "0");
        arrLineFirstBg2.map(el => el.style.opacity = "0");
        arrLineFirstBg1.map(el => el.style.opacity = "1");
        current = 1
    }
    else if (current == 1) {
        arrLineFirstBg3.map(el => el.style.opacity = "0");
        arrLineFirstBg1.map(el => el.style.opacity = "0");
        arrLineFirstBg2.map(el => el.style.opacity = "1");
        current = 2
    }
    else if (current == 2) {
        arrLineFirstBg2.map(el => el.style.opacity = "0");
        arrLineFirstBg1.map(el => el.style.opacity = "0");
        arrLineFirstBg3.map(el => el.style.opacity = "1");
        current = 0
    }
}























// function setBgPosition() {
//     let arrLine = Array.from(document.getElementsByClassName("change_line"))
//     for (i = 0; i < arrLine.length; i++) {
//         let z = 0;
//         slides[i].style.backgroundImage = "../images/bg_1.jpg";
//         slides[i].style.backgroundPositionX = z + "%";
//         z = z + 5;
//     }
// }
//
// setBgPosition();
//
//
// for (i = 0; i < slides.length; i++) {
//     slides[i].setAttribute("data-name", i);
//
//     slides[i].addEventListener("click", (e) => {
//
//
//         // let countDeleyRight = 0;
//         // let countDeleyLeft = 0;
//         // let z = +((+e.target.dataset.name * 10)/2);
//         // let c = +((+e.target.dataset.name * 10)/2);
//         //
//         // changeNum(current);
//         // // console.log(e.target.dataset.name);
//         // console.log(typeof z);
//         // console.log("Z: " + z);
//         //
//         //
//         // for (j = e.target.dataset.name; j < slides.length; j++) {
//         //     countDeleyLeft = countDeleyLeft + 1;
//         //     slides[j].style.transitionDelay = countDeleyLeft / 9 + "s";
//         //     slides[j].style.backgroundPositionX = z + "%";
//         //     chengeClass();
//         //     z = z+5;
//         //
//         // }
//         // for (j = e.target.dataset.name; j >= 0; j--) {
//         //     countDeleyRight = countDeleyRight + 1;
//         //     slides[j].style.transitionDelay = countDeleyRight / 9 + "s";
//         //     slides[j].style.backgroundPositionX = c + "%";
//         //     chengeClass();
//         //     c = c-5;
//         //
//         // }
//
//     })
// }
//
//
// function chengeClass() {
//     slides[j].classList.remove("change_line_bg_3");
//     slides[j].classList.remove("change_line_bg_2");
//     slides[j].classList.remove("change_line_bg_1");
//     slides[j].classList.add(classAdd);
// }
//
function changeNum() {
    if (current == 2) {
        current = 1
    } else if (current == 1) {
        current = 3
    } else if (current == 3) {

        current = 2
    }
}
//
