// jq_03-1_scroll.js

(function($){
  var win = $( window ); //따옴표 쓰지 않는다.
  var wrap = $('#wrap');
  // wrap.height(2000)
  wrap.css({'height':3000 + 'px', 'backgroundImage':'linear-gradient(45deg, #ccc, #cfa)' });

  // offset 기능
  // 선택자.offset().top , offset().left  
  // -> 브라우저기준 0,0 좌표에서부터 선택자가 얼마나 떨어져 있는지 판단하는 기능

  var fix = $('.fix');
  var offsetTop = fix.offset().top;
  console.log(offsetTop);

  win.on('scroll', function(){
    var st = win.scrollTop(); //위에서 내려온만큼 계산
    // console.log(st);

    if(offsetTop < st ){
      fix.css({'position':'fixed'});
    }else{
      // fix.css({position:'relative'});
      fix.removeAttr('style');
    }
  });

})(jQuery);