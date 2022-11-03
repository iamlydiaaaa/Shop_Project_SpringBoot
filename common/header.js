window.onload = function () { //window.onload가 없으면 아래 메소드 실행이 안된다.
    function popup(wrap) {
        //모달 팝업 나타내기, 없애기 메소드
        const open = () => {
            document.querySelector(wrap).style.visibility = "visible";
            document.querySelector(wrap).style.opacity = "1";
            document.querySelector(".inner").style.left = "0";
        }
        const close = () => {
            document.querySelector(wrap).style.visibility = "hidden";
            document.querySelector(wrap).style.opacity = "0";
            document.querySelector(".inner").style.left = "-460px";
        }

        //버튼 클릭시 메소드 실행
        document.querySelector(".popupClick").addEventListener("click", open);
        document.querySelector(".closeBtn").addEventListener("click", close);
    }

    popup('.sitemap');
    //popup('.all-search');
}

var header = `
<header id="header">
    <h1 class="logo">
        <a href="/">HOME</a>
    </h1>

    <div class="sitemap-wrap">
        <a href="javascript:;" class="btn-sitemap-open popupClick"><span class="hide">열기</span></a>
        <div class="sitemap">
            <div class="inner">
                <h2 class="sitemap-logo"><a href="/">홈</a></h2>
                <nav class="all-menu-wrap">
                    <ul class="all-menu">
                        <li>
                            <a href="#">Product</a>
                            <ul class="depth">
                                <li><a href="#">베스트</a></li>
                                <li><a href="#">신상품</a></li>
                                <li><a href="#">메뉴1</a></li>
                                <li><a href="#">메뉴2</a></li>
                                <li><a href="#">메뉴3</a></li>
                                <li><a href="#">메뉴4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/sub/about.php">About Baexang</a>
                            <ul class="depth">
                                <li><a href="/sub/about.php">회사소개</a></li>
                                <li><a href="javascript:alert('준비중입니다.');">갤러리</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/bbs/board.php?bo_table=notice">Community</a>
                            <ul class="depth">
                                <li><a href="/bbs/board.php?bo_table=notice">공지사항</a></li>
                                <li><a href="/bbs/board.php?bo_table=event">이벤트</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/bbs/faq.php">Service</a>
                            <ul class="depth">
                                <li><a href="/bbs/faq.php">FAQ</a></li>
                                <li><a href="/sub/support.php">제휴협찬문의</a></li>
                                <li><a href="/bbs/qalist.php">1:1 문의</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <nav class="info-menu-wrap">
                    <h2 class="hide">로그인 관련 메뉴</h2>
                    <ul class="info-menu">
                        <li><a href="#">로그인</a></li>
                        <li><a href="#">회원가입</a></li>
                        <li><a href="#">주문조회</a></li>
                        <li><a href="#">장바구니</a></li>
                        <li><a href="#">고객센터</a></li>
                    </ul>
                </nav>
                <a href="javascript:;" class="btn-sitemap-close closeBtn"><span class="hide">닫기</span></a>
            </div>
        </div>
    </div>

    <nav class="gnb-wrap">
        <ul class="gnb">
            <li><a href="#">베스트</a></li>
            <li><a href="#">신상품</a></li>
            <li><a href="#">메뉴1</a></li>
            <li><a href="#">메뉴2</a></li>
            <li><a href="#">메뉴3</a></li>
            <li><a href="#">메뉴4</a></li>
        </ul>
    </nav>

    <nav class="gnb-info-wrap">
        <ul class="gnb-info">
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
            <li><a href="#">주문조회</a></li>
            <li><a href="#">장바구니</a></li>
            <li><a href="#">고객센터</a></li>
        </ul>
    </nav>

    <div class="all-search-wrap">
        <a href="javascript:;" class="btn-all-search-open">검색창 열기</a>
        <div class="all-search">
            <fieldset id="hd_sch">
                <legend>쇼핑몰 전체검색</legend>
                <div class="sch-word-box">
                    <form name="frmsearch1" action="https://bxgs.co.kr/shop/search.php" onsubmit="return search_submit(this);">
                        <label for="sch_str" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
                        <input type="text" name="q" value="" id="sch_str" required placeholder="Search..." autocomplete="off">
                        <button type="submit" id="sch_submit" value="검색"><span class="sound_only">검색</span></button>
                    </form>
                </div>
                <div class="sch-word-wrap">
                    <div class="sch-recent-word">
                        <h2>최근검색어</h2>
                        <ul>
                            <!-- <li class="sch-word-empty">최근검색어가 없습니다.</li>-->
                            <li>
                                <a href="" class="recent-word">#클로드 모네</a>
                                <span class="recent-date">2022.03.14</span>
                                <button type="button" class="recent-delete"><span class="hide">삭제</span></button>
                            </li>
                            <li>
                                <a href="" class="recent-word">#빈센트 반 고흐</a>
                                <span class="recent-date">2022.03.14</span>
                                <button type="button" class="recent-delete"><span class="hide">삭제</span></button>
                            </li>
                            <li>
                                <a href="" class="recent-word">#정원의 여인들</a>
                                <span class="recent-date">2022.03.14</span>
                                <button type="button" class="recent-delete"><span class="hide">삭제</span></button>
                            </li>
                        </ul>
                    </div>
                    <div class="sch-popular-word">
                        <h2>인기검색어</h2>
                        <ul>
                            <!-- <li class="sch-word-empty">인기검색어가 없습니다.</li>-->
                            <li><a href="">1. 클로드 모네</a></li>
                            <li><a href="">2. 정원의 여인들</a></li>
                            <li><a href="">3. 빈센트 반 고흐</a></li>
                            <li><a href="">4. 해바라기</a></li>
                            <li><a href="">5. 폴 고갱</a></li>
                            <li><a href="">6. 생 라자르 역</a></li>
                            <li><a href="">7. 황색의 그리스도</a></li>
                            <li><a href="">8. 파블로 피카소</a></li>
                            <li><a href="">9. 아비뇽의 아가씨들</a></li>
                        </ul>
                    </div>
                </div>
                <a href="javascript:;" class="btn-all-search-close closeBtn"><span class="hide">검색창 닫기</span></a>
            </fieldset>
        </div>

        <script>
            function search_submit(f) {
                if (f.q.value.length < 2) {
                    alert("검색어는 두글자 이상 입력하십시오.");
                    f.q.select();
                    f.q.focus();
                    return false;
                }
                return true;
            }

        </script>
    </div>
</header>
`;

document.write(header);
