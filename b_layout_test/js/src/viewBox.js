// clearInterval(setInterval함수이름);

/*
var count = 0;

var Go = setInterval(function(){
  count += 1;
  console.log(count);
  if( count > 20 ){
    clearInterval(Go);
  }
}, 1000);
*/

(function($){
  var count = 0;
  var Start;

  var MyCount = function(){
    Start = setInterval(function(){
      count +=1;
      console.log(count);
    },500 );
  };
  // MyCount();


  $('h1').on('mouseenter', function(){
    clearInterval( Start );
  });
  $('h1').on('mouseleave', function(){
    // count = 0; //h1에 갔다가 마우스를 떼었을때 숫자 초기화.
    // MyCount();
  });


// ================================================



  var viewBox = $('#viewBox');
  viewBox.css ({ 'overflow': 'hidden'});

  var backImg = viewBox.find('.back_image');
  var backLi = backImg.find('li');
  var permission = true; //귀신의 집..?

  // 순서 언급 시에는 eq()메소드를 사용한다. 0~ (뒤에서 사용할 때는 -1,-2...fa-js 으로 사용한다.)
  // 복제의 기능은 clone() -> 복제된 기능을 원본처럼 수행하게 하려면 true 매개변수를 입력한다.


  var indicator = viewBox.find('.slide_indicator');
  var indiLi = indicator.find('li');

  
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

  var slideN = 0; //최초의 값
  var timed = 2000; //2000 -> 2초 //일정시간마다 처리하는 시간


  // 다음버튼클릭 ====================
  nextSlideBtn.on('click', function(e){
    // a, button요소처럼 이벤트기능이 내장되어있는 요소는 미리 해당기능을 제거할 필요가 있다. 
    // e에 대한 것을 하지마세요. (preventDefault) 
    e.preventDefault(); // 기존이벤트 제거
    if(permission){
      permission = false;
      
      slideN += 1;
      // if(){}else{}
      // 콜백함수 
      backImg.stop().animate({'left': slideN * -100 + '%' }, function(){
        if(slideN >= backLi.length-1){
          slideN = -1;
          backImg.stop().css({'left': slideN * -100 + '%' });
        }
        setTimeout(function(){
          permission=true;
        }, 100);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }
  });
   // 이전버튼클릭 ====================
  prevSlideBtn.on('click', function(e){
    e.preventDefault();
   if(permission){ 
      permission = false;
      slideN -= 1;
      backImg.stop().animate({'left': slideN * -100 + '%' }, function(){
        if(slideN <= -1 ){
          slideN = backLi.length-1;
          backImg.stop().css({'left': slideN * -100 + '%' });
        }
        setTimeout(function(){
          permission = true;
        }, 100);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }
  });
  // 인디케이터===========================================================
  indiLi.on('click', function(e){
    e.preventDefault();
    var its = $(this);
    slideN = its.index();
    backImg.stop().animate({ 'left': slideN * -100 + '%' }) 
    // indiLi.removeClass('action');
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  });
// 인디케이터 포커스 처리 ===============================
indiLi.children('a').on('focus', function(e){
  e.preventDefault();
  var its = $(this);
  slideN = its.parent().index(); 
});
// 일정시간마다 자동수행/마우스 올릴경우 일시정지 =============================
var startInterval;
var Start = function(){
  startInterval = setInterval(function(){
   //1. trigger() 기능 -> 대신처리하는 방아쇠역할
   //nextSlideBtn.trigger('click');

   //2.직접 카운트 처리하여 수행
   slideN += 1;
      // if(){}else{}
      // 콜백함수 
      backImg.stop().animate({'left': slideN * -100 + '%' }, function(){
        if(slideN >= backLi.length-1){
          slideN = -1;
          backImg.stop().css({'left': slideN * -100 + '%' });
        }
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
  }, timed);
};
Start();

var StopSlide = function(){
  clearInterval( startInterval );
};

/*
1. viewBox에 마우스 올리면 일시정지
viewBox.on('mouseenter',function(){
  clearInterval( startInterval );
});
*/

/*
2. viewBox에서 마우스 벗어날 경우 재실행
viewBox.on('mouseleave',function(){
  Start();
});
*/

// 1,2번기능 통합 / 내용에 괄호 쓰지 않는다.
viewBox.on({
  'mouseenter' : StopSlide,
  'mouseleave' : Start
})

// jQuery end
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