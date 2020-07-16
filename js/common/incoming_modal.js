//incoming modal 창
var incomingModal = $('.incoming_modal');
var modalCloseBtn = incomingModal.find('.close_btn').children('button');
var modalBackground = $('.incoming_bg');

gnbUl.children('li').eq(1).nextAll().find('a').on('click',function(e){
	e.preventDefault();
	incomingModal.fadeIn();
	console.log('!!!!')
});

modalCloseBtn.on('click',function(e){
	e.preventDefault();
	incomingModal.fadeOut();
});
modalBackground.on('click',function(e){
	e.preventDefault();
	incomingModal.fadeOut();
});
