console.log(a);    // a라는 변수를 선언한 적 없어서 그냥 출력하면 오류임 2

var a;  // 호이스팅    1
 
var a = 10  // 대입 연산이라서 얘는 안된다 3

var b = 10; 
console.log(b);

var b = 20;
console.log(b);


console.log(c);     // 이렇게 하면 안됨 호이스팅 안됨
let c = 30;         // {} 블럭 안에 안써도 전역으로 쓸 수 있다.
// let c = 40;      // 재선언 안됨
c = 40;             // 재할당은 됨

const d = 50;
console.log("d");
// d = 60;          // 상수라서 재할당 안됨
// console.log("d");





