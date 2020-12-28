
(function($){
    //1. 카드를 감싸는영역 크기설정, 내용 삽입
    //2. 스크롤의 진행정도 표시
    //3. 스크롤시 일정위치가 넘어가면 카드가 추가생성되게 처리
    //4. Math.random()을 이용하여 색상, 높이값을 변경 
    //5. 임시로 세팅했던 .card의 float기능은 삭제, position처리
    //6. 화면상의 행에 들어갈 위치값(left 설정)
    //7. 화면상의 열에 해당하는 위치값(top 설정)
    //8. .card_area의 높이값을 강제 설정 

    var Rn = function(){
        return Math.floor(Math.random() * 16).toString(16);
    };

    // var randomColor = '#'+ random1  + random2  + random3 ;
    // console.log(randomColor);
    //4-2 높이값 랜덤수치 변경
    var myRandomN = 7;
    var myRandomH = 40;
    var RandomHeight = function(){
        return parseInt( Math.random()*myRandomN ) * myRandomH;
    }
    
    //2번기능 ===============================
    var headBox = $('#headBox');
    headBox.prepend('<div class="scroll_percent"></div>');
    var scrollP = $('.scroll_percent');
    scrollP.css({position:'absolute', top:0, left:0, width:0, height:'90%', opacity:0.2, backgroundColor:'#f06', transform:'translate(-0.5rem) scale(1.1) skew(-15deg)' });
    // scrollP.css({ width:적용할값 + '%' });


    //2번 기능 세팅 ===============================
    //3번에서 요구하는 카드생성 형태이므로 중복수행하게 되기때문에 이것을 함수화처리한다.
    var cardCode = '<div class="card"><div class="card_img"></div><div class="card_narr"><a href="#"><dl><dt>title</dt><dd>Lorem ipsum dolor sit amet.</dd></dl></a></div></div>'; 
    
    var win = $(window);
    var cardBox = $('#cardBox');
    var cardArea = cardBox.children('.card_area');

    //추가 선택자 및 변수
    var card;
    var cardWidthLen;

    var i = 0;
    var cardCount = 0; //카드의 갯수
    var randomColor =  [];
    var cardRandomHeight = [];

    //함수======================================================================
    var AppendCardFn = function(){
        cardCount += 50; //카드를 추가생성
        
    for(; i <cardCount ; i += 1){
        cardArea.append(cardCode);
        card = cardArea.children('.card').eq(i);  //.card의 eq번째 순서
        card.find('dt').text('title_'+ (i+1) ); //글자생성
        randomColor[i] = '#'+Rn()+Rn()+Rn();
        card.find('.card_img').css({ backgroundColor:randomColor[i] });
        cardRandomHeight[i] = card.outerHeight() + RandomHeight();
        card.css({ height:cardRandomHeight[i] + 'px' });
    }
    //5.삭제 // $('.card').css({float:'left'}); 
    card = $('.card');
    }//AppendCardFn
    AppendCardFn(); 

    //======================================================
      //.card_area의 가로값 세팅
      var cardEq0 = $('.card').eq(0);
      var cardWidth = cardEq0.outerWidth(); //가로+패딩+외곽선

    //   var cardWidthLen;
      var cardWidthSet = function(){
          cardWidthLen = 
          parseInt(cardBox.outerWidth() / cardWidth) //소수점 방지하기 위해 parseInt
          cardArea.css({ width : cardWidth * cardWidthLen + 'px' });
          return cardWidthLen;
      }
      cardWidthSet();

    //6. 카드의 위치값 설정 =======================================================
    var remainder; 
    var topArr = [];

    var CardPositionSettingFn = function(){
        var j = 0;
        for( ; j < cardCount ; j += 1 ){
            //가로행에 들어가는 각 n번째(나머지값에 해당하는 번째)
            //요소의 위치(left값)를 배치 
            //가로에 3개가 들어간다고 가정했을 때 remainder에는 0,1,2가 들어간다. (나머지값...)
            remainder = j % cardWidthLen;
            var k=0;
            card.eq(j).css({ left:cardWidth*remainder + 'px' });
            var setTop, setHeight; 
            
            
            //7. 요소의 추가 위치(top값)배치
            if( j < cardWidthLen){
                card.eq(j).css({top:0});
                topArr[j] = 0;
            }else{
                setTop = parseFloat(card.eq(j-cardWidthLen).css('top')); //parseFloat -> 소수로 변환 
                setHeight = card.eq(j-cardWidthLen).outerHeight();
                topArr[j] = setTop + setHeight;
                card.eq(j).css({top:setTop+setHeight+'px'});
            }
       
            //8. .card_area의 높이값 설정
            //카드 높이값(height) 중의 가장 큰값
            var randomHMax = card.eq(0).outerHeight() + (myRandomN * myRandomH);
            //카드마다 position위치에서의 top값 중 최대값
            var maxN = Math.max.apply(null, topArr);
            cardArea.css({ height:randomHMax + maxN + 'px' });


        }
    }//CardPositionSettingFn
    CardPositionSettingFn();
    console.log(topArr);

    // ============================================================================
  
        //브라우저 크기 변경시 cardArea 사이즈 재수정
        win.on('resize',function(){
          cardWidthSet();
          CardPositionSettingFn();
        });

        //2번기능+3번기능 추가생성
        win.on('scroll',function(){
            var st = $(this).scrollTop();


            var wrap = $('#wrap');
            var wrapHeight = wrap.outerHeight();
            var winH = win.outerHeight();
            //퍼센트 공식 - > 값 / 기준(전체) *100
            //스크롤처리시에는 화면의 높이값 만큼 빼야한다.
            var per = st / ( wrapHeight-winH ) * 100;
            // console.log('per: ', per);
            //.scroll_percent의 가로값에 적용
            scrollP.css({ width:per + '%' });
            //3번기능 
            //일정수치가 넘어가면 카드를 추가생성하라. 
            //기존카드는 유지하고 생성한 카드를 재호출
            if(per >= 100){   
                AppendCardFn();   
                CardPositionSettingFn(); 
            }
        });


})(jQuery);
