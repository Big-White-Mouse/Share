$("#login").click(function(){
    $("#underline-l").addClass("underline-show");
    $("#underline-r").removeClass("underline-show");
    $("#btn").text('Login');
    $("#container").css('height','460px');
    $(".forget").css('top','316px');
    $(".visitor").css('top','316px');
    $("#btn").css('top','360px');
    $(".repeat").css('opacity','0');
});
$("#signup").click(function(){
    $("#underline-r").addClass("underline-show");
    $("#underline-l").removeClass("underline-show");
    $("#btn").text('Sign up');
    $("#container").css('height','520px');
    $(".forget").css('top','376px');
    $(".visitor").css('top','376px');
    $("#btn").css('top','420px');
    $(".repeat").css('opacity','1');
});
$("input").on('focus',function(){
    $(this).prev().addClass('focus');
});
$("input").on('blur',function(){
    if($(this).val() === ''){
        $(this).prev().removeClass('focus');
    }
});