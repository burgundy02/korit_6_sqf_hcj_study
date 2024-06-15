const names = ["김지현", "김지현1","김지현2" ];
console.log(names.join("")); // 배열 중간중간 있는 쉼표 없애줌 (!넣으면 이름 중간 중간에 !가 들어감)


let userList = [];
let emptyUser = {
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function randomTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index) => {
        return `
        <tr>
            <td>$(index + 1)<td>
            <td>$(username)<td>
            <td>$(password)<td>
    
        `;
}).join("");
}

// 자기 자신한테 입력된 값을 계속 쌓는다.
function handleUserInputKeyDown(e) {
    // 새로운 주소 만들고 있음(주소 겹칠 일 없음)
    user = {
        ...user,
        [e.target.name]: e.target.value
    }

    console.log(user);

    // 입력하고 엔터치면 다음으로 넘어감
    if(e.keyCode === 13) {
        const passwordInput = document.querySelector("password-input");   // 객체 가지고 옴
        const usernameInput = document.querySelector("username-input");

        if(e.target.name === "username") {
            passwordInput.focus();
        }

        // passwword면 엔터칠 때 마다 새로운user가 쌓임(새로운 주소를 넣음)
        if(e.target.name === "password") {
            userList = [ ...userList, {...user} ];

            console.log(userList);

            usernameInput.value = emptyUser.username;
            usernameInput.value = emptyUser.password;
        
            usernameInput.focus();
        }
    }
    console.log(e.target.name);
}