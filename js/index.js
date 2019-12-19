//响应式
let winwidth = $(document).width();
$(window).resize(function(){
    winwidth = $(document).width();
});

//左侧菜单栏
let index = 0;//判断侧边栏状态  index == 0 时为收起  index == 1时为展开
$("#listbtn").click(function(){
    if(index === 0){
        $("#list").css('left','0px');
        $("#listbtn").css('left','250px').text('');
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

//用户详细信息
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

//md编辑器
$(".writeblog").click(function(){
   $(".mainunitcontainer").css('display','none');
   $(".mdcontainer").css('display','block');
   $("#main-load").css('display','none');
   $(".c-underline").removeClass('c-current');
});

//主界面头部类型切换
$(".c").click(function(){
    $(".c-underline").removeClass('c-current');
    $(this).children('div').addClass('c-current');
});

//文章折叠
function uf(e){
    let isfold;
    if($(e).attr('isfold')){
        isfold = $(e).attr('isfold');
    } else {
        isfold = '1';
    }
    let h = $(e).parent('div').prev().children('div').children('div').height();
    if(isfold === '1'){
        $(e).text('');
        $(e).parent('div').prev().children('div').css('height',h+'px');
        $(e).attr('isfold','0');
    } else {
        $(e).text('');
        if($(e).parent('div').prev().children('div').hasClass('blogsmaintext')){
            $(e).parent('div').prev().children('div').css('height','70px');
        } else {
            $(e).parent('div').prev().children('div').css('height','50px');
        }
        $(e).attr('isfold','1');
    }
}

//文章收藏
function cl(e){
    let collected;
    if($(e).attr('collected')){
        collected = $(e).attr('collected');
    } else {
        collected = "0";
    }
    if(collected === '0'){
        $(e).css('font-weight','800').css('color','rgb(219,102,180)');
        $(e).attr('collected','1');
    } else {
        $(e).css('font-weight','400').css('color','#111');
        $(e).attr('collected','0');
    }
}

//文章赞
function lk(e){
    let islike;
    if($(e).attr('islike')){
        islike = $(e).attr('islike');
    } else {
        islike = '0';
    }
    if(islike === '0'){
        $(e).css('font-weight','800').css('color','rgb(219,102,180)');
        $(e).attr('islike','1');
    } else {
        $(e).css('font-weight','400').css('color','#111');
        $(e).attr('islike','0');
    }
}

//通知收到
function ck(e){
    let ischeck;
    if($(e).attr('ischeck')){
        ischeck = $(e).attr('ischeck');
    } else {
        ischeck = "0";
    }
    if(ischeck === '0'){
        $(e).css('font-size','18px').css('color','rgb(219,102,180)').css('width','56px').css('line-height','34px').text('sure?');
        $(e).attr('ischeck','1');
        e.stopPropagation();
        $(e).parent('div').parent('div').click(function(){
            $(e).children('.main-buttons').children('.main-check').css('width','36px').css('color','#111').css('font-size','22px').css('line-height','36px').text('');
            $(e).children('.main-buttons').children('.main-check').attr('ischeck','0');
        })
    } else if(ischeck === '1'){
        $(e).parent('div').parent('div').css('display','none');
    }
}

//展示所有收藏的文章
$(".collect").click(function(){
    $(".main-collect").each(function(){
        if($(this).attr('collected') === '1'){
            $(this).parent('div').parent('div').css('display','block');
        } else {
            $(this).parent('div').parent('div').css('display','none');
        }
    });
    $(".message").parent('div').css('display','none');
});

//展示所有通知
$(".messagelist").click(function(){
    $(".mainunitcontainer").css('display','none');
    $(".message").parent('div').css('display','block');
});

//检测触底加载更多
let isreach = 1;//防止重复加载
$(window).scroll(function(){
    let h = $("#main").outerHeight() + 134;
    let sc = $(window).scrollTop() + $(window).height();
    console.log(h);
    console.log(sc);
    if(sc >= h && isreach == 1){
        isreach = 0;
        $("#main-load").text('--------------正在加载--------------');
        console.log("总页数="+totalPage);
        console.log("当前页="+page);
        if(totalPage > Number(page)){
            page++;
            setTimeout("getNewPage()",800);
            setTimeout(function(){
                $("#main-load").text('------------滚动加载更多------------');
            },800);
        } else {
            $("#main-load").text('----------------到底啦----------------');
        }
    }
});