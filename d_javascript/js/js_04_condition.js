// js_04_condition.js

var myEat = '냉면 ';
var q = myEat !== 'pizza';
// var q = myEat == 'pizza'; 
//변수와 하나의값이 같은지 비교여부 참/거짓)으로 도출
// ===비교하여 참을 확인, !== 값의 반대인 결과를 확인
console.log(q);

// if(조건){ 조건의 기능이 참이면 실행하는 내용을 담는다.} else{ 조건의 기능이 겨짓일 경우 수행 }
var myEatResult;
if ( myEat === 'pizza'){
  //참일때만 수행
  myEatResult = myEat + ' 먹으러가자!!';
} else if ( myEat == '순대국' ){
  //if 첫문항이 거짓인 경우, 새로운 if에 대한 문항이 참
  myEatResult = myEat + '먹을까?';
} else { 
  myEatResult = '너가 먹고싶은' + myEat + '먹으러 가자';
}
// console.log( myEatResult );


/*
var result = confirm( '당신은 성인입니다?' );
// console.log(result);
if ( result === true ){
  location = "http://naver.com";  
} else { 
  location = "https://store.pinkfong.com/";
}
*/

/*
var myOld = prompt( '당신의 태어난 연도를 입력하세요' );
// console.log(myOld);

var nowYear = new Date().getFullYear(); //올해 파악하는 기능
// console.log( nowYear - myOld + 1 );

var myage = nowYear - myOld + 1;
if( myage < 20){ 
  console.log( '당신은 아직 미성년자입니다.' );
} else if ( myage >= 40 ) {
 console.log( '당신은 성인입니다.' );
} else {  
  console.log( '2~30대의 청년입니다.' );
}
*/

//switch----------------------------------------

// switch(값){ 
//   case 첫번째 값을 비교했을 때 참인 경우 -> 수행 break;
//   case 두번째 값을 비교했을 때 참인 경우 -> 수행 break;
//   case 세번째 값을 비교했을 때 참인 경우 -> 수행 break;
//   case 네번째 값을 비교했을 때 참인 경우 -> 수행 break;
//   case 다섯번째 값을 비교했을 때 참인 경우 -> 수행 break;
//   default: 위에 기능이 모두 거짓일 경우 -> 수행;
// }

var n = parseInt( Math.random() * 5 ); //랜덤숫자 0~5미만까지 생성.
var r;
switch(n){
 case 1:
   r = '1이 나온 당신';
   break;
 case 2:
   r = '2가 나온 당신';
   break;
 case 3:
   r = '3이 나온 당신';
   break;
 case 4:
   r = '4가 나온 당신';
   break;
 case 5:
   r = '5가 나온 당신';
   break;

 default:
   r = '당신이 선택한 숫자는' + n + '입니다.';
  }
  // console.log( n , ':' , r );

 
//삼항 연산자-----------------------------------------
// if, switch는 하나의 문법구조를 이용하여 처리하는 것
// 삼항 연산자 : 3가지의 항목을 가진 연산자 기법

var i = 1;
// (조건) ? 조건이 참이면 수행:
//        ? 조건이 거짓이면 수행;
(i > 10) ? console.log( 'i는 10보다 크다' )  :  console.log( 'i는 10보다 작다' )   ;

// if(조건1){ 조건1이 참 }else if( 조건1이 아닌 조건2 ){ 조건2 참.. } else if( ){} else{}
// //switch(매개변수){ case 값1: ....... break; 
//                    case 값2: ....... break; 
//                    case 값3: ....... break; 
//                    default: 최종;
//                     } 



