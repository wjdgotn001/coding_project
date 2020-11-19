
/* 
1.브라우저의 가로 크기값 확인하기
2.내가 원하는 기준치로 설정된 범위(이름을 설정해서 처리)에 맞는지 파악하기(mobile,tablet,pc,laptop,pc....)
3.브라우저의 크기가 변경될 때('resize') 기존 가로값과 변경된 가로값을 비교하여, 일치하지 않을 경우에 일부는 재처리
*/

(function($){
    
    // var winW = win.css('width'); //문제점 1.문자로 값을 가져온다.(숫자로 변환해줘야함) 2.padding,margin,border의 값을 제외하고 가져온다.

    // 선택자.width() -> 가로값을 수치로 계산
    // .innerWidth() -> padding을 포함한 가로값
    // .outerWidth() -> border(padding포함한)값을 포함한 가로값
    // .outerWidth(true) -> margin(border,padding포함한)값을 포함한 가로값
// =========================================================================
    // 기준치를 설정
    // [480, 1024, 1440, 1920];
    
    var deviceType = [
        {type:'moblie', size:480},
        {type:'tablet', size:1024},
        {type:'labtop', size:1440},
        {type:'pc', size:1920},
        {type:'pcfull'}
    ];

    // 최초 가로값 파악
    var win = $(window);
    var beforeWinW = win.outerWidth(true);

    var deviceCheck = function(winW){
        // type체크
    var myType;
    /*
    // if문==========================================
    if(winW <= deviceType[0].size){
        myType = deviceType[0].type;

    }else if(winW <= deviceType[1].size){
        myType = deviceType[1].type;

    }else if(winW <= deviceType[2].size){
        myType = deviceType[2].type;

    }else if(winW <= deviceType[3].size){
        myType = deviceType[3].type;

    }else{
        myType = deviceType[4].type;
    }
    */
    // for문============================================
    for(var i =0; i<deviceType.length ; i+=1 ){
        if(winW <= deviceType[i].size){
            myType = deviceType[i].type;
            break;
        }else{
            myType = deviceType[4].type;
        }
    } //for
    console.log(myType);
    return myType;
    }; //deviceCheck


    var winSize = deviceCheck(beforeWinW);


    // ========================================================
    win.on('resize', function(){
        
        // 바뀐 가로값 파악
        var reWinW = win.outerWidth(true);
        var afterWinSize = deviceCheck(reWinW);

        // 기존 디바이스타입과 변경된 디바이스타입이 다른 경우에 새로고침
        if(winSize !== afterWinSize){
            location.reload();
        }
    });

})(jQuery);
