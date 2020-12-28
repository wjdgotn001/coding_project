// ex_16_map.js


var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// 37.26615737532537, 127.03051864132945


var MysetMap = function(lat, lng){

    var options = { //지도를 생성할 때 필요한 기본 옵션
    	center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
    	level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var markerPosition  = new kakao.maps.LatLng(lat, lng); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition });
    
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    // map.setZoomable(false);
    // var zoomControl = new kakao.maps.zoomControl();
    // map.addContrl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
};
MysetMap(37.26615737532537, 127.03051864132945);




// ==============================================
(function($){
    var store = $('.store');
    var storeLi = store.find('li');

    storeLi.on('click',function(e){

        e.preventDefault();
        $('#map').empty();

        var liLink = $(this).children('a');
        //parseInt -> 숫자를 정수로 변환 
        //parseFloat -> 숫자를 소수점까지 변환 
        var liLat = parseFloat(liLink.attr('data-x')); //문자의 값을 숫자로 변환해야한다.  (위도,경도를 숫자로 확인가능)
        var liLng = parseFloat(liLink.attr('data-y'));
        MysetMap(liLat, liLng);


        $(this).addClass('action');
        $(this).siblings().removeClass('action');
    });
 


})(jQuery);
