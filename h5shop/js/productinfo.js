$(function(){
    var id = getUrlParam("productCode");
    if(id != ""){


        var obj = {};
        obj.id = id;
        obj.state="false";
        $.ajax({
            type : 'post',
            url : sh_requestUrl+'/getProductInfo',
            data:JSON.stringify(obj),
            contentType : "application/json; charset=utf-8",
            async : false,
            success : function(data) {

                if(data!=null){
                    var parmin = JSON.parse(data).data;

                    $("#productName").html(parmin.productname);
                    $("#remakeName").html(parmin.productdesc);
                    $("#pricename").html(parmin.originprice);
                    $("#topImg").attr("src",parmin.productpicpath);


                }

            }
        });

    }


    var $dialog1 = $('#js_dialog_1'),
        $iosDialog1 = $('#iosDialog1');
    $('#dialogs').on('click', '.weui-mask', function(){
        $(this).parents('.js_dialog').fadeOut(200);
        $dialog1.removeClass('weui-half-screen-dialog_show');

    });
    $('#showIOSDialog1').on('click', function(){
        $iosDialog1.fadeIn(200);
        $dialog1.addClass('weui-half-screen-dialog_show');
    });


});


function dialogClose(){
    var $dialog1 = $('#js_dialog_1'),
        $js_dialog = $('#js_dialog');
    $dialog1.removeClass('weui-half-screen-dialog_show');
    $(this).parents('.js_dialog').fadeOut(200);

}

function funBuyshop(){

}

function funAddBuyCar() {
}

var box = document.getElementById('box1');
var ul = document.getElementById('ul1');
var li = box.getElementById("li1");    // 图片
var span = box.getElementsByTagName('span'); // 所有的分页按钮 小圆点

var timer = null;
var count = 0;

var picWidth = li[0].clientWidth; // 一张图的宽度
ul.style.width = picWidth * li.length + 'px'; // 设置ul的宽度

// 一打开就执行
timer = setInterval(auto, 2000);
// 滑上停止
box.onmouseover = function () {
    clearInterval(timer);
};
// 滑离开启
box.onmouseout = function () {
    timer = setInterval(auto, 2000);
};

// // 上一张
// leftBtn.onclick = function () {
//     count--;
//     if (count < 0) {
//         count = li.length - 1;
//     }

//     change();
// }

// // 下一张
// rightBtn.onclick = function () {
//     auto();
// }

// 滑上分页
for (var i = 0; i < span.length; i++) {    
    span[i].index = i;       //因为span没有下标（它在for循环里面），所以给它创建一个自定义下标。
    span[i].onmouseover = function () {
        count = this.index;
        change();
    }
}

function auto() {
    count++;
    if (count >= li.length) {
        count = 0;
    }

    change();
}

function change() {
    move(ul, {
        left: -count * picWidth
    });    
    for (var i = 0; i < span.length; i++) {
        span[i].className = '';
    }
    span[count].className = 'active';
}