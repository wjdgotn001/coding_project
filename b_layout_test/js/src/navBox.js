(function($){
  // ================================================================
  // navigation 내용의 형식을 설정

var navBox = [
{ 'titleNav' : 'story',
  'subNav'   : ['몽피이야기', '회사소개', '후원'] },
{ 'titleNav' : 'menu',
  'subNav'   : ['커피류', '기타음료', '음식 및 디저트', '상품', '기타'] },
{ 'titleNav' : 'store',
  'subNav'   : ['신규매장', '매장찾기', '가맹문의', '창업설명회', '창업스토리'] },
{ 'titleNav' : 'news',
  'subNav'   : ['이벤트', '공지사항', '프로모션', '미디어 광고'] }
];  

// console.log( navBox.length );
// ================================================================
var navList = '<li><dl><dt></dt><dd></dd></dl></li>';
var navBoxSel = $('#navBox');
var navBoxSelUl = navBoxSel.children('ul');
var navLen = navBox.length;
var navDt, navDd, subNavLen;

var i, j;
for ( i=0 ; i < navLen ; i+=1 ){
  //자바스크립트 - > 태그생성, 내용작성, 내용삽입
  //제이쿼리 - > 생성,삽인 내용
  navBoxSelUl.append(navList);
  navDt = navBoxSelUl.children('li').eq(i).find('dt');  
  navDt.append('<a href="#">' + navBox[i].titleNav + '</a>');

  navDd = navBoxSelUl.children('li').eq(i).find('dd');
    
  subNavLen = navBox[i].subNav.length;
  for( j=0; j<subNavLen; j+=1 ){
    navDd.append('<a href="#">' + navBox[i].subNav[j] + '</a>')
  }
}

var navBoxFindDt = navBoxSel.find('dt');
var navBoxFindDtLink = navBoxFindDt.find('a');
var navBoxFindDd = navBoxSel.find('dd');
var navBoxFindDdLink = navBoxFindDd.find('a');
navBoxFindDd.hide();

// navBoxSelUl.addEventListener('mouseenter' , funtion(){})
navBoxSelUl.on('mouseenter',function(){
  navBoxFindDd.slideDown();
});
navBoxFindDtLink.on('focus',function(){
  navBoxFindDd.slideDown();
});
navBoxSelUl.on('mouseleave', function(){
  navBoxFindDd.slideUp();
});
navBoxFindDdLink.eq(-1).on('blur', function(){
  navBoxFindDd.slideUp();
});

})(jQuery);

// js에서는 자식을 선택할 경우에 children -> jQuery에서도 children
// js에서 자손요소를 선택할 경우에 getElement... -> jQuery에서는 find()
// 요소 첨부 시 ==========
// js에서는 document.creatElement(); 
// 00.append()  <생성 후 내용 삽입>
//jQuery에서는 -> 선택자.append('요소이름) <생성과 동시에 삽입>