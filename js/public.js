/**
 * Created by Administrator on 2016/9/10.
 */
$(function () {
    /*城市选项卡*/
    $("#city-btn").mouseover(function () {
        $("#city-wrap").show();
    });
    $("#city-btn").mouseout(function () {
        $("#city-wrap").hide();
    });
    $("#off-btn").click(function () {
        $("#city-wrap").hide();
    });
    $("#city-btn li").click(function () {
        $("#city-wrap").hide();
    });
    $(".city-option li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".con-city ul").hide().eq($(this).index()).show();
    });
    $("#best-select").mouseover(function () {
        $("#select-item").show();
    });
    $("#best-select").mouseout(function () {
        $("#select-item").hide();
    });
    $("#select-item li").click(function () {
        $("#select-item").hide();
    });

    $("#help-btn").mouseover(function () {
        $("#help-item").show();
    });
    $("#help-btn").mouseout(function () {
        $("#help-item").hide();
    });
    $("#help-item li").click(function () {
        $("#help-item").hide();
    });

    $("#phone-client").mouseover(function () {
        $(".client").show();
    });
    $("#phone-client").mouseout(function () {
        $(".client").hide();
    });
    $("#client-wrap a").click(function () {
        $(".client").hide();
    });






    $(".slitMap").mouseover(function () {
        $("#slitMapWrap").show();
    });
    $(".slitMap").mouseout(function () {
        $("#slitMapWrap").hide();
    });
    $("#slitMapWrap a").click(function () {
        $("#slitMapWrap").hide();
    });


    $(".weChat").mouseover(function () {
        $("#wxCode").show();
    });
    $(".weChat").mouseout(function () {
        $("#wxCode").hide();
    });





    /*底部扫码设置*/
    $("#code_wrap").hover(function () {
        $(".client").show();
            $(".client").stop().animate({left:-320},500)
        },function(){
            $(".client").stop().animate({left:42},500)

        }
    )


    /*底部扫码设置结束*/


    /*返回顶部设置*/
    $(".go_top").click(function () {
        $("body,html").animate({"scrollTop":0});
    });



    /*返回顶部设置结束*/



});

/*划动轮播函数*/

function slidePic(option) {
    var $wrap =  option.wrap;//壳子
    var $list = option.list; //ul
    var $picLi = option.picLi;//ul li
    var $btn =  option.btn; //按钮
    var $prev =  option.prev;
    var $next =  option.next;

    var iNow = 0;
    var timer = null;
    var len = $picLi.length;
    var iW = $wrap.outerWidth();
    var animated = true;

    option.autoPlay && autoPlay();//需要自动轮播就自动轮播
    $picLi.eq(0).clone().appendTo($list);

    $btn && $btn.mouseover(function () {
        iNow = $(this).index();
        changeView();
    });
    $prev && $prev.click(function () {
        if(!animated){
            return;
        }

        if(iNow<=0){
            iNow = len;
            $list.css({"left":-iW*len})
        }
        iNow--;
        changeView()
    });
    $next && $next.click(toNext);



    ($prev||$next) && $wrap.hover(function () {
        /*$prev.show();*/
        $prev.show() && $next.show();
    },function () {
        $prev.hide() && $next.hide();
    });



    /*如果需要轮播，再添加方法*/
    option.autoPlay && $wrap.hover(function () {
        clearInterval(timer);
    },function () {
        autoPlay();
    });

    function toNext() {
        if(!animated){
            return;
        }

        if(iNow>=len){
            iNow=0;
            $list.css("left",0)
        }
        iNow++;
        changeView();
    }
    function autoPlay() {
        timer = setInterval(toNext,2000)
    }


    function changeView() {
        animated = false;
        $list.stop().animate({"left":-iNow*iW},function () {
            animated = true;
        });
        $btn && $btn.removeClass("active").eq(iNow%len).addClass("active");
    }
}
/*划动轮播函数结束*/

