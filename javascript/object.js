// js에서 중괄호는 객체
const user = {
    // key가 변수, value가 값
    username: "admin",
    password: "1234",
    // 객체 안의 객체
    name: {
        lastName: "김",
        firstName: "지현"
    },
    print: () => {
        console.log("사용자이름: " + user.username);  // user.으로 자기자신의 객체를 지정(this X)
        console.log(`비밀번호: ${user.password}`); // + 를 안쓰고 문자열과 변수의 값 같이 출력
    }
};

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.lastName);
console.log(user.name.firstName);
user.print();