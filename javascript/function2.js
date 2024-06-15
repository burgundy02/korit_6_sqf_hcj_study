const USERNAME = "admin";
const PASSWORD = "1234";




function login(username, password) {
    if(USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공");
        return;
    }
    console.log("로그인 실패");
}

// 변수에 함수를 넣으면 함수의 주소가 들어간다.
const login2 = login;

login2("admin", 1234);

// 함수 자체를 통채로 넣을 수 있다.
const add2 = function add(x, y) {
    return x + y;
}
console.log(add2(10, 20)); 

// 익명함수 대입하는 함수의 이름이 필요없어져서 이름 생략 가능
const sub2 = function (x, y) {
    return x - y;
}

console.log(sub2(20, 10));

// 화살표 함수(람다)
let div = (x, y) => {
    return !x || !y ? 0 : x / y;
}
console.log(div(10, 2));     // 결과는 5

// 화살표 함수(명령이 한 줄인 경우)
div = (x, y) => !x || !y ? 0 : x / y;

console.log(div(10, 2));

// 화살표 함수(매개변수가 하나면 소괄호 생략 가능)
const print = (data) => console.log(data);

print("출력!");

// 함수 안에다가 함수를 정의 할 수 있다.
function main() {
    const test = () => {
        console.log("테스트 함수 호출");
    }
    test();
}
main();
// test();   // main안에서 정의 돼서 여기서는 호출 안됨







