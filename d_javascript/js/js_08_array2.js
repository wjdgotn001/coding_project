var coffee = [
'esspresso' , 
'americano' , 
'capuchino' , 
'caffe latte' , 
'cafe mocha' , 
'vanila latte'
];

console.log(coffee);
var cLen = coffee.length; //갯수파악
// console.log(cLen);

// shift(), pop(), unshift(), push(), concat()
// console.log(coffee[2]);
var i = coffee.indexOf('cafe mocha'); //없을경우:-1, 있을경우는 해당위치 값을 나타낸다.
// console.log(i);

var str = '안산, 수원, 강릉, 부산, 제주도, 서울, 태안, 순천, 여수, 거제, 인천';
// console.log( str.indexOf('부산') );

var strToArray = str.split(',');
// console.log( strToArray );

var tel = '031-999-9999';
// console.log(tel.split('-'));

// console.log(coffee);
var coffeeToPar = coffee.join(',');
// console.log(coffeeToPar);

var coffeeSort = coffee.sort();
// console.log(coffeeSort);

// var coffeeSortReverse = coffeeSort.reverse();
// console.log(coffeeSortReverse);

// var coffeeDec = coffee.sort(function(a,b){ return a - b });
// console.log(coffeeDec);

// var arr = [1,5,10,4,6,2,7,9];
// console.log(arr.sort(function(a,b){return b - a }));

// coffee.push('ice tea');
// coffee.pop();

var sp = coffee.splice(0, 2);
console.log(coffee);

var a = 'hi';
var b = a;
    a = 'bye';
    
// console.log(a, b);

var c = ['toDay'];
var d = c;
    c[0] = 'nextDay';
// console.log(c);
// console.log( c[0], d[0] );
var e = c.slice();
    c[0] = 'prevDay';
console.log(c, e);


