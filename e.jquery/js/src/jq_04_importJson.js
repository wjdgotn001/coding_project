// jq_04_importJson.js

(function($){
    //비동기 처리 (내용을 중복작성하지 않고도 기본값을 불러오는 것)
    //동기화가 아닌 
    $.ajax({
        url : '../data/make_json.json',
        dataType : 'json',
        context: document.body
    }).done(function(data){ //done:끝나면 임의의 변수 data로 내용을 확인한다.
        console.log(data);
        $(this).addClass("check"); //this->document.body

        var wrap = $('#wrap');
        wrap.append('<ul class="list_insert"></ul>');
        var Insert = wrap.children('ul');

        var i = 0;
        for(; i < data.length; i += 1){
            Insert.append('<li></li>');
            Insert.children('li').eq(-1).text( data[i].number );
        }
    });
    // ============================
    // $.ajax({
    //     url : '불러올파일'
    // }).done(function(url의 매개변수){수행내용적기});

    //XMLHttpRequest();  

    

})(jQuery);