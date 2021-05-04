$(function(){
	// hàm toggleBacktotop không chạy được thì hàm sau sẽ ko chạy
	toggleBacktotop();
	// gán mãng hiển thị theo button 
	// ".portfolio button" là class selector của jquery
	// .click() là sự kiện 
	$(".portfolio button").click(function(event){
		// khi click button thì addclass "active và đồng thời những anh em của nó sẽ bỏ class "active"
		// thao tác trên CSS
		$(this).addClass("active");
		$(this).siblings('button').removeClass('active');
		// Gán giá trị theo data của thẻ
		// gán giá trị eightDivs là giá trị của những con trực tiếp của Row
		var eightDivs = $(".portfolio .row > div");
		// attr() là hàm thêm thuộc tính or lấy giá trị cho thành phần
		var data = $(this).attr("data");
		// nếu giá trị data khi lick là không xác định thì hiện tất cả các thẻ con trực tiếp và ngước lại
		if(data == undefined){
			eightDivs.show();
			return;
		}
		var showDivs = $(".portfolio .row > div[data="+data+"]");
		var hideDivs = eightDivs.not(showDivs);
		showDivs.show();
		hideDivs.hide();
	});
	// hiện thanh menu khi tới trang portfolio 
	$(window).scroll(function(event){
		// console.log hiện ở phần inspect. thường dùng để debug
		console.log($(window).scrollTop());
		// offset() là hàm xác định vị trí của phần từ điểm nào
		if($(window).scrollTop() >= $("#portfolio").offset().top -1) {
			$(".navbar").addClass('fixed-top');
			$("header").addClass('dummy-padding');
		}
		else{
			$(".navbar").removeClass('fixed-top');
			$("header").removeClass('dummy-padding');
		}
		toggleBacktotop();

	});


	// tốc độ cuộn trang html đều theo vận tốc khi nhấn thẻ a của footer
	// class backtotop trong css
	$(".backtotop").click(function(event) {
		var v = 2;
		var currentPositionY = $(window).scrollTop();
		var top = 0;
		var distance = currentPositionY - top;
		var duration = distance / v;
		$("html,body").stop().animate({scrollTop:0}, duration);
	});

// tốc độc di chuyển giữa các trang đều theo vận tốc khi click button của thanh menu
	$("header nav ul li a").click(function(event){
		// hủy bỏ event để không lây lan thuộc tính cho phần tử khác
		event.preventDefault();
		var hash = $(this).attr("href");
		if(hash) {
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
				});
		}
	})
});

// hàm backtotop khi giá trị thanh cuộn khác không thì sẽ ẩn nút backtotop
// và ngược lại thì sẽ hiện nút backtotop
function toggleBacktotop() {
	if ($(window).scrollTop() == 0) {
		$(".backtotop").stop().hide();
	}
	else{
		$(".backtotop").stop().show();
	}
}

