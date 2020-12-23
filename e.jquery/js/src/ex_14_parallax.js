(function($){
    var win = $(window);

    var viewBox = $('#viewBox');
    var viewBoxHeight = viewBox.outerHeight();
    var viewDiv = viewBox.children('div');

    var sampleBox = $('#sampleBox');
    var sampleUl = sampleBox.children('ul');
    var sampleList = sampleUl.children('li');
    var sampleOffset = sampleBox.offset().top;
    
    win.on('scroll', function(e){
       var winSt = win.scrollTop();
       var setScroll = winSt / viewBoxHeight * 100;
    //    console.log(winSt);

    var i = 0;
    for( ; i<viewDiv.length-1; i++){
        viewDiv.eq(i).css({ bottom : -(setScroll*(10 - i) * 10)+'px' });
    }

    // viewDiv.eq(0).css({ bottom : -(setScroll*100)+'%' }); //처음만 고정처리
    // viewDiv.eq(1).css({ bottom : -(setScroll*90)+'%' });
    // viewDiv.eq(2).css({ bottom : -(setScroll*80)+'%' });
    // viewDiv.eq(3).css({ bottom : -(setScroll*70)+'%' });
    // viewDiv.eq(4).css({ bottom : -(setScroll*60)+'%' });
    // viewDiv.eq(5).css({ bottom : -(setScroll*50)+'%' });
    // viewDiv.eq(6).css({ bottom : -(setScroll*40)+'%' });
    // viewDiv.eq(7).css({ bottom : -(setScroll*30)+'%' });
    // viewDiv.eq(7).css({ bottom : -(setScroll*20)+'%' });
    });


    // sampleBox image영역
    if( winSt+viewBoxHeight > sampleOffset ){
        var winR = (winSt+viewBoxHeight)-sampleOffset;
        console.log(winR);
        sampleList.css({ backgroundPositionY: -(winR/5) + 'px' });


    }


})(jQuery);