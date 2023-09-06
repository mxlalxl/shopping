$(function() {
    // 节流阀 每次点击li不需要再滚动屏幕
    var flag = true;
    var toolTop = $(".recom").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }
    $(window).scroll(function() {
        toggleTool();
        // 3.页面滚动到某个内容区域。左侧电梯导航栏li也相应添加和删除current类
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

                }
            })
        }
    });
    // 2.点击电梯导航页面可以滚动到相应的内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        console.log($(this).index());
        // 每次点击li,就需要去往相应的位置
        // 选出对应索引号的内容区的盒子，计算其.offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面滚动效果
        $("body,html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        // 点击之后，让当前的li添加current类名，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })

})