// header.js

//headBox 영역 제어 =========================
// 네비게이션
var headBox = $('#headBox');
var gnbBox = $('#gnbBox');
var gnbArea = $('.gnb_area');
var gnbUl = gnbArea.children('ul');
var gnbDt = gnbBox.find('dt')
var gnbDtLink = gnbBox.find('dt').find('a');
var gnbDd = gnbBox.find('dd')
var gnbDdLink = gnbBox.find('dd').find('a');

var gnbBtn = $('.gnb_btn');
var gnbClose = $('.gnb_close_btn');


// 함수 정의내리기
var pcHeaderFn = function(){
	//mouseenter시에 dd 나타나기
	gnbDtLink.on('mouseenter focus',function(){
		gnbDd.stop().slideDown();
		$(this).parents('li').addClass('active');
		$(this).parents('li').siblings().removeClass('active');

		headBox.addClass('active');
	});

	//mouseleave시에 dd 사라지기
	gnbBox.on('mouseleave',function(){
		gnbDd.stop().slideUp();
		gnbBox.find('li').removeClass('active');

		headBox.removeClass('active');
	});

	//blur시에 dd 사라지기
	gnbDdLink.eq(-1).on('blur',function(){
		gnbDd.stop().slideUp();
		headBox.removeClass('active');
	});
	//dd mouseenter 시 속성
	gnbDdLink.on('mouseenter focus',function(){
		$(this).css({color:'#E43D30', fontWeight:'bold'});
		$(this).parent('li').siblings().find('a').removeAttr('style');

		$(this).parents('li').addClass('active');
		$(this).parents('li').siblings().removeClass('active');
	});
	gnbDdLink.on('mouseleave blur',function(){
		$(this).removeAttr('style');
	});

	//mousewheel 시, header 나왔다가 들어왔다가
	win.on('mousewheel DOMMouseScroll',function(e){
		var eo = e.originalEvent;
		var delta = eo.wheelDelta;
		// console.log(delta)
		if(delta <= 0){
			headBox.hide();
			} else {
				headBox.show();
			}
});
	// 끝 pcHeaderFn
};


	//스크롤시 headBox 색상 생성
	var win = $(window);
	var winH = win.outerHeight();
	var winW = win.outerWidth();
	var myScroll;

	var productBox = $('#productBox');
	var iconLi = productBox.find('.product_group').find('li');




// ==================
//메뉴 버튼 누르면 옆에서 메뉴 나오기(mobile, tablet)
var mobileHeaerFn = function(){
	gnbArea.css({position:'fixed', width: winW, height: winH, maxWidth:'320px'});
	
	gnbBtn.on('click',function(e){
		e.preventDefault();
		gnbArea.show();
		gnbArea.addClass('active');
		
		gnbDtLink.on('mouseenter focus',function(){
			$(this).parents('dt').next('dd').stop().slideDown();
			$(this).parents('li').siblings().find('dd').stop().slideUp();
		});
	});
	gnbClose.on('click',function(e){
		e.preventDefault();
		gnbArea.removeClass('active');
	});
	
	//  끝 mobileHeaerFn
};


// 디바이스 너비 파악하여 알맞은 header 보여주기
var deviceHeader = function(){
	if(winW > 1200){
		pcHeaderFn();
	} else if (winW > 940){
		pcHeaderFn();
	} else if (winW > 640){
		mobileHeaerFn();
	} else {
		mobileHeaerFn();
	}
}
// 최초 로드시 너비 파악하여 맞는 header 보여주기
deviceHeader();

// 반응형 header 기능(창 너비에 따라서 다르게)
win.on('resize',function(e){
	deviceHeader();
});