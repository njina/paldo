//introduce.js
//팔도스토리 > 기업소개


(function($){
	// jQuery 시작


// 페이지 개별 속성----------------------------

// 스크롤 시 animate

var contBox = $('#contBox');
var contTitle = contBox.find('.cont_title').find('p');
var contTitleOff = contTitle.offset().top;
var contBody = contBox.find('.cont_body').children('li');





//제목 나타나기
contTitle.addClass('active');

//각각 바디텍스트(li)순서대로 나타나기
var contOffArr = [];
for(var i = 0; i < 4; i++){
	contOffArr[i] = contBody.eq(i).offset().top;
}
win.on('scroll',function(){
	myScroll = win.scrollTop();
	
	for(var j=0; j < 4; j++){
		if( myScroll + (winH/6*5) > contOffArr[j] ){
			contBody.eq(j).addClass('active');
		}
	}
	//scroll 종료태그
});






	// jQuery 종료
})(jQuery);