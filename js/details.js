$(function () {
    $(".sort-tit").hover(function () {
        $(".sort-list").show();
    },function () {
        $(".sort-list").hide();
    });
    $(".sort-list").hover(function () {
        $(".sort-list").show();
    },function () {
        $(".sort-list").hide();
    });

$("#tShare").hover(function () {
    $(".share_wrap").show();
},function () {
    $(".share_wrap").hide();
});
    $(".share_wrap").hover(function () {
        $(".share_wrap").show();
    },function () {
        $(".share_wrap").hide();
    });




    $(".phone_cline").on("mouseenter",function () {
        $(this).addClass("hover");
    });





    $(".phone_cline").on("click",function () {
        $(this).removeClass("hover");
        $(".phone_clineCode").show();
    });


    $("#close_btn").on("click",function () {
        $(".phone_clineCode").hide();
    });
    $(".phone_cline").on("mouseleave",function () {
        $(this).removeClass("hover");
        $(".phone_clineCode").hide();
    });







    $(".clickShow").click(function () {
            $(".clickShow").find("em").toggleClass("show");
    });




    $(".pTab li").click(function () {
        if ($(this).hasClass("active")){
            return
        }
        $(this).addClass("active").siblings().removeClass("active");

    })


    slidePic({
        wrap: $(".ysSlide"),
        list: $(".ysSlide").find("#ys_list"),
        picLi:$(".ysSlide").find("#ys_list li"),
        btn: $("#ysIcons li"),
        autoPlay: true
    });





        var url =  window.location.href;
        var pId = fnBase.request("pId");
        $.get("json/product.json",function (data) {
            for(var i=0;i<data.length;i++){
                if(data[i].pId==pId){
                    var imgArray = data[i].imgArray||[data[i].img];
                    $blowUpImg.attr("src",imgArray[0]);
                    $bigPicWrap.find("img").attr("src",imgArray[0]);
                    var str = "";
                    console.log(imgArray);
                    for(var j=0;j<imgArray.length;j++){
                        str+='<li><img src="'+imgArray[j]+'" ></li>'
                    }
                    console.log(pId);
                    $imgList.html(str)
                    console.log($imgList.html())
                }
            }
        });



        var $bigPicWrap = $(".zoomImg");
        var $moveBox = $(".move-box");
        var $blowUpWrap = $(".blowUp-pic");
        var $blowUpImg = $(".blowUp-pic img");
        var $imgList = $(".picWrap ul");



        var offsetT = $bigPicWrap.offset().top;
        var offsetL = $bigPicWrap.offset().left;



        $imgList.on('mouseover',"img",function () {
            var src = $(this).attr("src");
            $bigPicWrap.find("img").attr("src",src);
            $blowUpImg.attr("src",src)
        });
    $bigPicWrap.hover(function () {
        $moveBox.show();
        $blowUpWrap.show()
    },function () {
        $moveBox.hide();
        $blowUpWrap.hide()
    });
        $bigPicWrap.mousemove(function (ev) {
            var iL = ev.pageX-offsetL-103;
            var iT = ev.pageY-offsetT-68;

            iL = iL<0?0:iL>130?130:iL;
            iT = iT<0?0:iT>198?198:iT;

            $moveBox.css({left:iL,top:iT});

            $blowUpImg.css({left:-iL*16/13,top:-iT*55/33})
        });



});
