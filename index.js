
// Mobile menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});



// Slider

var cont = 0;
function loopSlider() {
    var xx = setInterval(function () {
        switch (cont) {

            case 0: {
                $("#slider-1").fadeOut(400);
                $("#slider-2").delay(400).fadeIn(400);
                cont = 1;
                break;
            }

            case 1:
                {
                    $("#slider-2").fadeOut(400);
                    $("#slider-1").delay(400).fadeIn(400);

                    cont = 0;
                    break;
                }

        }
    }, 8000);

}

function reinitLoop(time) {
    clearInterval(xx);
    setTimeout(loopSlider(), time);
}

function sliderButton1() {

    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    reinitLoop(4000);
    cont = 0
}

function sliderButton2() {
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    reinitLoop(4000);
    cont = 1
}

$(window).ready(function () {
    $("#slider-2").hide();
    loopSlider();
});
