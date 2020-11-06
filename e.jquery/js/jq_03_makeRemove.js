(function($){
var part = $('.part');
var p = part.children('p');
var div = part.find('div');
console.log(div);


p.css ({ 'border': '0.065rem solid #7a0'});

var p1 = part.find('.text');
p1.text('원하는 글자를 <br /> 입력할 수 있다.');
// 글자만 가져옴 

var p2 = part.find('.html');
p2.html('원하는 요소를 <br /> 삽입할 수 있다.');
// html 코드까지 가져옴 
// $('head').html('<style>');

var p3 = part.find('.wrap');
p3.wrap('<dl><dt></dt></dl>'); //감싸는 요소 추가
p3.unwrap().unwrap(); //감싸는 요소 삭제

//prepend 내부의 앞에 생성하게 되는 메소드이며, 
//요소의 형태로 사용하지 않으면 다른 곳의 요소를 강제로 뜯어서 가져올 수 있다.
var p4 = part.find('.prepend');
p4.prepend('<span>삽입</span>'); // p4 내부 맨앞에 span삽입
// var span = $('span');
// prepend.prepend(span);
var mySpan = $('.preto');
mySpan.prependTo( p4 ); //.preto를 , p4 내부에 mySpan 삽입

/*
1. 선택자A.prepend(선택자B);
2. 선택자C.prependTo(선택자D);

1번의 경우 A내부에 B를 담는 것
2번의 경우 D내부에 c를 담는 것
*/

 
var p5 = part.find('.append'); //내부 맨뒤에 삽입
p5.append('<span>내부 뒤에 삽입완료</span>');
mySpan.appendTo( p5 );

var p6 = part.find('.context');
var p6Con = p6.contents(); //p6요소 내부 들어있는 모든 내용을 가져오는 기능
// console.log( p6Con );
//html메소드는 기존내용을 삭제, 새로작성한 내용을 삽입하는 기능
// p6.html('<a href="#"></a>');
// p6.children('a').html(p6Con)

var p6Html = p6.html();
p6.html('<a href="#">' + p6Html + '</a>');

var p7 = part.find('.before');
p7.before('<div>.before 앞에 요소를 생성</div>');


var p8 = part.find('.after');
p7.after('<div>.after 뒤에 요소를 생성</div>');

div = part.find('div');
console.log(div);

var p8Attr = p8.attr('title');
//attribute -> 속성을 처리하는 기능
console.log( p8Attr ); 
p8.attr({ 'data-x': 'what is data'});
p8.removeAttr('style');
  


})(jQuery);

