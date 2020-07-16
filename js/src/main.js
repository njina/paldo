// main.js
// 팔도- 메인페이지

(function($){
// jQuery 시작






// ==================
//각각 offset 파악
var iconLiArr = [];
for(var i = 0; i < 3; i++){
	iconLiArr[i] = iconLi.eq(i).offset().top;
}
win.on('scroll',function(){
	myScroll = win.scrollTop();
	if( myScroll + (winH/6*5) > iconLiArr[0]){
		iconLi.eq(0).addClass('active');
		iconLi.eq(1).addClass('active');
		iconLi.eq(2).addClass('active');
	}
	
//scroll 종료태그
});




//슬라이드배너====================================
var viewBox = $('#viewBox');
var slideWrap = $('.slide_wrap');
var slideLi = slideWrap.find('li');
var lastLi = slideLi.eq(-1).clone(true);
slideWrap.prepend(lastLi);
slideLi = slideWrap.find('li');
// console.log(slideLi.length);

slideWrap.css({width: 400 +'%', position:'relative', left:-100+'%'});
slideLi.css({width: 25 + '%'});

var  n = 0;
var bool = true;
setInterval(
	function(){
		bool = false;
		n+=1;
		slideWrap.animate({left: -n * 100 + '%'}, 1000, function(){
			if( n >= slideLi.length-1 ){
				n = 0;
				slideWrap.css({left: -n * 100 + '%'});
			bool = true;
			}
		})
	},4000);
	viewBox.on('mouseenter',function(){
		clearInterval();
	});

	

















// jQuery 종료
})(jQuery);