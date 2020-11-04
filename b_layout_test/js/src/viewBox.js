
(function($){
  var viewBox = $('#viewBox');

  var backImg = viewBox.find('.back_image');
  var backLi = backImg.find('li');
  // 순서 언급 시에는 eq()메소드를 사용한다. 0~ (뒤에서 사용할 때는 -1,-2...fa-js 으로 사용한다.)
  // 복제의 기능은 clone() -> 복제된 기능을 원본처럼 수행하게 하려면 true 매개변수를 입력한다.

  
  // 마지막요소 복제에 의한 내용변경
  var backLiLast = backLi.eq(-1).clone(); //마지막요소를 복제
  backImg.prepend(backLiLast); //복제한 요소를 맨 앞에 추가

  var reBackLi = backImg.find('li'); //복제 후 갯수파악
  // console.log(reBackLi.length);
  backImg.css({ 'marginLeft' : -100 + '%' , 'width': reBackLi.length * 100 + '%' }); //viewBox 크기변경
  reBackLi.css({'width': (100 / reBackLi.length) + '%' }); //내부요소 크기변경

  // 슬라이드 버튼
  var slideBtn = viewBox.find('.slide_btn');
  var nextSlideBtn = slideBtn.children('button').eq(0); //next버튼
  var prevSlideBtn = slideBtn.children('button').eq(1); //prev버튼
  // console.log(nextSlideBtn,prevSlideBtn);
  var slideN = 0;
  nextSlideBtn.on('click', function(e){
    // a, button요소처럼 이벤트기능이 내장되어있는 요소는 미리 해당기능을 제거할 필요가 있다. 
    // e에 대한 것을 하지마세요. (preventDefault) 
    e.preventDefault(); // 기존이벤트 제거
    slideN += 1;
    // if(){}else{}
    // 콜백함수 
    backImg.stop().animate({'left': slideN * -100 + '%' }, function(){
      if(slideN >= backLi.length-1){
        slideN = -1;
        backImg.stop().css({'left': slideN * -100 + '%' });
      }
    });
  });
  prevSlideBtn.on('click', function(e){
    e.preventDefault();
    slideN -= 1;

    backImg.stop().animate({'left': slideN * -100 + '%' }, function(){
      if(slideN <= -1 ){
        slideN = backLi.length-1;
        backImg.stop().css({'left': slideN * -100 + '%' });
      }
    })
  })

})(jQuery);

// jQuery 선택자
// #box -> $('#box');
// .box -> $('.box');
// ul>li -> $('ul>li'); -> $('ul').children('li');
// ul li -> $('ul li'); -> $('ul').find('li');
// dt+dd -> $('dt+dd'); -> $('dt').next('dd');
// dt~dd -> $('dt~dd'); -> $('dt').nextAll('dd');
// 이전 형제선택         -> $('dt').prev('dd');
// 이전 형제모두         -> $('dt').prevAll('dd');
// 자신을 제외한 형제    -> $('dt').siblings('dd');
// 부모형제를 선택       -> $('dt').parent('dl');  $('dt').parentUntil('dl');

// ===============================================================================

/*
선택자.style.backgroundColor = '#acf';
선택자.style = backgroundColor:#acf; color:#fff;
선택자.css({'속성명':'속성값', '속성명':'속성값', ......});
*/

/*
var reFn = function(i){
  i += 1;
  console.log(i);
  if(i < 20){
    reFn(i);
  } else {
    console.log( '20이 되었습니다.');
  }
}
reFn(1);
*/

/*
jQuery에서 콜백함수란?

하나의 메소드(함수)를 수행한 후에, 다시 함수를 수행할 수 있도록 처리하는 형태
단, animation기능을 가진 메소드 내 및 이벤트에서만 콜백함수의 기능을 가질 수 있다.

예)
선택자.on('click', function(){
  선택자.animate({기능수행},function(){})
})
*/