/**
 * Created by sht-home on 20.04.2017.
 */

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
        var t2 = $(".red-dot > .cont:eq("+ i +")").css({top: t + "px"});
        console.log(t2);
    }    
    
}

setDotsPosition($(".red-dot > .cont").length - 1);