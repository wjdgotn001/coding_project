// filename.js 

(function($){
// jQuery start
// tab메뉴

var tabLi = $('.tab_li li');
var tabCon = $('.tab_content div');

tabLi.on('click', ['a'], function(e){
    e.preventDefault();

    var it =$(this);
    var itI = it.index();

    tabCon.eq(itI).show();
    tabCon.eq(itI).siblings().hide();
});

})(jQuery);
