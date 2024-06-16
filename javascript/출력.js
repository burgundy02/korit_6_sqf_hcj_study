var num = 10;
var sNUm = "10";
console.log(num === sNUm); // ture 값은 같다 / ===은 false

var num2;
console.log(!num2);   // !를 붙이면 boolean으로 바꿔주는데 언디파인은 false, !!를 써서 값이 들어있는지 확인할 때 쓴다.

/*
!(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
var num = 10;
!!num -> true

num = 0;
!!num -> false

var str = "test";
!!str -> true

str = ""
!!str -> false

var array = [1, 2, 3];
!!array -> true

array = [];     // 배열은 비어있어도 true 주소가 들어있어서 값이 들어있다고 봄
!!array -> true

!!array.length -> false  // 배열의 길이를 가지고 비교
array.length === 0 -> false


*/

// false가 나오는 경우의 수
console.log(num);
alert(num);  // 노드.js 브라우저에서 띄우기, 출력은 html에서

var num = 0;
console.log(!!num);

var str = " ";        // 중간에 스페이스바가 있어도 flase
console.log(!!str);

var array = [];
console.log(!!array.length);  // .length하면 false

var a;
console.log(!!a);   // false

var b = null;
console.log(!!b);  // null도 false

var c = 0 / 0;     // 0에 다가 0을 나누는 거는 연산 오류 => NaN 계산 할 수 없다 : false
console.log(!!c);

// false에다가 not을 걸어서 true
if(!num) {
    var num2 = 20;                              // 지역변수
    console.log("num은 0입니다.");
    if(!!num2) {                               // 이 if를 기준으로 보면 var num2는 전역이다.
        console.log("num2는 값이 있습니다.");
    }
}

if(!str) {
    console.log("빈 문자열입니다.");  // 자바에서는 안된다
}

if(!b) {
    console.log("Null입니다");
}                                       // undefined 체크도 마찬가지임



