
// var i = 0;
// console.log(i);

// 함수는 어떠한 기능을 수행하도록 처리하게만든 형태
// 함수를 호출하여 사용할 때에는 '함수의이름()'을 사용한다.


/*
var fn = function(){
  return 10;
};

var fnResult = fn();
console.log( fnResult );

var fn2 = function(){ console.log( 20 ) };
fn2();
*/

var fuR = 10;
// console.log( fnR );


var fn = function(){ return 20; };
var fnR = fn();
// console.log( fnR );

var fn2 = function(a){ return a*a; };
fnR = fn2(5);
// console.log( fnR );

// var old = 45;
var ret; //밖에 있는 전역변수
                    // old : 매개변수이자 인수
var MyOld = function(old){
  // if안에 들어있는 old : 인자
  if ( old < 20 ){
    ret = '아직 미성년입니다.';
  } else if (old < 30){
    ret = '아직 청년입니다.';
  } else if (old < 60){
    ret = '가장 열심히 일하시는 시기이군요';
  } else {
    ret = '이제 즐기면서..';
  }
  return ret;
};
// console.log( MyOld(15) ); 

// =================================================================

// 함수 : 함수선언식, 함수표현식

// 함수자체가 호이스팅현상 발행하여 시작점에 있는 것처럼 인지
function DecFn(){ return 1;} //기명함수

// 변수명이 호이스팅현상 발생
var ExpFn = function(){ return 2;} //익명함수

console.log( DecFn() );
console.log( ExpFn() );

//매개변수(argument), 인수, 인자, 전역변수(global), 지역변수(local), 익명함수, 기명함수
// 함수 선언식(Declarations), 함수 표현식(Expression), hoisting, 생성자함수

//함수는 최초의 형태 하나만 존재하므로 이를 복제하여 사용한다는 개념으로 인지-생성자함수
var myNewFn = function(nick){
  this.name = nick;
  this.family = 'jeong'; 
  this.fullName = this.name + ' ' + this.family;
  return nick;
};

var a = new myNewFn('hae su');
console.log( a.FullName );

// this는 js에서 두가지 개념을 가진다.
// 1.window 2.생성자 처리 시 매개변수 또는 선택자체
console.log( this );
// ===================================================================

// *선언식(함수자체에 이름을 부여하는 방법), *표현식(함수를 변수에 대입하는 방법)
// *생성자함수(함수기능을 복제하여 재처리하는 함수)
// *즉시 실행함수(재활용이 불가능한 일회용함수)

/*
var ffn = function(){
  var i = 10;
  var j = 7;
  return i + j;
};
console.log( ffn() );
*/

// 즉시실행함수(IIFE)
(function(k){
  var i = k;
  var j = 7;
  console.log(i * j);
  return i * j;
})(10);