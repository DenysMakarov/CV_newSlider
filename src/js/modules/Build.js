export class Build {

    static createNewElement(tag, classN = null, innerHtml = null, attrEl = null) {
        let el = document.createElement(tag);
        el.className = (classN) ? classN : "";
        el.innerHTML = (innerHtml) ? innerHtml : "";

        if (attrEl) {
            attrEl.map((elAttr) => el.setAttribute(elAttr.name, elAttr.value))
        }

        return el;
    }

    static addEl(parrent, children) {
        children.map(el => parrent.appendChild(el));
        return parrent;
    }


    createFirstSlider() {
        let sliderConteiner = document.getElementById("slider_wrap_container");
        let sliderBoxWrap = Build.createNewElement("div", "slider_box_wrap", null, [{
            "name": "id",
            "value": "slider_box_wrap"
        }]);

        let slideBG = Build.createNewElement("div", "slider_box slider_background", null, [{
            "name": "id",
            "value": "slider_background"
        }]);
        let slideBoxLine = Build.createNewElement("div", "slider_box slider_line", null, [{
            "name": "id",
            "value": "slider_box"
        }]);
        let slideBoxCover = Build.createNewElement("div", "slider_box slider_cover", null, [{
            "name": "id",
            "value": "slider_cover"
        }]);


        for (let i = 0; i < 20; i++) {
            let x = Build.createNewElement("div", "slider_lines", null, null);
            let y = Build.createNewElement("div", "slider_lines_box", null, null);
           y.appendChild(x);
            slideBoxLine.appendChild(y);
        }

        Build.addEl(sliderBoxWrap, [slideBG, slideBoxLine, slideBoxCover])
        return sliderConteiner.appendChild(sliderBoxWrap)
    }

    createSecondSlider(){
        let sliderConteiner = document.getElementById("slider_wrap_container");

        let slider2_BoxWrap = Build.createNewElement("div", "slider_2_box_wrap", null, [{
            "name": "id",
            "value": "slider_2_box_wrap"
        }]);

        let slide2_BG = Build.createNewElement("div", "slider_2_box slider_2_background", null, [{
            "name": "id",
            "value": "slider_2_background"
        }]);
        let slide2_BoxLine = Build.createNewElement("div", "slider_2_box slider_2_line_box", null, [{
            "name": "id",
            "value": "slider_2_box"
        }]);
        let slideBoxCover = Build.createNewElement("div", "slider_2_box slider_2_cover", null, [{
            "name": "id",
            "value": "slider_2_cover"
        }]);

        let buttonChange = Build.createNewElement("button", "btn_change", "Touch to change", [{
            "name": "id",
            "value": "btn_change"
        }]);

        for(let i=0; i < 10; i++){
            let slideLines = Build.createNewElement("div", "slider_2_lines");

            for(let j=0; j < 20; j++){
                let slideSquare = Build.createNewElement("div", "touch_square slider_2_lines_square slider_2_lines_square_" + i); // + _i
                let slideSquareWrap = Build.createNewElement("div", "slider_2_wrap_common slider_2_lines_square_wrap slider_2_lines_square_wrap_" + i); // + _i
                Build.addEl(slideLines, [Build.addEl(slideSquareWrap, [slideSquare])])
            }

            slide2_BoxLine.appendChild(slideLines)
        }



        Build.addEl(slider2_BoxWrap, [slide2_BG, slide2_BoxLine, slideBoxCover]);
        Build.addEl(sliderConteiner, [slider2_BoxWrap, buttonChange]);
        return sliderConteiner


    }
}