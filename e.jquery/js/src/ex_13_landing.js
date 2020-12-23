(function($){

    var win = $(window);
    var conBox = $('#conBox');
    var moreBox = $('#moreBox');

    var winH = win.outerHeight() / 3; //브라우저의 높이값(3분의 1)

    var conBoxOffset = conBox.offset().top;
    var moreBoxOffset = moreBox.offset().top;
    // console.log(conBoxOffset, moreBoxOffset);


    win.on('scroll',function(e){
        var getScroll = win.scrollTop() + winH; //모니터 스크롤거리가 실시간으로 나타남
        // console.log(getScroll);
        var conScroll;


        // 스크롤값이 conBox의 offset().top에서 브라우저 높이값의 일부가 빠진만큼 < 크면 수행
        if(getScroll >= conBoxOffset - winH){
            conBox.addClass('action');
            conScroll = getScroll - (conBoxOffset - winH);
            // console.log('conScroll:',conScroll);
            conBox.css({'backgroundPositionY': (conScroll/3)+ 'px'});

        }else{
            conBox.removeClass('action');
        }
        
        // moreBox의 offset().top에서 브라우저 높이값의 일부가 빠진만큼 < 크면 수행
        // 값이 커졌을 때, moreBo offset값이 화면상단에 위치하면 수행
        //조건문에서는 앞의기능이 참일경우 뒤의 값을 수행하지 않는다.
        if(getScroll >= moreBoxOffset - (winH/2)){
            moreBox.addClass('more');
            moreBox.removeClass('action');
          }else if(getScroll >= moreBoxOffset - winH){
            moreBox.addClass('action');
            moreBox.removeClass('more');
          }else{
            moreBox.removeClass('action');
            moreBox.removeClass('more');
          }


    });

})(jQuery);
