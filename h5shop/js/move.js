// 运动框架，参数为：元素、｛样式：值｝、回调
function move(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var onOff = true; // 开头
        var attr, target, now, dir;

        for (attr in json) {
            target = json[attr]; // attr就是属性，target就是目标

            if (attr === 'opacity') {
                now = Math.round(getStyle(obj, 'opacity') * 100); // 当前的位置
            } else {
                now = parseInt(getStyle(obj, attr)); // 当前的位置
            }
            dir = (target - now) / 10;
            dir = dir > 0 ? Math.ceil(dir) : Math.floor(dir);
            now += dir;

            if ((now >= target && dir > 0) || (now <= target && dir < 0)) {
                now = target;
            }

            if (attr === 'opacity') {
                obj.style.opacity = now / 100;
                obj.style.filter = 'alpha(opacity=' + now + ')';
            } else {
                obj.style[attr] = now + 'px';
            }

            if (now !== target) {
                onOff = false;
            }

        }

        if (onOff) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}