
$(function () {

    /*轮播图*/
    slidePic({
        wrap: $("#banner-wrap"),
        list: $("#banner-wrap").find("#pic-list"),
        picLi:$("#banner-wrap").find("#pic-list li"),
        btn: $("#banner-wrap").find("#btn-list li"),
        autoPlay: true
    });
    /*轮播图结束*/


    /*banner图上的图片样式改变*/
    $(".hot-ad").hover(function () {
        $(".hot-ad a").mouseover(function () {
            $(".box").show().eq($(this).index()).hide();
        })
    },function () {
        $(".box").hide();
    });
    /*banner图上的图片样式改变结束*/





    /*优选味道的轮播图*/
    slidePic({
        wrap:$("#slide_wrap") ,
        list:$("#slide_wrap").find("#picList"),
        picLi:$("#slide_wrap").find("#picList li"),
        prev:$("#slide_wrap").find("#prev"),
        next:$("#slide_wrap").find("#next")
    });

    /*优选味道的轮播图结束*/


    /*广告滚动*/
    var $scrollWrap = $(".scroll_wrap");
    var $scrollList = $(".scroll_list");
    var $scrollLi = $(".scroll_list li");
    var iH = $scrollLi.outerHeight();
    var timer = null;
    //console.log(iH);
    autoScroll();
    $scrollWrap.hover(function () {
        clearInterval(timer);
    },function () {
        autoScroll();
    });

    function autoScroll() {
        timer = setInterval(function () {
            $scrollList.animate({"top":-iH},"slow",function () {
                $(".scroll_list li").eq(0).appendTo($scrollList);
                $scrollList.css({"top":0})
            });
        },5000)
    }
    /*广告滚动结束*/




    /*json*/
    var proData1 = [];
    $.get("json/top_left.json",function (data) {
        proData1 = data;
        $(".floor").each(function () {
            var str = "";
            for (var i=0;i<7;i++){
                str+='<div class="floor_top">'+
                    '<a href="productList.html"><img src="'+proData1[i].img_top+'"/></a></div>'+
                    '<div class="floor_main wid1200">'+
                    '<div class="main_left">'+
                    '<h2 style="background-color: '+proData1[i].background_color+'">'+
                    '<b style="background-position:'+proData1[i].position+'"></b>'+
                    '<a href="###">'+proData1[i].cateName1+'</a>'+
                    '<a href="###">'+proData1[i].cateName2+'</a>'+
                    '</h2>'+
                    '<a href="productList.html"><img src="'+proData1[i].img_left+'"/></a>'+
                    '</div>'+
                    '<div class="main_right">'+
                    '<ul class="f_list">'+
                    '</ul>'+
                    '<div class="r_right">'+
                    '<ul class="t_hot">'+
                    '<li>蓝莓</li>'+
                    '<li>蓝莓</li>'+
                    '<li>蓝莓</li>'+
                    '<li>蓝莓</li>'+
                    '<li>蓝莓</li>'+
                    '<li>蓝莓</li>'+
                    '<li>蓝莓</li>'+
                    '<li>蓝莓</li>'+
                    '<li>蓝莓</li>'+
                    '</ul>'+
                    '<div><a href="productList.html"><img src="'+proData1[i].img_right+'"/></a></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'

            }
            $(this).html(str)
        })
    });



    function Tright() {
        var proData2 = [];
        $.get("json/qg.json",function (data) {
            proData2 = data;
            var str = "";
            for (var i=0;i<5;i++){
                str+='<li>'+
                    '<a class="m2-img">' +
                    '<img src="'+proData2[i].img+'"/>' +
                    '</a>'+
                    '<a class="m2_txt">'+proData2[i].name+'</a>'+
                    '<div class="price">'+
                    '<span>￥'+proData2[i].price+'</span>'+
                    '<a class="buy">抢购</a>'+
                    '</div>'+
                    '</li>'
            }
            $(".m2_sort").html(str)
        });
    };
    function Tright1() {
        var proData2 = [];
        $.get("json/qg.json",function (data) {
            proData2 = data;
            var str = "";
            for (var i=5;i<10;i++){
                str+='<li>'+
                    '<a class="m2-img">' +
                    '<img src="'+proData2[i].img+'"/>' +
                    '</a>'+
                    '<a class="m2_txt">'+proData2[i].name+'</a>'+
                    '<div class="price">'+
                    '<span>￥'+proData2[i].price+'</span>'+
                    '<a class="buy">抢购</a>'+
                    '</div>'+
                    '</li>'
            }
            $(".m2_sort").html(str)
        });
    };



    /*限时抢购*/
    Tright();
    var $toPrev = $("#t_prev");
    var $toNext = $("#t_next");
    $toNext.click(function () {
        $(".tright").hide();
        $(".tright1").show();
        Tright1();
    });
    $toPrev.click(function () {
        $(".tright").show();
        $(".tright1").hide();
        Tright()
    });
    /*限时抢购结束*/



    /*设置鼠标滑过让加入购物车的按钮出来*/
    $(document).on("mouseover",".f_list li",function () {
        $(this).find(".g_btn").css({"display":"block"});
    });
    $(document).on("mouseout",".f_list li",function () {
        $(this).find(".g_btn").css({"display":"none"});
    });
    /*设置鼠标滑过让加入购物车的按钮出来结束*/
















    /*楼层调用json*/
    var proData = [];
    $.get("json/product.json",function (data) {
        proData = data;
        $(".f_list").each(function () {
            var index =  $(this).index(".f_list")+1;
            var str = "";
            for(var i=8*(index-1);i<8*index;i++){
                str+=' <li>'+
                        '<a href="details.html?pId='+proData[i].pId+'"><img src="'+proData[i].img+'"/></a>'+
                        '<div class="title-a"><a href="###">'+proData[i].name+'</a></div>'+
                        '<span>'+proData[i].price+'</span>'+
                        '<a class="g_btn" data-id="'+proData[i].pId+'">加入购物车</a>'+
                    '</li>'
            }
            $(this).html(str);
        });



            var total = 0;
            $(".g_btn").each(function(){
                var num = $.cookie("id"+$(this).attr("data-id")+"num")||0;
                $(this).bind("click",function(){
                    total++;
                    if($.cookie("id"+$(this).attr("data-id"))==null){
                        $.cookie("id"+$(this).attr("data-id"),$(this).attr("data-id"),{expires:7,path:'/'});
                        $.cookie("id"+$(this).attr("data-id")+"num",++num,{expires:7,path:'/'});
                    }else{
                        $.cookie("id"+$(this).attr("data-id")+"num",++num,{expires:7,path:'/'});
                    }
                    $.cookie("total",total,{expires:7,path:'/'});
                    $(".p-num").text($.cookie("total"));
                    $(".shopping-car").find("b").text($.cookie("total"))
                });


                $(".pro-set").text()


            total = parseInt($.cookie("total"))||total;
            if(total){
                $(".p-num").text($.cookie("total"));
                $(".shopping-car").find("b").text($.cookie("total"));
                $(".cartNum").text($.cookie("total"));
            }



        })
    });
    /*楼层调用json结束*/











   /* var num = 0;
    var sum = 0;
    $(document).on("click",".g_btn",function () {

        //console.log($(this).index(".g_btn"));
        var a=$(this).index(".g_btn");
        $.cookie("id"+a,a);
       /!* var $cart = $(".shopping-car b");*!/
        $(".shopping-car b").html(++num);
        $(".p-num").html($(".shopping-car b").html())
    })

*/





    /*设置首页购物车*/
    $.get("json/product.json",function (data) {
        //console.log(data);
        var str = "";
        for (var i=0;i<data.length;i++){
            //console.log(data[i].name)
            if($.cookie("id"+data[i].pId) != null){
                //console.log($.cookie("id"+data[i].pId));
                str+='<li class="pro-item" data-id="'+data[i].pId+'">' +
                        '<a class="img-box">' +
                            '<img src="'+data[i].img+'"/>' +
                        '</a>' +
                        '<div class="pro-info">' +
                            '<a href="###" class="pro-name">'+data[i].name+'【下单后3-5天发货】</a>' +
                            '<b class="pro-weight">'+data[i].weight+'kg</b>' +
                        '</div>' +
                        '<div class="pro-set">' +
                            '<span>￥'+data[i].price+'</span>x1' +
                            '<a href="###" class="pro-delete">删除</a>' +
                        '</div>' +
                    '</li>'
            }
        }
        $(".pro-list").html(str)
    });


    $(document).on("click",".pro-delete",function () {
        $(this).parents(".pro-item").remove();
       console.log($(this).parents(".pro-item").attr("data-id"));
        $.removeCookie("id"+$(this).parents(".pro-item").attr("data-id"),{path:"/"});
        $.removeCookie("id"+$(this).parents(".pro-item").attr("data-id")+"num",{path:"/"});
    });
    //$.removeCookie("total",{path:"/"});



    /*设置首页购物车完毕*/


})







