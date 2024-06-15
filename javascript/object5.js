
// user안의 값을 나눠서 넣음

// 매개변수를 받아서 할 것인지
function printUser(user) {

    console.log(`사용자이름: ${user.username}`);
    console.log(`비밀번호: ${user.password}`);
    console.log(`이름: ${user.name}`);
    console.log(`이메일: ${user.email}`);

}

// 비구조할당 할 것인지
// 중괄호안에 username: "admin", 얘네 값 들어가는 거임
function printUser2({username, password, name, email}) {

    console.log(`사용자이름: ${username}`);
    console.log(`비밀번호: ${password}`);
    console.log(`이름: ${name}`);
    console.log(`이메일: ${email}`);

}

function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "김지현",
        email: "aaa@gmail.com"
    }

    printUser(user);
    printUser2(user);
}

main();