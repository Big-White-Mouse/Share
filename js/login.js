
//login signup切换效果
$("#login").click(function(){
    $("#underline-l").addClass("underline-show");
    $("#underline-r").removeClass("underline-show");
    $("#btn span").text('Login');
    $("#container").css('height','460px');
    $(".forget").css('top','316px');
    $(".visitor").css('top','316px');
    $("#btn").css('top','360px');
    $(".repeat").css('opacity','0');
});
$("#signup").click(function(){
    $("#underline-r").addClass("underline-show");
    $("#underline-l").removeClass("underline-show");
    $("#btn span").text('Sign up');
    $("#container").css('height','520px');
    $(".forget").css('top','376px');
    $(".visitor").css('top','376px');
    $("#btn").css('top','420px');
    $(".repeat").css('opacity','1');
});
//文本框聚焦效果
$("input").on('focus',function(){
    $(this).prev().addClass('focus');
});
$("input").on('blur',function(){
    if($(this).val() === ''){
        $(this).prev().removeClass('focus');
    }
});


let uname = null;//用户名
//登录
$("#btn").on('click',function(){
    let passwd = $("#password1").val();
    uname = $("#StudentId").val();
    $.ajax({
        type:"post",
        url: 'http://39.107.101.13:8080/share/login/',
        data:{username:uname,password:passwd},//传参{后端参数:js变量}
        success:function(data){
            if(data.code == "200"){
                $("#error").text('登陆成功').css('backgroundColor','rgb(63,214,144)').css('top','0');//弹框
                setTimeout(function(){
                    let url = "index.html?UserName=" + uname;
                    window.location.href=url;//跳转
                },600);
            } else if(data.code == "100"){
                $("#error").text('用户名或密码错误').css('top','0');//弹框
                setTimeout(function(){
                    $("#error").css('top','60px');
                },1600)//1.6秒后收回
            }
        },
    });
});
