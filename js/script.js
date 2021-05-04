$(function(){
	toggleBackToTop();
	// hiện thanh menu khi qua portfolio
	$(".portfolio button").click(function(event) {
		/* Act on the event */
		$(this).addClass("active");
		$(this).siblings('button').removeClass('active');
		var eightDivs = $(".portfolio .row > div");
		var data = $(this).attr("data");
		if(data == undefined){
			eightDivs.show();
			return;
		}
		var showDivs = $(".portfolio .row > div[data="+data+"]");
		
		var hideDivs = eightDivs.not(showDivs);

		showDivs.show();
		hideDivs.hide();
	});
	// hiện thanh menu
	$(window).scroll(function(envent){
		console.log($(window).scrollTop());
		if($(window).scrollTop() >= $("#portfolio").offset().top -1) {
			$(".navbar").addClass('fixed-top');
			$("header").addClass('dummy-padding');

		}
		else {
			$(".navbar").removeClass('fixed-top');
			$("header").removeClass('dummy-padding');
		}
		toggleBackToTop();
	});
	$(".backtotop").click(function(event) {
		//vd:  2px/ms
		var v = 2;
		var currentPositionY = $(window).scrollTop();
		var top = 0;
		var distance = currentPositionY - top;
		var duration = distance / v;
		$("html,body").stop().animate({scrollTop:0}, duration);
	});
	// cho thanh menu hiện khi qua trang portfolio
	$("header nav ul li a").click(function(event){
		event.preventDefault();
		var hash = $(this).attr("href");
		if (hash) {
			var target = $(hash);
			targetTop = target.offset().top;
			var v = 2;
			var currentPositionY = $(window).scrollTop();

			var distance = Math.abs(currentPositionY - targetTop);
			var duration = distance / v;
			$("html,body").stop().animate({
				scrollTop: targetTop},
				
				duration, function() {
					window.location.hash = hash;
					/* stuff to do after animation is complete */
			});
			

		}

		// $("html,body").stop().animate({
		// 	scrollTop: 
		// 	param1: value1,
		// 	param2: value2},
		// 	speed, function() {
		// 	/* stuff to do after animation is complete */
		// });
	})
});

// hàm backtotop khi giá trị thanh cuộn khác không thì sẽ ẩn nút backtotop
// và ngược lại thì sẽ hiện nút backtotop
function toggleBackToTop() {
	if ($(window).scrollTop() == 0) {
		$(".backtotop").stop().hide();
	}
	else {
		$(".backtotop").stop().show();
	}
}

