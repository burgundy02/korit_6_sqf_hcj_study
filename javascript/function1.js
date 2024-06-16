function add(x, y) {        // 함수정의                             함수정의1
    return x + y;           // 리턴 넣고싶으면 넣으면 됨
}

const result = add(10, 20);     // 호출 3   리턴값 없어서(undefined)대입 7
console.log(result);            // 출력 8

function add(x, y, z) {     // 여기서 함수 재정의가 됐다. 오버로딩 안됨     함수 재정의2
    console.log("x");       // 4 10
    console.log("y");       // 5 11
    console.log("z");       // 6 12
}

add(10, 20 ,30);            // 함수의 호이스팅/ 호출 9
