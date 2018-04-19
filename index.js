//随机出现一个地鼠
function showMouse() {
    //random:随机数，可以获取一个[0,1)范围内的随机数字
    //floor:表示向下取整
    var index = Math.floor(Math.random() * 16);
    $('img:eq(' + index + ')').animate({
        height: '70px'
    }).delay(2000).animate({//延迟2000ms再回去
        height: 0
    })
}

//每隔一段时间重复做一件事
setInterval(function(){
    showMouse();
    showMouse();
    // showMouse();
},1000);

//锤子往下砸的操作 mousedown:鼠标按下 mouseup:鼠标松开
$('body').mousedown(function(){
    $(this).css({
        cursor:'url(image/cursor-down.png),auto'
    })
}).mouseup(function(){
    $(this).css({
        cursor:'url(image/cursor.png),auto'
    })
})

//砸中地鼠的操作
var score = 0;
$('img').click(function(){
    //砸中一次加10分
    score += 10;
    //修改页面上的得分
    $('p span').html(score);
    //砸中之后地鼠立马消失
    $(this).stop(true,true).animate({
        height:0
    })
    // $(this).css({
    //     animation:'moveIn linear 0.5s both'
    // })
    // var that = this;
    // //timtout:超时时间
    // //延迟一段时间做什么事
    // setTimeout(function(){
    //     $(this).css({
    //         animation:'none',
    //         height:0
    //     })
    // },500)
})