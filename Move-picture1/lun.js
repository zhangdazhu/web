// var flase = document.getElementsByClassName('flase');
// var one = document.getElementsByTagName('img');
// var two = document.getElementsByTagName('li')

// var c = 0;
// var timer = setInterval(function () {
// 	c++;
// 	if (c==5) {
// 		c = 0;
// 	}else{
// 		c = c;
// 	}
// 	for (var i = 0; i < one.length; i++) {
// 		one[i].style.display = "none";
// 		two[i].style.background = "black";
// 	}
// 	one[c].style.display = "block";
// 	two[c].style.background = "red";
// },2000)

	var c = 0;
    var timer = setInterval(function(){
    c ++;
    c = c==5?0:c;
    $(".flash img").eq(c).show().siblings("img").hide();
    $(".flash ul li").eq(c).css('background','red').siblings('li').css('background','black');
},500)

$(document).ready(function(){
	  $(".flash").hover(function(){
	    clearInterval(timer);
	    },function(){
	     timer = setInterval(function(){
			    c ++;
			    c = c==5?0:c;
			    $(".flash img").eq(c).show().siblings("img").hide();
	     	    $(".flash ul li").eq(c).css('background','red').siblings('li').css('background','black');
			    },500)
	  });


	$(".flash ul li").mouseenter(function(){
		 c = $(this).index();//h获得li的系号传给c
		 $(".flash img").eq(c).show().siblings("img").hide();
	     $(".flash ul li").eq(c).css('background','red').siblings('li').css('background','black');
    });
});
