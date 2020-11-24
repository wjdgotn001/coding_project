(function($){

    // var win = $(window);
    var web = $('html, body');
    var wrap = $('#wrap');
    var permission = true;
    var count = 0;
    var pageOffset = [];
    var pageRoll = $('.page_roll');
    var i = 0;
    for( ; i < pageRoll.length ; i += 1){
        pageOffset[i] = pageRoll.eq(i).offset().top;
    }
    // console.log(pageOffset);



    web.animate({scrollTop:0}); //새로고침 시 가장 상단에서 시작.

    wrap.on('mousewheel DOMMouseScroll',function(e){ //firefox는 DOMMouseScroll만 적용!
        e.preventDefault();
        if(permission){
            permission = false;

        // console.log(e.originalEvent.detail); //파이어폭스
        // console.log(e.originalEvent.wheelDelta); //해당이벤트 안에 (originalEvent)객체 내부에 (wheelDelta)마우스휠 움직인 값을 확인 <파이어폭스 외 다른 브라우저>

        var eOriginal = e.originalEvent;
        //수치값을 가질 수 있는지 여부확인(반대성향으로 처리)
        // console.log(!eOriginal.wheelDelta);
        var mouseWheel;
        if(!eOriginal.wheelDelta){
            //firefox브라우저에서 처리
            mouseWheel = eOriginal.detail * -40; // 3, -3이므로 -40을 곱하여 처리(동일결과 도출을 위해서)
        }else{
            //firefox이외의 브라우저
            mouseWheel = eOriginal.wheelDelta; // -120, 120
        }
        // console.log(mouseWheel);

        if(mouseWheel < 0 && count < pageRoll.length-1 ){
            //휠을 아래로 스크롤
            count += 1;
        }else if(mouseWheel > 0 && count > 0){ 
            //휠을 위로 스크롤
            count -= 1;
        }
        // console.log(count , ':' , pageOffset[count]);
        web.animate({scrollTop:pageOffset[count] + 'px'}, function(){
            setTimeout(function(){
                permission = true;
            }, 100);
        });

        // ================================================

        //터치마우스 or 노르북에 있는 터치패드 or 트랙패드... 등의 경우는
        //수치가 일정하지 않다. -> if문을 이용하여 처리
    }
    });

})(jQuery);
