window.onload = function() {
    //获取元素
    var img = document.getElementById("BigPhoto");
    var dot = document.getElementById("dot");
    var items = dot.getElementsByTagName("ul");
    var li = items[0].getElementsByTagName("li");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    
    
    var num = 0;
    var timer = null;

    var arrUrl = ["images/pinkBigPicture01.jpg","images/pinkBigPicture02.jpg","images/pinkBigPicture03.jpg"];

    left.onclick = function(ev){
        num --;
        if (num = -1){
            num = arrUrl.length - 1;
        }
        changeImg();
    }
    right.onclick = function(ev){
        num ++;
        if (num == arrUrl.length){
            num = 0;
        }
        changeImg();
    }


    //点击小圆点切换
    for (var i = 0; i < arrUrl.length; i ++){
        li[i].index = i;
        li[i].onclick = function(ev){
            num = this.index;
            changeImg();
        }
    }

    //延迟一秒执行自动切换
    setTimeout(autoPlay(),1000);

    //鼠标移入清除定时器，鼠标移出恢复
    img.onmouseover = function(ev){
        clearInterval(timer);
    };
    img.onmouseout = autoPlay;

    //图片切换函数，改变位置，样式
    function changeImg(){
        img.src = arrUrl[num];
        for(var i = 0; i < li.length; i++){
            li[i].className = "";
        }
        li[num].className = "active";
    }
    function autoPlay(){
        timer = setInterval(function(){
            num ++;
            num = num % arrUrl.length;
            changeImg();
        },2000);
    }
}

//设置定时器