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



    $(".dd").each(function () {
        $(this).find("h3").click(function () {
            $(this).parent().find("ul").toggle();
            $(this).find("b").toggleClass("current");
        })
    });


    $(".v-btn").on("click",function () {
        $(this).find("span").toggle();
        $(this).parent().find("li.hide").toggle();
    });

    
    $("#p-next").on("click",function () {
        $(this).prev().hide();
       $(this).next().show();
    })
    $("#p-prev").on("click",function () {
        $(this).next().show();
        $("#p-next").next().hide();
    });

    $(".address").hover(function () {
        $(this).addClass("curr");
        $(".content").show();
    },function () {
        $(".content").hide();
    });




    var pageRows = 16;
    var productData = [];
    var $proList = $(".r-pList");



    $.get("json/productList.json",function (data) {
        productData = data;
        var pageCount =data.length/pageRows;//总共有多少页
        addData(1);

        $("#page-rows").createPage({
            pageCount:pageCount, //总共有多少页
            current:1,//当前第几页
            backFn:function (page) {
                //alert(page)当前跳转到的页码
                addData(page)
            }
        });

    });

    function addData(page) {
        // productData = 有45条数据的数组
        //page是页码
        //pageRows是每页显示多少条
        console.log("需要添加第"+page+"页的数据")

        //page =2
        //10
        var disNum = (page-1)*10;
        //需要给$proList里面添加数据
        var str = "";
        for(var i=0;i<pageRows;i++){
            if(!productData[disNum+i]){
                break
            }
            str+='<li>' +
                    '<div class="r-wrap">' +
                        '<div class="p-pic">' +
                            '<a href="###">' +
                                '<img src="'+productData[i+disNum].img+'"/>' +
                            '</a>' +
                        '</div>' +
                        '<span class="price">￥<strong>'+productData[i+disNum].price+'</strong></span>' +
                        '<p class="p-title">' +
                            '<a href="###">'+productData[i+disNum].name+'</a>'+
                        '</p>' +
                        '<div class="comment">' +
                            '<a href="###">已有83人评价</a>' +
                            '<span class="owner-shop">自营</span>' +
                        '</div>' +
                        '<div class="action">' +
                            '<div class="p-num">' +
                                '<span><input type="text" class="num" value="1"/></span>' +
                                '<span>' +
                                '<a href="###">+</a>' +
                                '<a href="###">-</a>' +
                                '</span>' +
                            '</div>' +
                            '<div class="cart-btn">' +
                            '<a href="###">加入购物车</a>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</li>'
        }

        $proList.html(str)

    }



})
