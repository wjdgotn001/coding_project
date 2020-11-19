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

var titleTab = $('.title_tab_style');
var titleTabDl = titleTab.children('dl');
var titleTabDt = titleTabDl.children('dt');
var titleTabDd = titleTabDt.children('dd');

titleTabDt.eq(0).addClass('action');

titleTabDt.on('click', ['a'], function(e){
    e.preventDefault();

    var it = $(this);
    it.siblings().removeClass('action');
    it.addClass('action');

    titleTabDd.hide();
    it.next('dd').show();


});

})(jQuery);
