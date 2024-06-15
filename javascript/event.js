function handleButtonClick(e) {
    // 변수명이 키값, 벨류는 자동으로 들어간다 element : element 동일
    console.log({event: e});
    // target 속성. this랑 똑같음
    e.target.innerHTML = "취소";
}

function handleInputChange(e) {
    // 이 객체안에 들어있는 value라는 값을 출력해라
    if(e.ctrlKey && (e.ctrlkeyCode === 13 || e.key === "Enter")) {    // ctrl + enter하면 동작한다.
        // Enter키가 들어오면 동작을 한다.
        alert(e.target.value);
    }
}

let isFocus = false;

// alert 포커스가 벗어났다가 다시 돌아오는 것
function handleInputFocus(e) {
  if(!!e.target.value) {
    e.target.value = "";
  }
}

// 포커스가 벗어났을 때 
function handleInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요.");
    }
}