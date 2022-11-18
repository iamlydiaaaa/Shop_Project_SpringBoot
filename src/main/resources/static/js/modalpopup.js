window.onload = function(){ //window.onload가 없으면 아래 메소드 실행이 안된다.
    function popup(wrap){
        //모달 팝업 나타내기, 없애기 메소드
        const open = () => {
            document.querySelector(wrap).classList.add("show");
            document.querySelector(wrap).style.opacity = "1";
        }
        const close = () => {
            document.querySelector(wrap).classList.remove("show");
            document.querySelector(wrap).style.opacity = "0";
        }

        //버튼 클릭시 메소드 실행
        document.querySelector(".popupClick").addEventListener("click", open);
        document.querySelector(".closeBtn").addEventListener("click", close);
        document.querySelector(".popup_x").addEventListener("click", close);
        document.querySelector(".popup_bg").addEventListener("click", close);
    }

    popup('#jin_popup');
}