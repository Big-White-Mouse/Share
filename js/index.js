let index = 0;//判断侧边栏状态  index == 0 时为收起  index == 1时为展开
let winwidth = $(document).width();
$(window).resize(function(){
    winwidth = $(document).width();
});
$("#listbtn").click(function(){
    if(index === 0){
        $("#list").css('left','0px');
        $("#listbtn").css('left','250px').text('');
        $("#userimg").css('top','20px').css('left','20px').css('width','80px').css('height','80px');
        $("#userid").css('opacity','1').css('top','58px').css('left','80px');
        index = 1;

        if(winwidth > 1200){
            $("#rightpage").width(winwidth-300+'px');
            $("#category").css('width','600px');
        }
    } else {
        $("#list").css('left','-300px');
        $("#listbtn").css('left','0px').text('');
        $("#rightpage").width(100+'%');
        $("#category").css('width','900px');
        $("#userimg").css('top','5px').css('left','50px').css('width','50px').css('height','50px');
        $("#user").css('opacity','0');
        $("#user").css('z-index','-1').css('top','105px');
        $("#userid").css('opacity','0').css('top','26px').css('left','60px');
        $(".userinfounit").css('opacity','0');
        ishidden = 0;
        index = 0;
    }
});
let ishidden = 0;//判断用户信息状态 0为隐藏 1为显示
$("#userimg").click(function(){
    if(index === 1){
        if( ishidden === 0){
            $("#user").css('z-index','10').css('opacity','1').css('top','115px');
            $("#changeuserimg").fadeTo(200,1);
            $("#changepasswd").fadeTo(300,1);
            $("#changeusername").fadeTo(400,1);
            $("#logout").fadeTo(500,1);
            ishidden = 1;
        } else {
            $("#user").css('opacity','0').css('z-index','-1').css('top','105px');
            $(".userinfounit").css('opacity','0');
            ishidden = 0;
        }
    }
});
$(".main-unfold").attr('isfold','1').click(function(){
    let isfold = $(this).attr('isfold');
    if(isfold === '1'){
        $(this).text('');
        $(this).parent('div').prev().children('div').css('height','auto');
        $(this).attr('isfold','0');
    } else {
        $(this).text('');
        if($(this).parent('div').prev().children('div').hasClass('blogsmaintext')){
            $(this).parent('div').prev().children('div').css('height','70px');
        } else {
            $(this).parent('div').prev().children('div').css('height','50px');
        }
        $(this).attr('isfold','1');
    }
});
$(".main-collect").attr('collected','0').click(function(){
    let collected = $(this).attr('collected');
    if(collected === '0'){
        $(this).css('font-weight','800').css('color','rgb(219,102,180)');
        $(this).attr('collected','1');
    } else {
        $(this).css('font-weight','400').css('color','#111');
        $(this).attr('collected','0');
    }
});
$(".main-like").attr('islike','0').click(function(){
   let islike = $(this).attr('islike');
   if(islike === '0'){
       $(this).css('font-weight','800').css('color','rgb(219,102,180)');
       $(this).attr('islike','1');
   } else {
       $(this).css('font-weight','400').css('color','#111');
       $(this).attr('islike','0');
   }
});