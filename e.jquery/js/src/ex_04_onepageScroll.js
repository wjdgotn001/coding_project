// filename.js 

(function($){
// jQuery start
// 1. 스크롤시 $('headBox') 상단 고정
//    1-1 상단이동버튼 기능추가
// 2. $('.popup_dp')의 닫기버튼 클릭시 팝업창 삭제

// (1)번사용 시 : offset().top / scrollTop / on('scroll') / $(window)브라우저기준

var win = $(window);
var headBox = $('#headBox');
var navBox = $('#navBox');
var navBoxLi = navBox.find('li');
var navBoxLiA = navBox.find('a');
var topBtn = $('.top_move_btn');

// 브라우저 상단에서 떨어져있는 거리 체크
var headOffset = headBox.offset().top;

// 1-1번 보이지 않았다가 1000px 이동 후 나타나게 하기
topBtn.hide();

win.on('scroll',function(e){
// 스크롤이 이동한 위치값 파악(실시간)
   var winSt = win.scrollTop();
// console.log(winSt);

// 삼항연산 (조건) ? 참 : 거짓 ;  ->  ( ) ? : ;
// if(headOffset <= winSt){
//     headBox.css({'position':'fixed', 'top':0 , 'zIndex':1500 });
// }else{
//     headBox.removeAttr('style'); //style속성을 날리라는 뜻.
// }
(headOffset <= winSt) ? headBox.css({'position':'fixed', 'top':0 , 'zIndex':1500 }) : headBox.removeAttr('style') ;

// if(100 < winSt){
//     topBtn.stop().fadeIn();
// }else{
//     topBtn.stop().fadeOut();
// }
(100 < winSt) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); 
});//win.on

// 1-1기능추가
topBtn.on('click', ['a'] , function(e){
    e.preventDefault();

    var it = $(this).find('a');
    var itAttr = it.attr('href');                      //a요소의 연결된 선택자를 파악
    var itOffset = $(itAttr).offset().top;             //a요소의 href값이 상단에서 떨어져있는 거리 체크 //top, left만 존재
    $('html, body').animate({ scrollTop : itOffset }); //브라우저를 이동시켜라(스크롤) -> itOffset으로 파악된 거리만큼

});

// navBox클릭시 해당메뉴로 스크롤이동
navBoxLiA.on('click',function(e){
    e.preventDefault();

    var it = $(this);
    var itAttr = it.attr('href');
    var itOffset = $(itAttr).offset().top;
    $('html, body').animate({ scrollTop : itOffset }); 

});


// ===========================
// 2번 기능
var popupDp = $('.popup_dp');
var popupBtn = popupDp.find('button');
popupBtn.on('click', function(e){
    e.preventDefault();

    popupDp.remove();
});


})(jQuery);
