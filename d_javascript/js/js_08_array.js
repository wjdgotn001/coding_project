
//a.shift(); -----배열의 맨 앞에 값을 제거한다.
//a.pop(); ------배열의 맨 끝에 값을 제거한다.
//a.unshift('before'); -----배열의 맨 앞에 값을 추가한다.
//a.push('one') -----배열의 맨 끝에 값을 추가한다.



// var a = [1, 2, 3];
// a.push['one'];
// console.log(a);

// a.shift();
// console.log(a);

// a.push('three');
// console.log(a);

// a.push('four');
// console.log(a);

// a.pop();
// console.log(a);

// a.unshift('before');
// console.log(a);

// /*
// var b = [1, 2, 3];
// var c = [4, 5, 6];
// var d;

// d = b.concat(c); //b와 c합치기
// console.log(b);
// console.log(c);
// console.log(d);
// */

// //===============
// var ar;
// // ar = new Array
// ar = [ ];
// ar[4] = 'in string';
// console.log(ar[2]);
// console.log(ar[3]);
// console.log(ar[4]);

// //===============

// var arrQ_01 = [];

// var i = 0;
// for( ; i<100 ; i+=1 ){
//   arrQ_01[i] = i+1;
// }
// console.log(arrQ_01);

// // =======================

// // var arrQ_02 = [];

// // var j = 0;
// // var k;
// // var l;

// // for( ; j < 100 ; j += 1 ){
// //   k = j % 2;
// //   if( k === 0 ){
// //     continue;
// //   }else if(k !== 0){
// //     arrQ_02.push(j);
// //   }
// // }
// /*
//   l = parseInt(j/2);
//   arrQ_02[j] = j;
// */

// // ==================================


//   var Q_03 = [];
//   var o = 0;
//   for( ; o < 100 ; o += 1 ){
//     Q_03[o] = 100-o;
//   }
//   console.log(Q_03);

//   var Q_04 = [];

//   // =================

//   var j = 0;
//   var k;
//   var l;

//   for( ; j < 100 ; j +=1 ){
//     k = j % 3;
//     if( k === 0 ){
//       continue;
//     } else if( k !== 0 ){
//       Q_04.push(100-j);
//     }
//   }
//   console.log(Q_04);

  

// ===========================================================
var cln = ['nav_01', 'nav_two', 'nav_tt', 'four'];
var nav = document.querySelectorAll('.nav')[0];

var j = 0;
var li;
var link;
var clnLen = cln.length; //갯수를 파악함 length

for( ; j < 4 ; j += 1 ){
  li = document.createElement('li');
  link = document.createElement('a');
  li.append(link);
  li.classList.add(cln[j]);
  link.setAttribute('href', './'+cln[j]+'.html');
  link.innerText = '글쓰기'+ (j+1);   
  nav.append(li);
}

// ============================================================




