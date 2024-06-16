function handleButtonClick(e) {
    console.log({event: e});
    e.target.innerHTML = "취소";
}

function handleInputChange(e) {
    console.log(e); // 엔터키 번호 확인용
    // ctrl 눌러지면 true 
    if(e.ctrlKey && (e.keyCode === 13 || e.key === "Enter")) {
        // alert: 창 띄우기 / 인풋 안에 들어있는 글자 출력하기
        alert(e.target.value);
    }
}

function handleInputFocus(e) {
    if(!!e.target.value) {
        // e.target.value 인풋안에 값이 있을 떄
        e.target.value = "";
    }
}

function handlerInputBlur(e) {
    // 인풋에서 포커스가 벗어 났을 때 값이 없을 때
    if(!e.target.value) {
        alert("값을 입력해주세요.")
    }
}