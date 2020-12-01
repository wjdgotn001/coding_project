// ex_08_moreBtn.js

(function($){
    $.ajax({
        url: '../data/random_people.json.json',
        dataType :'json',
        context:document.body
    }).done(function(data){
        var people = data;
        var i = 0;
        var myLen = i;
        var myViewLen = 10; //화면에 보이고 싶은 갯수
        var maxLen = people.length; //총 갯수
        var part = $('.part');
        var partUl = part.children('ul');
        var inserCode = '<li><div class="number"></div><div class="image"></div><dl><dt>title</dt><dd>email</dd></dl></li>';

        var more = $('.more_btn');
        var moreBtn = more.children('button');
        var liEq;

        partUl.append(inserCode);


        var moreFn = function(j){
            // 예시1)
            var k;
            if( j === undefined){ //매개변수 j의 값이 없다면
                k = myViewLen; // k는 화면에 보이는 갯수이다.
            }else{
                k = j;
            }

            // 예시2)
            // (j === undefined) ? k = myViewLen : k = j; 

            // 예시3)
            // k = j || myViewLen;

            myLen = i + k;  // myLen = 4가 되었다. 그 이후부터는 4+4=8, 8+4=12....
            for(; i < myLen; i+=1){

            if( i >= maxLen ){
                more.remove();
                break
            }else{
                partUl.append(inserCode);
                liEq = partUl.children('li').eq(i);
                liEq.find('.number').text(data[i].id);
                liEq.find('.image').css({'backgroundImage':'url('+ data[i].image_data +')'});
                liEq.find('dt').text(data[i].first_name);
                liEq.find('dd').text(data[i].ip_address);
            }
          }//for
        };//moreFn
        moreFn(5);
        
        // moreBtn.on================================
        moreBtn.on('click',function(e){
            e.preventDefault();
            moreFn(10);
        });//moreBtn.on

    });

})(jQuery);

