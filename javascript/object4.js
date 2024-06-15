// 비구조 할당, 구조 분해  *중요
function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "김지현",
        email: "aaa@gmail.com"
    }

    const names = ["김지현", "김지현1", "김지현2", "김지현3"];

    // user객체안의 값을 분해 해서 중괄호에 넣는다.
    const {username, password, email} = user;
    console.log(username);
    console.log(password);
    console.log(email);


    // 각각 0, 1 인덱스 들고오기
    // 인덱스 순서대로 들어옴
    const [a, b] = names;
    console.log(a);
    console.log(b);

    // ps.주로 const를 쓴다.

    // rest
    // ...newUser 스프레드: name을 제외한 남은 얘들을 복사해서 들고온다 / delete대신 쓸 수 있다.
    const {name, ...newUser} = user;
    console.log(newUser);

    console.log(names.slice(1,3));  // 1부터 3전까지 인덱스 
}

main()