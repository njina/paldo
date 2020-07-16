//product_detail.js
//제품 상세 설명 페이지


(function($){
	// jQuery 시작 




// 페이지 개별 속성--------------------------------------

var contBox = $('#contBox');
var bigImg = contBox.find('.big_img');
var thumImg = contBox.find('.thum_img');
thumImg.append('<ul></ul>');

var productImg = {
	'big':['bibims_con_001.png', 'bibimmen_con_039.png', 'big3_bokkimchi_men_con_001.png'],
	'thum': ['bibims_con_001.png']
};
var url = '../img/product/';
for( var i = 0; i < productImg.thum.length ; i++){
	thumImg.children('ul').append('<li><a href="#"><span>사진설명</span></a></li>');
	thumImg.find('li').eq(i).children('a').css({backgroundImage:'url('+ url + productImg.thum[i] +')'});
}
var index = 0;
bigImg.css({backgroundImage:'url('+ url + productImg.big[index] +')'});

var thumImgLink = thumImg.find('li').children('a');
thumImgLink.on('click',function(e){
	e.preventDefault();
	index = $(this).parent('li').index();
	bigImg.css({backgroundImage:'url('+ url + productImg.big[index] +')'});
});










	// jQuery 종료
})(jQuery);