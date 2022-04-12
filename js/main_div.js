$('.left-nav .right ul li').mouseenter(function(){
    $(this).css({'background':'#eee'});
    $(this).find('div').css({'background':'#cccccc' }).show();//显示div
    $('.div2').not($(this).find('div')).hide();
    $('.left-nav .right ul li').not($(this)).css({'background':'#fff'});
});
$('.left-nav .right ul li').mouseleave(function(){
    $(this).find('div').hide();//隐藏div
    $(this).css({'background':'#fff'})
});