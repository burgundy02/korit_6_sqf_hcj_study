// 객체의 기본 사용법 / 생성은 할 수 없음
const user = {
    // user 변수에 값 넣음
    username: "admin",
    password: "1234",

    name: {
        lastName: "김",
        firstName: "지현"

    },

    // user 변수에 함수 집어넣음
    print: () => {
        console.log("사용자이름: " + user.username);  // user.으로 자기자신의 객체를 지정(this X)
        // 표현식
        console.log(`비밀번호: ${user.password}`);   
    },  // 마지막 키 벨류 쉼표는 생략 가능
};

console.log(user);
console.log(user.username);
console.log(user.password);         // 유저객체조회, 각각의 값 출력
console.log(user.name.lastName);  
console.log(user.name.firstName);  
user.print();