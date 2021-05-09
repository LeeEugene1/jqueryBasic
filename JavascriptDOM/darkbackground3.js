var darkbtn = document.querySelector('#darkbtn')
darkbtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    // 클래스이름자체를 바꾸고싶으면
    darkbtn.className = '#darkbtn2'
});