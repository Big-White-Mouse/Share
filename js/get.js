let databody = {};
let page = '1';
let totalPage = null;
function getNewPage(){
    $.ajax({
        type:"get",
        url: 'http://39.107.101.13:8080/share/blog/',
        data:{pn:page},
        success:function(data){
            console.log(data);
            databody = data.body;
            totalPage = databody.pages;
            // console.log("getendrow:"+ totalPage);
            let html = template('template', databody);
            $("#main").append(html);
        }
    });
    isreach = 1;
}
$(getNewPage());