var timer = setTimeout(function(){
        $('.wraper').removeClass('init')
        $('.lef').css('display','none')
        $('.rig').css('display','none')
},400)
$('.every').click(function() {
    $(this).addClass('active')
    $('.wraper').addClass('init2')
    var timer = setTimeout(function(){
        $('.lef').css('display','block')
        $('.rig').css('display','block')
    },1000)
    $('.font').css('display','none')
})
$('.rig').click(function(e){
    e.stopPropagation();    
     $('.every').removeClass('active')
     $('.wraper').removeClass('init2')
     $('.font').css('display','block')
     $('.lef').css('display','none')
     $('.rig').css('display','none')
})