(function($){
    /** list
     *  카드 js에서 구현하기
     *  json파일 생성해서 불러오기/이미지 리스트처리
     *  생성된 ul의 가로 크기를 li의 갯수만큼 담을 수 있도록 수정
    */

   // 실제 테이터형식에서는 
   [
       {'title':'카드제목', 'content':'카드내용', 'imgSrc':'tj_rollcake_001.jpg', 'imgAlt':'이미지설명'},
       {'title':'카드제목', 'content':'카드내용', 'imgSrc':'tj_rollcake_001.jpg', 'imgAlt':'이미지설명'},
       {'title':'카드제목', 'content':'카드내용', 'imgSrc':'tj_rollcake_001.jpg', 'imgAlt':'이미지설명'},
       {'title':'카드제목', 'content':'카드내용', 'imgSrc':'tj_rollcake_001.jpg', 'imgAlt':'이미지설명'},
       {'title':'카드제목', 'content':'카드내용', 'imgSrc':'tj_rollcake_001.jpg', 'imgAlt':'이미지설명'}
   ];


   var cardData = [];
   var k =0, l, sampleObj ={};
   var imgT = 'tj_rollcake_';
   var url = "../img/minicake/rollcake/";
   for(; k<16; k+=1){
       if(k < 9){
           l = '00' + (k+1); //1씩 +++ //8 -> 009
       }else if(k < 99){
           l = '0' + (k+1); //9 -> 010
       }

       sampleObj.title = 'title' + l;
       sampleObj.imgSrc = imgT + l + '.jpg';
       sampleObj.imgAlt = imgT + l + '이미지설명';
       cardData[k] = sampleObj;

    //    cardData[k] = imgT + l + '.jpg';
       console.log(cardData);

   };









    var win = $(window);
    var cardBox = $('#cardBox');
    cardBox.append('<ul></ul>'); //ul을 생성 , 바로 append하면 다른ul을 가져올 수 있다.

    var cardUl = cardBox.children('ul');
    var liText = '<li><a><div class="img_temp"><img></div><span></span></a></li>';
    var url = '../img/';

    var card = 0;
    for(; card<20; card += 1){
        cardUl.append(liText);
    }
    var cardLi = cardUl.children('li');
    // ul의 크기설정할 때 필요한 것
    // 1. li의 가로크기와 margin값
    // 2. 브라우저의 크기값(기준크기)
    var cardLiWidth = cardLi.eq(0).outerWidth(); //margin값을 제외한 가로값(padding+border+width)
    var cardMargin = cardLi.eq(0).outerWidth(true) - cardLiWidth; //margin값까지 계산한 가로값(padding+border+width+margin)





// 여기서부터 브라우저크기가 변경되면 다시 수행!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var BrowserSet = function(){
    cardLi.removeAttr('style'); //함수가 재수행하면 li의 style속성제거

    var winW = win.outerWidth();
    var liLen = parseInt( winW / (cardLiWidth + cardMargin) );
    //정수화처리 : parseInt()
    // 버림, 올림, 반올림 : Math.floor(), Math.ceil(), Math.round()
    var ulWidth = ( (cardLiWidth + cardMargin) * liLen ) - cardMargin;
    cardUl.css({width: ulWidth + 'px'}); //마지막에 들어가는 margin값을 뺀다.



    // li 설정 ======================================================================
    // 1. li의 가로행에 들어가는 마지막 순서는 margin값을 제거한다.
    // 2. 각 행에 있는 마지막순서의 리스트들은 모두 margin값을 제거한다.
    var liN = 0;
    var liNth = Math.ceil(cardLi.length / liLen); //한번에 들어갈 갯수를 파악
    var n;
    
    for( ; liN<liNth ; liN +=1 ){
        n = (liLen * liN) -1;
        cardLi.eq(n).css({marginRight:0});
        cardLi.eq(n-liN).css({left:lin*(cardLiWidth + cardMargin)});
    };
    // 가로에 4개씩 들어가있는 상태라면
    // 각행의 4번째 마다( eq(4*n-1) ) 마진값을 없애라. x -> 3,7,11,15....

    // 가로에 6개씩 들어가있는 상태라면
    // 각행의 6번째 마다( eq(6*n-1) ) 마진값을 없애라. x -> 5, 11, 17, 23....

    
};//BrowserSet 함수
BrowserSet();

win.on('resize',function(){
    BrowserSet();
});



})(jQuery);
