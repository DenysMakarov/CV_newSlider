import {Build} from "./modules/Build";

let build = new Build();
let forThird = 0;

function firstSlide() {
    build.createFirstSlider();

    let arrSliderLines = Array.from(document.getElementsByClassName("slider_lines"));
    let arrSliderLinesBox = Array.from(document.getElementsByClassName("slider_lines_box"));
    let sliderCover = document.getElementById("slider_cover");
    let sliderBG = document.getElementById("slider_background");


    let countR = 2;
    let countL = 2;

    function moveBg(arrSlides) {
        let x = -100;
        for (let i = 1; i < arrSlides.length; i++) {
            arrSlides[i].setAttribute("data-name", i);
            arrSlides[i].style.backgroundPositionX = x + "%";
            x = x + 5.26;
        }
    }

    function changeSlide(firstValue, secondValue, bg, countR, countL, countSetTime) {

        for (let i = firstValue; i < arrSliderLines.length; i++) {
            arrSliderLines[i].style.transitionDelay = countR / 5 + "s";
            arrSliderLines[i].style.animationDelay = countR / 5 + "s";
            arrSliderLines[i].style.animationName = "coverLineRight";
            arrSliderLines[i].style.backgroundImage = bg;

            setTimeout(function () {
                arrSliderLines[i].style.animationName = "clear";
            }, countSetTime)

            countR = countR + 1;
        }

        for (let j = secondValue; j >= 0; j--) {
            arrSliderLines[j].style.transitionDelay = countL / 5 + "s";
            arrSliderLines[j].style.animationDelay = countL / 5 + "s";
            arrSliderLines[j].style.animationName = "coverLineLeft";
            arrSliderLines[j].style.backgroundImage = bg;

            countL = countL + 1;

            setTimeout(function () {
                arrSliderLines[j].style.animationName = "clear";
            }, countSetTime)
        }

        sliderCover.style.zIndex = 1000;

        setTimeout(function () {
            sliderCover.style.zIndex = 10;
            sliderBG.style.backgroundImage = bg;
        }, 4500)
    }

    function touchSlide() {
        let count = 1;
        let bg;
        moveBg(arrSliderLines);
        changeSlide(10, 9, "url('images/bg_33.jpg')", countR, countL, 3500)

        for (let i = 0; i < arrSliderLines.length; i++) {

            arrSliderLines[i].addEventListener("click", (e) => {
                let countR = 2;
                let countL = 2;

                console.log(e.target.dataset.name);
                if (count == 1) {
                    count = 2;
                    bg = "url('images/bg_11.jpg')";
                } else if (count == 2) {
                    count = 3;
                    bg = "url('images/bg_22.jpg')";
                } else if (count == 3) {
                    count = 1;
                    bg = "url('images/bg_33.jpg')";
                }
                changeSlide(e.target.dataset.name, e.target.dataset.name - 1, bg, countR, countL, 4500)
            })
        }
    }

    touchSlide();
}

function secondSlide() {
    //////  mix function
    function mixSquare(mixedCard) {
        let mixArr = [...arrSquare];

        function funMix(a, b) {
            return Math.random() - 0.5;
        }

        mixSquare = mixedCard.sort(funMix)
    }

/////

    build.createSecondSlider();
    let arrSquare = Array.from(document.getElementsByClassName("slider_2_lines_square"));
    let arrSquareWrap = Array.from(document.getElementsByClassName("slider_2_lines_square_wrap"));
    let btnChange = document.getElementById("btn_change");

    mixSquare(arrSquare);


    for (let i = 0; i < arrSquareWrap.length; i++) {
        arrSquare[i].setAttribute("data-id", i);
    }


    function setPositionBGForSquareAndWrap(arrClass) {
        let arrSlidesSquare0 = Array.from(document.getElementsByClassName(arrClass + "_0"));
        let arrSlidesSquare1 = Array.from(document.getElementsByClassName(arrClass + "_1"));
        let arrSlidesSquare2 = Array.from(document.getElementsByClassName(arrClass + "_2"));
        let arrSlidesSquare3 = Array.from(document.getElementsByClassName(arrClass + "_3"));
        let arrSlidesSquare4 = Array.from(document.getElementsByClassName(arrClass + "_4"));
        let arrSlidesSquare5 = Array.from(document.getElementsByClassName(arrClass + "_5"));
        let arrSlidesSquare6 = Array.from(document.getElementsByClassName(arrClass + "_6"));
        let arrSlidesSquare7 = Array.from(document.getElementsByClassName(arrClass + "_7"));
        let arrSlidesSquare8 = Array.from(document.getElementsByClassName(arrClass + "_8"));
        let arrSlidesSquare9 = Array.from(document.getElementsByClassName(arrClass + "_9"));


        let x = -100;
        for (let i = 1; i < arrSlidesSquare0.length; i++) {
            arrSlidesSquare0[i].setAttribute("data-name", i);

            arrSlidesSquare0[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare1[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare2[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare3[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare4[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare5[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare6[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare7[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare8[i].style.backgroundPositionX = x + "%";
            arrSlidesSquare9[i].style.backgroundPositionX = x + "%";

            x = x + 5.1;
        }
        // let y = Number(11.26);
        for (let j = 0; j < arrSlidesSquare1.length; j++) {
            arrSlidesSquare1[j].style.backgroundPositionY = 11.26 + "%";
            arrSlidesSquare2[j].style.backgroundPositionY = 22.3 + "%";//22.3
            arrSlidesSquare3[j].style.backgroundPositionY = 33.26 + "%";//33.26
            arrSlidesSquare4[j].style.backgroundPositionY = 44.3 + "%";//44.4
            arrSlidesSquare5[j].style.backgroundPositionY = 55.66 + "%";//55.26
            arrSlidesSquare6[j].style.backgroundPositionY = 66.7 + "%";//66.3
            arrSlidesSquare7[j].style.backgroundPositionY = 77.86 + "%";//77.26
            arrSlidesSquare8[j].style.backgroundPositionY = 88.9 + "%";//88.3
            arrSlidesSquare9[j].style.backgroundPositionY = 100 + "%";//99.56
            // y = y + 11;
            // console.log(y)
        }
    }

    setPositionBGForSquareAndWrap("slider_2_lines_square");
    setPositionBGForSquareAndWrap("slider_2_lines_square_wrap");

    let countForChanhe = 1;

    btnChange.addEventListener("click", (e) => {
        let transitDealay = 0.01;
        let bgI;
        let animationName;

        switch (countForChanhe) {
            case 1:
                bgI = "url('images/bg_11.jpg')", countForChanhe = 2, animationName = "playFirst";
                break;
            case 2:
                bgI = "url('images/bg_22.jpg')", countForChanhe = 3, animationName = "playSecond";
                break;
            case 3:
                bgI = "url('images/bg_33.jpg')", countForChanhe = 1, animationName = "playThird";
                break;
        }


        let countRemoveAnimationName = 1;
        for (let i = 0; i < arrSquare.length; i++) {
            if (arrSquare[i].dataset.id == i) {
                arrSquare[i].style.transition = 0 + "s";
                arrSquare[i].style.backgroundImage = bgI;


                arrSquare[i].style.transition = 0.8 + "s";
                arrSquare[i].style.transitionDelay = transitDealay + "s";
                arrSquare[i].style.animationDelay = transitDealay + "s";

                if (forThird == 2) {
                    arrSquare[i].style.animationName = animationName;
                }

                arrSquare[i].style.opacity = 1;
                transitDealay += 0.01;
                countRemoveAnimationName += 1;

                setTimeout(function () {
                    for (let i = 0; i < arrSquare.length; i++) {
                        arrSquareWrap[i].style.backgroundImage = bgI;
                        arrSquare[i].style.animationName = "none"
                    }
                }, 2500)
            }
        }
    })
}


firstSlide();

let first = document.getElementById("first");
first.addEventListener("click", (e) => {
    document.getElementById("slider_wrap_container").innerHTML = "";
    forThird = 0;
    firstSlide();
    activeBtn()
});

let second = document.getElementById("second");
second.addEventListener("click", (e) => {
    document.getElementById("slider_wrap_container").innerHTML = "";
    forThird = 1;
    secondSlide();
    activeBtn()
});

let third = document.getElementById("third");
third.addEventListener("click", (e) => {
    document.getElementById("slider_wrap_container").innerHTML = "";
    forThird = 2;
    secondSlide();
    activeBtn()
});


function activeBtn() {
    let arrBtn = Array.from(document.getElementsByClassName("options_btn"));
    if (forThird==0){
        arrBtn[1].classList.remove("active_class");
        arrBtn[2].classList.remove("active_class");
        arrBtn[0].classList.add("active_class")
    } else if (forThird == 1){
        arrBtn[0].classList.remove("active_class");
        arrBtn[2].classList.remove("active_class");
        arrBtn[1].classList.add("active_class")
    } else if(forThird == 2){
        arrBtn[0].classList.remove("active_class");
        arrBtn[1].classList.remove("active_class");
        arrBtn[2].classList.add("active_class")
    }

}


