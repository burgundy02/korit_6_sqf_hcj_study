const names = ["김지현1", "김지현2", "김지현3"];
console.log(names.join()); // 배열 중간중간 있는 쉼표 없애줌 (!넣으면 이름 중간 중간에 !가 들어감)

let userList = [];
let emptyUser = {
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index) => { // map을 사용햐서 반복 돌리기 / 비구조 할당해서 각각 들어가게함
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>${password}</td>
            </tr>
        `;
        // tr의 첫 번째 td에 0 + 1 = 1, 두 번째 td에 username, 세 번째에 password가 들어감(행) / 이게 innerHTML에 들어감
        // 반복돌면서 기존에 있던 거 들어가고, 새로 재할당 한게 들어오면서 테이블이 늘어남

    }).join(""); // 리스트의 쉼표를 없애줌. 기본형은 .join(",")
}

function handleUserInputKeyDown(e) {
    // input에 입력 할 때마다 새로운 객체 생성: 입력할 때 마다 재할당 된다
    user = {
        ...user,
        // input의 name -> "username"
        // username 이라는 key안에 인풋 입력값이 value로 들어간다
        [e.target.name]: e.target.value
    }

    // f 12 콘솔창에 띄우기 
    console.log(user);

    // enter키의 키코드가 13
    if(e.keyCode === 13) {
        // 클래스 이름이 username-input인 인풋을 변수에 담는다
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");

        // username 인풋창에서 엔터를 치면
        if(e.target.name === "username") {
            // password인풋창에 포커스가게 함
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            // userList에 기본 userList의 요소들도 넣고, 계속 재할당하던 user의 요소도 넣는다.
            userList = [ ...userList, { ...user } ];

            // table 띄우기
            renderTable();

            // 입력한 값을 테이블에 다 넣고, 인풋창에 들어 있던 값(글자) 지우기
            usernameInput.value = emptyUser.username; 
            passwordInput.value = emptyUser.password;

            // username에 다시 포커스가게 하기
            usernameInput.focus();
        }
    }
    // f 12 콘솔창에 띄우기
    console.log(e.target.name);
}