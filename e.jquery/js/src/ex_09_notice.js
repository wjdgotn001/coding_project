// ex_09_notice.js

(function($){
    $.ajax({
        url : '../data/random_people.json.json',
        dataType : 'json',
        context:document.body

    }).done(function(data){
        //1.순서 뒤집어서 배치
        //2.한번에 보이는내용(30개)을 적당하게 줄여서 배치
        //2-1. 인디케이터를 생성하여 순번에 맞는 내용 나타나기
        //3.오름차순,내림차순 연결
        var dataFile;
        dataFile = data.sort(function(a,b){ //a,b(앞,뒤)를 비교
            return b.id - a.id 
        }); 

        // console.log(dataFile);
        var noticeCode = '<li><a href="#"><em></em><span></span></a></li>';
        var indiCode = '<li><a href="#"></a></li>';
        var notice = $('.notice_board');
        var noticeCon = notice.children('.context');
        var noticeArea = noticeCon.children('ul');
        var indiCon = notice.children('.indicator');
        var indiArea = indiCon.children('ul');

        // ============================================================================================

        //기본세팅
        var myViewLen = 20;//한번에 보이는 갯수 (전체 갯수/화면에 보여질 갯수)

        //게시판 인디케이터 생성하기
        var indiLen = Math.ceil(dataFile.length / myViewLen); //소수점으로 뜨지않도록 Math.ceil();
        var indiN = 0;
        var indiLi;
        for( ; indiN < indiLen ; indiN+=1 ){
            indiArea.append(indiCode);
            indiLi = indiArea.children('li').eq(indiN);
            indiLi.find('a').text(indiN + 1); //indiN만 쓰게되면 숫자0만 뜨기때문에 +1한다.
        }
        //인디케이터에 보일 갯수 조정****
        var indiViewLen = 5;
        var iv = 0;
        indiLi = indiArea.children('li');
        var memoryN;
        for(; iv < indiLen ; iv+=1 ){
            if( iv < indiViewLen ){
                memoryN = iv+1; //보이는 버튼 중 마지막 숫자..
                continue; //건너뛰어라
            }else{
                indiLi.eq(iv).hide();
            }
        }

        var nBtn = indiCon.find('.next_notice');
        var pBtn = indiCon.find('.prev_notice');

        nBtn.on('click',function(e){
            e.preventDefault();
            var nbn = memoryN;
            indiLi.hide();
            for(; nbn < memoryN+indiViewLen ; nbn += 1){
                indiLi.eq(nbn).show();
            }
            memoryN = nbn;
        });
        

        // 내용넣기
        var set = function(n){ //클릭하면 바뀔 n이라는 매개변수를 사용
            
            // (n !== undefined) ? i = n : i = 0; //값이 있다면
            var settingLen = i + myViewLen;
            var i = 0;
            var k = n || 0;

            var noticeLi;
            noticeArea.empty(); //empty 비워라
            for( ; i<myViewLen ; i+=1){
                if(dataFile[ i+k ] == undefined){
                    break;

                }else{
                    noticeArea.append(noticeCode);
                    noticeLi = noticeArea.children('li').eq(i);
                    noticeLi.find('em').text(dataFile[ i+k ].id);
                    noticeLi.find('span').text(dataFile[ i+k ].ip_address);
                }
            }//for
        };//set
        set();

        // ============================================================================================
        //인디케이터 수행
        var indiLiBtn = indiArea.children('li');        
        indiLiBtn.on('click',function(e){
            e.preventDefault();

            var liN = parseInt( $(this).text() ) -1; //숫자가 아닌 문자(정수로 변환) 1이 아닌 0부터 시작해야하므로  1을 뺀다.
            var liSetN = liN * myViewLen;
            console.log(liN);

            set(liSetN); //0,70,140....
        });
        

        // ============================================================================================
        /*
        var selectArea = $('.select_area').find('button');
        selectArea.on('click',function(e){
            e.preventDefault();
            var i = $(this).index();
            
            switch(i){
                case 0:
                  dataFile = data.sort(function(a,b){ //a,b(앞,뒤)를 비교
                  return b.id - a.id; 
                });
                set();
                break;
    
                case 1:
                  dataFile = data.sort(function(a,b){ //a,b(앞,뒤)를 비교
                  return a.id - b.id; 
                });
                set();
                break;
            }//switch
        });//selectArea.on
        */

    });//ajax
})(jQuery);
