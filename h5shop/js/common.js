// 测试地址
var sh_requestUrl = 'http://47.106.151.12:9090/shopinterface';

//http://47.106.151.12:9090/shopinterface/getShopProduct http://localhost:9090/shopinterface
// 生产地址  https://yidouliang.club/shopinterface
//https://47.106.151.12:443/shopinterface/getShopProduct
//var sh_requestUrl = 'http://yidouliang.club:9090/shopinterface';

//form序列化为json
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


//获取url后的参数值
function getUrlParam(key) {
    var href = window.location.href;
    var url = href.split("?");
    if (url.length <= 1) {
        return "";
    }
    var params = url[1].split("&");

    for (var i = 0; i < params.length; i++) {
        var param = params[i].split("=");
        if (key == param[0]) {
            return param[1];
        }
    }
}
function getUserInfo() {
    var data = localStorage.getItem("data");
    return JSON.parse(data);
}