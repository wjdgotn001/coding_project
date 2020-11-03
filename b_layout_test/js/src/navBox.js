(function($){
  // ================================================================
  // navigation 내용의 형식을 설정

var navBox = [
{ 'titleNav' : {'tname':'story',      'tlink':'http://naver.com','target':'_blank'},
  'subNav'   : [{'sname':'몽피이야기','slink':'http://xidoweb.com'}, 
                {'sname':'회사소개',  'slink':'http://xidoweb.com'}, 
                {'sname':'후원',      'slink':'http://xidoweb.com'}, 
                {'sname':'sns',       'slink':'http://xidoweb.com'}] },

{ 'titleNav' : {'tname':'menu',           'tlink':'http://naver.com','target':'_blank'},
  'subNav'   : [{'sname':'커피류',        'slink':'http://w3.com'}, 
                {'sname':'기타음료',      'slink':'http://w3.com'}, 
                {'sname':'음식 및 디저트','slink':'http://w3.com'}, 
                {'sname':'상품',          'slink':'http://w3.com'}, 
                {'sname':'기타',          'slink':'http://w3.com'}] },

{ 'titleNav' : {'tname':'store',      'tlink':'http://naver.com','target':'_blank'},
  'subNav'   : [{'sname':'신규매장',  'slink':'http://daum.com'}, 
                {'sname':'매장찾기',  'slink':'http://daum.com'}, 
                {'sname':'가맹문의',  'slink':'http://daum.com'}, 
                {'sname':'창업설명회','slink':'http://daum.com'}, 
                {'sname':'창업스토리','slink':'http://daum.com'}] },

{ 'titleNav' : {'tname':'news',        'tlink':'http://naver.com','target':'_blank'},
  'subNav'   : [{'sname':'이벤트',     'slink':'http://google.com'}, 
                {'sname':'공지사항',   'slink':'http://google.com'}, 
                {'sname':'프로모션',   'slink':'http://google.com'}, 
                {'sname':'미디어 광고','slink':'http://google.com'}] 
}
];  

// console.log( navBox.length );
// ================================================================
var navList = '<li><dl><dt></dt><dd></dd></dl></li>';
var navBoxSel = $('#navBox');
var navBoxSelUl = navBoxSel.children('ul');
var navLen = navBox.length;
var navDt, navDd, subNavLen, tNav, sNav; 

var i, j;
for ( i=0 ; i < navLen ; i+=1 ){
  //자바스크립트 - > 태그생성, 내용작성, 내용삽입
  //제이쿼리 - > 생성,삽인 내용
  navBoxSelUl.append(navList);
  navDt = navBoxSelUl.children('li').eq(i).find('dt');  
  tNav = navBox[i].titleNav;

  navDt.append('<a href="' + tNav.tlink + '" target="' + tNav.target +'">' + tNav.tname + '</a>');
  // navDt.append(`<a href="${tNav.tlink}" target="${tNav.target}">${tNav.tname}</a>`);

  navDd = navBoxSelUl.children('li').eq(i).find('dd');

  subNavLen = navBox[i].subNav.length;
  for( j=0; j<subNavLen; j+=1 ){
    sNav = navBox[i].subNav[j];
    navDd.append('<a href="'+ sNav.slink +'">' + sNav.sname + '</a>')
  }
}

var navBoxFindDt = navBoxSel.find('dt');
var navBoxFindDtLink = navBoxFindDt.find('a');
var navBoxFindDd = navBoxSel.find('dd');
var navBoxFindDdLink = navBoxFindDd.find('a');
navBoxFindDd.hide();

// navBoxSelUl.addEventListener('mouseenter' , funtion(){})
var navSlideDown = function(){ navBoxFindDd.stop().slideDown(); };
var navSlideUp = function(){ navBoxFindDd.stop().slideUp(); };

//navBoxSelUl.on('mouseenter',navSlideDown);
// navBoxSelUl.on('mouseleave',navSlideUp);
navBoxSelUl.on({'mouseenter': navSlideDown, 'mouseleave': navSlideUp });


navBoxFindDtLink.on('focus',navSlideDown);
navBoxFindDdLink.eq(-1).on('blur',navSlideUp);

})(jQuery);

// js에서는 자식을 선택할 경우에 children -> jQuery에서도 children
// js에서 자손요소를 선택할 경우에 getElement... -> jQuery에서는 find()
// 요소 첨부 시 ==========
// js에서는 document.creatElement(); 
// 00.append()  <생성 후 내용 삽입>
//jQuery에서는 -> 선택자.append('요소이름) <생성과 동시에 삽입>