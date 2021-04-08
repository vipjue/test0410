$(function () {


    var proData = [];
    $.get("json/product.json",function (data) {
        //console.log(data);
        proData = data;

        var str = "";
        for (var i=0;i<proData.length;i++){
            //console.log(proData[i].name)
            if($.cookie("id"+proData[i].pId) != null){
                console.log($.cookie("id"+proData[i].pId))
                str+='<li class="cartPInfo" data-id="'+proData[i].pId+'">' +
                    '<div class="pItem pCheckbox">' +
                    '<input type="checkbox" class="ch-item"/>' +
                    '</div>' +
                    '<div class="pItem pGoods">' +
                    '<div class="pItem cartPImg">' +
                    '<a href="###"><img src="'+proData[i].img+'"/></a>' +
                    '</div>' +
                    '<div class="pItem cartName">' +
                    '<a href="###">'+proData[i].name+' <span class="sWeight">'+proData[i].weight+'</span>kg</a>' +
                    '</div>' +
                    '</div>' +
                    '<div class="pItem pPrice">￥<strong class="price">'+proData[i].price+'</strong></div>' +
                    '<div class="pItem pPromotion">&nbsp;</div>' +
                    '<div class="pItem pQuantity">' +
                    '<div class="cartAmount">' +
                    '<a href="###" class="num-minus">-</a><input type="text" value="1" class="amount"/>' +
                    '<a href="###" class="num-plus">+</a>' +
                    '</div></div>' +
                    '<div class="pItem pWeight">' +
                    '<span class="weight">'+proData[i].weight+'</span>kg</div>' +
                    '<div class="pItem pSubtotal">￥<span class="all-sum">'+proData[i].price+'</span>' +
                    '</div><div class="pItem pInventory">现货</div>' +
                    '<div class="pItem pOperator">' +
                    '<a href="###">收藏</a>' +
                    '<a href="###" class="delete">删除</a>' +
                    '</div>' +
                    '</li>'
            }




        }
        $(".cartItem").html(str)
    })





    var $chAll = $(".ch-all");
    var $chItem = $(".ch-item");

    var $allWeight = $(".weightNum");
    var $allSum = $(".moneyAll");
    var $allPrice = $(".allPrice");


    $chAll.on("click",function () {
        if($(this).prop("checked")){
            $chItem.prop("checked",true);
            $chAll.prop("checked",true);
        }else {
            $chItem.prop("checked",false);
            $chAll.prop("checked",false);
        }
        getSum()
    });
    //事件委托
    $(document).on("click",".ch-item",function () {
        console.log($(this).prop("checked"))
        if(!$(this).prop("checked")){
            //如果当前没有选中，就干掉全选
            $chAll.prop("checked",false)
        }else {

            var allCh = true;//假设被全选
            //判断所有的选项是否都选中
            $(".ch-item").each(function () {
                if(!$(this).prop("checked")){
                    //如果有一个没有被选中
                    allCh =false
                }
            });
            if(allCh){
                $chAll.prop("checked",true);
            }

        }
        getSum()

    });


    /*加减*/
    $(document).on("click",".num-minus",function () {
        var oP =$(this).parents(".cartPInfo");
        var num =oP.find(".amount");
        var price = oP.find(".price");
        var sWeight = oP.find(".sWeight");
        var weight = oP.find(".weight");
        var sum = oP.find(".all-sum");
        var val = num.val();
        if(val<=1){
            val=2
        }
        num.val(--val);
        //金额
        sum.html(parseFloat(val*price.html()).toFixed(1));
        weight.html(parseFloat(val*sWeight.html()).toFixed(1));
        getSum()

    });
    $(document).on("click",".num-plus",function () {

        var oP =$(this).parents(".cartPInfo");
        var num =oP.find(".amount");
        var price = oP.find(".price");
        var sWeight = oP.find(".sWeight");
        var weight = oP.find(".weight");
        var sum = oP.find(".all-sum");

        var val = num.val();

        num.val(++val);
        sum.html(parseFloat(val*price.html()).toFixed(1));
        weight.html(parseFloat(val*sWeight.html()).toFixed(1));
        getSum()
    });


    function getSum() {
        var allWeight = 0;
        var allSum = 0;
        $(".ch-item:checked").each(function () {
            var oP = $(this).parents(".cartPInfo");
            var weight =oP.find(".weight");
            var sum = oP.find(".all-sum");
            allWeight+=parseFloat(weight.html());
            allSum+=parseFloat(sum.html());
        });
        $allWeight.html(allWeight);
        $allSum.html(allSum);
        $allPrice.html(allSum)
    }

    $(document).on("click",".delete",function () {
        $(this).parents(".cartPInfo").remove();
        $.removeCookie("id"+$(this).parents(".cartPInfo").attr("data-id"),{path:"/"});
        $.removeCookie("id"+$(this).parents(".cartPInfo").attr("data-id")+"num",{path:"/"});

    })





});