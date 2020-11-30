// ex_08_moreBtn.js

(function($){
    $.ajax(
        {url: '../data/random_people.json.json',
        dataType :'json',
        context:document.body
    }).done(function(data){
        var people = data;
        var i = 0;
        var myLen = i;
        var myViewLen = 4; //화면에 보이고 싶은 갯수
        var maxLen = people.length; //총 갯수
        var part = $('.part');
        var partUl = part.children('ul');
        var inserCode = '<li><div class="image"></div><dl><dt>title</dt><dd>email</dd></dl></li>';

        var more = $('.more_btn');
        var moreBtn = more.children('button');


        var moreFn = function(){
            myLen = i + myViewLen;
            for(; i < myLen; i+=1){

            if( i >= maxLen ){
                more.remove();
                break
            }else{
                partUl.append(inserCode);
            }
          }//for
        };//moreFn
        moreFn();
        
        // moreBtn.on================================
        moreBtn.on('click',function(e){
            e.preventDefault();
            moreFn();
        });//moreBtn.on

    });

})(jQuery);

