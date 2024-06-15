function modifyUser(user, target, value) {
    const newUser = {
        ...user,    // 객체 안의 값이 복사됨
        [target]: value   // 타겟안의 값을 키 값으로 쓰겠다. value는 그대로 들어옴  / 대괄호를 안치면 변수랑 전혀 상관없는 새로운 키 값이 들어온다. / 대괄호를 쳐야 변수 안의 값을 키값으로 받는다. 대괄호를 쳐야 [terget]에 username이 들어옴
    };
    return newUser;
}

function main() {
    let user = {
        username: "admin",
        password: "1234"
    }

    // delete user.password; 삭제 방법

    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");  // key값 username
    console.log(newUser);   // 객체의 값 수정 방법

    const newUser2 = modifyUser(newUser, "password", "1111");
    console.log(newUser2);

    const userList = [user, newUser];   // 100번 주소
    const newUserList = [...userList, newUser2];  // 배열안에 있는 거 옮기기 배열 자체가 아닌 배열 안의 요소만 옮김  //200번 주소 
                     // 그대로 카피해서, 새로운 값 추가  

    // 스프레드 -> 깊은 복사(안에 들어 있는 것들만 옮기는 것)

    // 얕은 복사(배열 주소 복사하기 똑같은 100번) 
    const userList2 = userList; 
}

main();