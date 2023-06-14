function adaptive(){
    if (window.innerWidth <= 875) {
        document.querySelector(".main-menu__svg_V").src = "image/Vector%206-mobile.svg";
    }
    else{
        document.querySelector(".main-menu__svg_V").src = "image/Vector%206.svg"
    }
    // if (window.innerWidth <= 576) {
    //     document.querySelector("img.phone-img-v").src = "image/Phone_Call_mobile.svg";
    // }
    // else {
    //     document.querySelector("img.phone-img-v").src = "image/Phone_Call.svg";
    // }
}




