$(function() {

	$('#nav-fixed').append($('#nav-list').clone(true));
	$('.nav-fixed-box').hide();
	$('.top_box').hide();
	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			$('.nav-fixed-box').show(300);
			if ($(window).scrollTop() > 1000){
				$('.top_box').show(200);
			}else{
				$('.top_box').hide(200);
			}
			
		} else {
			$('.nav-fixed-box').hide(300);
		}
		
	})
	$('.top_box').mouseenter(function(){
		$('.top_box').addClass('topAdd');
		$('.top img').attr('src',"img/nav-footer/fanhui.png");
	})
	$('.top_box').mouseleave(function(){
		$('.top_box').removeClass('topAdd');
		$('.top img').attr('src',"img/nav-footer/fanhui2.png");
	})
	
	
	
	$('.banner-list .banner-img').eq(0).addClass('opct');
	$('.banner .list li').eq(0).css('background', '#333');
	var timer = setInterval(change, 4000);
	var n = 0;
	var i = 0;

	function change() {
		n++;
		if (n > 2) {
			n = 0;
		}
		$('.banner-list .banner-img').eq(n).addClass('opct').siblings().removeClass('opct');
		$('.banner .list li').eq(n).css('background', '#333').siblings().css('background', '#f9f9f9');
	}
	$('.banner .list li').mouseenter(function() {
		i = $(this).index();
		$('.banner-list .banner-img').eq(i).addClass('opct').siblings().removeClass('opct');
		$(this).css('background', '#333').siblings().css('background', '#f9f9f9');
		n = i;
	})
	$('.banner-box').mouseenter(function() {
		clearInterval(timer);
	})
	$('.banner-box').mouseleave(function() {
		timer = setInterval(change, 4000);
	})
})