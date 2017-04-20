/**
 * Created by sht-home on 20.04.2017.
 */

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.css({opacity: 1}).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

/*-----------------------------------
Расставим точки
-----------------------------------*/
function setDotsPosition(n) {

    //Установим правильную высоту для рельсы
    var t = $(".items > .rou:eq("+ n +")").position().top;
    $(".red-dot").height(t + 28);
    
    for(var i = 1; i <= n; i++ )
    {
        //узнаем расстояние до родителя
        var t = $(".items > .rou:eq("+ i +")").position().top;

        //Установим размеры для dots
        $(".red-dot > .cont:eq("+ i +")").css({top: t + "px"});
    }
    
}


/*-----------------------------------
Анимации
-----------------------------------*/
function my_animate(style) {

    var elm = $('[data-js-animate="'+ style +'"]'),
        stopClass = 'STOP-EFFECT';

    $(elm).each(function () {

        if($(this).is(":in-viewport") && !$(this).hasClass(stopClass))
        {
            $(this).addClass(stopClass);
            $(this).animateCss(style);
        }

    });


}










/*-----------------------------------
INIT
-----------------------------------*/
setDotsPosition($(".red-dot > .cont").length - 1);

$(document).scroll(function () {
    my_animate('bounceInUp');
    my_animate('fadeIn');
    my_animate('bounce');
    my_animate('bounceInLeft');
    my_animate('bounceInRight');
    my_animate('fadeInUp');
});