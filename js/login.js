
$(function () {

    /*选项卡*/
    $(".loginNav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".loginCon ul").fadeOut().eq($(this).index()).fadeIn();
    });
    /*选项卡结束*/








})
