var wrap = document.getElementsByClassName('wrap')[0]
var face = document.getElementsByClassName('face')
var bt = document.getElementsByTagName('button')
var p = document.getElementsByTagName('p')


// 暂停开始
bt[0].onclick = function(){
    wrap.style.animationPlayState = "paused";
}
bt[1].onclick = function(){
    wrap.style.animationPlayState = "running";
}

// 数字变化
var timer = 1;
bt[2].onclick = function(){
    var a = 0;
    clearInterval(timer);
    timer = setInterval(function(){
       a++;
       for(var i = 0;i < p.length; i++){
           p[i].innerHTML = a + i;
       }
    },500)
    bt[3].onclick = function(){
        clearInterval(timer);
    }
}

// 颜色变化
var timer = 1
bt[4].onclick = function(){
    clearInterval(timer);
    timer = setInterval(() => {
        for(var i = 0; i < face.length; i++){
            face[i].style.background = '#' + Math.random().toString(16).slice(2,8);
        }
    }, 500);
}

// 解散
bt[5].onclick = function(){
   for(var i = 0; i < face.length; i++){
       face[0].style.transform = 'translateZ(50px)';
       face[2].style.transform = 'rotateY(90deg) translateZ(50px)';
       face[4].style.transform = 'rotateX(90deg) translateZ(50px)';
       face[1].style.transform = 'translateZ(-50px) rotateY(180deg)';
       face[3].style.transform = 'rotateY(90deg) translateZ(-50px) rotateY(180deg)';
       face[5].style.transform = 'rotateX(90deg) translateZ(-50px)';
       face[i].style.width = 100 + 'px';
       face[i].style.height = 100 + 'px';
       wrap.style.transformOrigin = "25px 25px";
       wrap.style.animation = 'turn  0.5s linear infinite';
       (function(j){
          setTimeout(function(){
            wrap.style.animation = 'turn 0';
            face[j].style.transform = 'translate(0)';
            face[j].style.borderRadius = 8 + 'px';
            face[0].style.left = 0;
            face[0].style.top  = 0;
            face[1].style.left = 50 + '%';
            face[1].style.top  = 0;
            face[2].style.left = 100 + '%';
            face[2].style.top  = 0;
            face[3].style.left = 0;
            face[3].style.top  = 80 + '%';
            face[4].style.left = 50 + '%' ;
            face[4].style.top  = 80 + '%';
            face[5].style.left = 100 + '%';
            face[5].style.top  = 80 + '%';
        },5000)
       }(i))
   }
   
}

// 组合
bt[6].onclick = function(){
    for(var i = 0 ;i < face.length; i++){
       face[0].style.transform = 'translateZ(150px)';
       face[2].style.transform = 'rotateY(90deg) translateZ(150px)';
       face[4].style.transform = 'rotateX(90deg) translateZ(150px)';
       face[1].style.transform = 'translateZ(-150px) rotateY(180deg)';
       face[3].style.transform = 'rotateY(90deg) translateZ(-150px) rotateY(180deg)';
       face[5].style.transform = 'rotateX(90deg) translateZ(-150px)';
       face[i].style.width = 300 + 'px';
       face[i].style.height = 300 + 'px';
       wrap.style.transformOrigin = "150px 150px";
       wrap.style.animation = 'turn  45s linear infinite';

       face[i].style.left = 0;
       face[i].style.top  = 0;
           
    }
}

//恭喜发财
bt[7].onclick = function(){
    for(var i = 0; i < face.length; i++){
        face[i].style.width = 100 + 'px';
        face[i].style.height = 100 + 'px';
        wrap.style.animation = 'turn 0';
        face[i].style.transform = 'translate(0)';
        face[i].style.borderRadius = 8 + 'px';
        face[0].style.left = 20 + '%';
        face[0].style.top  = 0;
        p[0].innerHTML = '朋';
        face[1].style.left = 70 + '%';
        face[1].style.top  = 0 + '%';
        p[1].innerText = '友';
        face[2].style.left = 0;
        face[2].style.top  = 70 + '%';
        p[2].innerText = '恭';
        face[3].style.left = 30 + '%';
        face[3].style.top  = 70 + '%';
        p[3].innerText = '喜';
        face[4].style.left = 60 + '%' ;
        face[4].style.top  = 70 + '%';
        p[4].innerText = '发';
        face[5].style.left = 90 + '%';
        face[5].style.top  = 70 + '%';
        p[5].innerText = '财';
    }
}


