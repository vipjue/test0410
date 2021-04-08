$(function () {

    $(".cont input").focus(function () {
        var $parent = $(this).parents(".infoItem");
        $(this).parent().addClass("green");
        $(this).parent().removeClass("red");
        $parent.find(".prompt").removeClass("red");

        if ($parent.hasClass("username")){

            $parent.find(".prompt").html("请输入您的手机号")

        }else if($parent.hasClass("password")){
            $parent.find(".prompt").html("6-20位字符，可用字母、数字、下划线，不建议使用纯数字或字母组合")
        }else  if($parent.hasClass("password-sure")){
            $parent.find(".prompt").html("请再次输入密码")
        }else if($parent.hasClass("ver-code")){
            $parent.find(".prompt").html("请输入验证码")
        }else{
            $parent.find(".prompt").html("请输入短信验证码")
        }



    })

    $(".cont input").blur(function () {
        var value = $(this).val();
        var $parent = $(this).parents(".infoItem");

        if(value == ""){
           // alert(1);
            $parent.find(".prompt").html("")
            $(this).parent().removeClass("green");
        }else {

            if($parent.hasClass("username")){

                if(/^[1][3|5|7|8]{1}\d{9}$/.test(value)){
                    $(this).parent().find("em").show();
                    $(this).parent().removeClass("green");
                    $parent.find(".prompt").html("")
                }else {
                    $(this).parent().addClass("red");
                    $parent.find(".prompt").addClass("red");
                    $parent.find(".prompt").html("请输入正确的手机号码")
                }
            }else if($parent.hasClass("password-sure")){
                //console.log($parent.prevAll(".password"))
                //console.log($parent.prevAll(".password").find(".cont input"))
                var val = $parent.prevAll(".password").find(".cont input").val()
                //console.log(val)
                if(value == val){
                    //alert(1);
                    $(this).parent().find("em").show();
                }else{
                    $(this).parent().addClass("red");
                    $parent.find(".prompt").addClass("red");
                    $parent.find(".prompt").html("两次输入不一致，请重新输入")
                }
            }

        }



    });
    $(".cont input").keyup(function () {
        var $parent = $(this).parents(".infoItem");
        //console.log($parent.next());
        /*alert(1);*/
        $(this).parent().removeClass("green");
        $(this).parent().removeClass("red");
        $parent.find(".prompt").html("");

        if($parent.hasClass("password")){

            var str = $(this).val();
            //console.log(str);
            var reg = /\d/g;
            var reg1 = /\_/g;
            var arr1 = str.match(reg);
            var arr2 = str.match((reg1));
            var len;
            var len1
            //console.log(arr1);
            if(arr1==null){
                len=0;

            }else {
                len = arr1.length;

            }
            if(arr2==null){
                len1=0;
            }else {
                len1 = arr2.length;
            }

            console.log(len);
            //console.log(str);
            var arr = str.split("");

            if(arr.length>=6){
                if(/^[a-zA-Z0-9_]{6,20}$/.test(str)){
                    $(this).parent().find("em").show();
                    $(this).parent().removeClass("red");
                    if(len>=3){
                        if(len1>0){
                            $parent.next().find("li").removeClass("active");
                            $parent.next().find(".powerful").addClass("active");
                        }else{
                            $parent.find(".prompt").html("");
                            $parent.next().find("li").removeClass("active");
                            $parent.next().find(".middle").addClass("active");

                        }


                    }else{
                        $parent.find(".prompt").html("密码太简单，建议使用数字、字母、下划线组合");
                        $parent.next().find("li").removeClass("active");
                        $parent.next().find(".weak").addClass("active");
                    }

                }else{
                    $(this).parent().addClass("red");
                    $parent.find(".prompt").html("密码只能为6-20位字母数字下划线组合");
                    $parent.find(".prompt").addClass("red");
                }

            }
        }else if($parent.hasClass("ver-code")){
            //alert(1);
            //console.log($parent.find(".code-random"));
            var str1 = $(this).val();
            var arr3 = str1.split("");
            //console.log(arr3)
            if(arr3.length==4){
                //alert(1);
                if(str1==$code.html()){
                    //alert(1);
                    $(this).parent().find("em").show();
                   // $(this).val("$code.html()")
                }else{
                    //alert(1);
                    $(this).parent().addClass("red");
                    $parent.find(".prompt").addClass("red");
                    $parent.find(".prompt").html("验证码不正确");
                    $(this).val("");
                    random1();
                }
            }

        }

    });









    var $code = $(".code-random");
    //console.log($code);
    random1();

    $code.click(function () {
        random1();
    });
    //console.log($code.next().find("a"))
    var $btn = $code.next().find("a");
    $btn.click(function () {
        random1();
    });

    function random1() {
        var arr = [];
        for(var i = 0; i < 10; i++) {
            arr.push(i + "")
        }
        for(var i = 65; i <= 90; i++) {
            arr.push(String.fromCharCode(i))
        }
        for(var i = 97; i <= 122; i++) {
            arr.push(String.fromCharCode(i))
        }
        var str = "";
        for(var i = 0; i < 4; i++) {
            str += arr[parseInt(Math.random() * arr.length)]
        }
        $code.html(str);

    }




})