var images=document.getElementsByClassName('carousel')[0].getElementsByTagName('img');
var list=document.getElementsByClassName('carousel')[0].getElementsByTagName('li');
var timer;
var i=0;

function show(){
    images[i].style.display='block';
    list[i].style.background="red";
}
show();

function hide(){
    for(var a=0;a<list.length;a++){
        images[a].style.display='none';
        list[a].style.background="white";
    }
}

function play(){
    timer=setInterval(function(){
        i++;
        if(i==images.length-1){
            i=0;
        }
        hide();
        show();
    },2000)
}
play();

var carousel=document.getElementsByClassName('carousel')[0];
carousel.onmouseover=function(){
    clearInterval(timer);
}
carousel.onmouseout=function(){
    play();
}

for(var b=0;b<list.length;b++){
    list[b].index=b;
    list[b].onmouseover=function(){
        hide();
        this.style.background="red";
        images[this.index].style.display='block';
    }
}
// 轮播图结束

var student=document.getElementById('student');
student.onclick=function(){
    if(student.style.animationPlayState=='running'){
        student.style.animationPlayState='paused';
    }else{
        student.style.animationPlayState='running';
        student.style.backgroundColor='rgba(62, 255, 3, 0.658)';
    }
}
// 小人运动结束





