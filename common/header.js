window.onload = function () { //window.onload가 없으면 아래 메소드 실행이 안된다.

    // 왼쪽 숨겨진 메뉴 show / hide
    var menu = document.querySelector(".inner");
    document.querySelector(".popupClick").addEventListener("click", function(){
        menu.style.cssText = 'left: 0; visibility: visible;';
    });
    document.querySelector(".closeBtn").addEventListener("click", function(){
         menu.style.cssText = 'left: -700px; visibility: hidden;';
    });
    
     // 검색창 show / hide
    var sch = document.querySelector(".all-search");  
    document.querySelector(".btn-all-search-open").addEventListener("click", function(){
        sch.style.cssText = ' opacity: 1; top: 100px; visibility:visible; ';
    });
    document.querySelector(".btn-all-search-close").addEventListener("click", function(){
         sch.style.cssText = ' opacity : 0; top: 0px; visibility:hidden; ';
    });
    
    //전체메뉴에서 큰 카테고리 마우스오버시 하위메뉴 등장
    $(".all-menu>li>a").mouseover(function() {
        $(".depth").css("visibility","hidden");
        $(".all-menu>li>a").css("color","#333");
        $(this).css("color","#f79744");
        $(this).siblings(".depth").css("visibility","visible");
    })
}

var header = `
<header id="header">
    <h1 class="logo">
        <a href="/index.html">HOME</a>
    </h1>
    <!--    왼쪽 숨겨진 메뉴 부분 시작   -->
    <div class="sitemap-wrap">
        <a href="javascript:;" class="btn-sitemap-open popupClick"><span class="hide">Side Menu</span></a>
        <div class="sitemap">
            <div class="inner">
                <h2 class="sitemap-logo"><a href="./index.html"><span class="hide">Home</span></a></h2>
                <nav class="all-menu-wrap">
                    <ul class="all-menu">
                        <li>
                            <a href="#">Product</a>
                            <ul class="depth">
                                <li><a href="#" style="color: #f79744">BEST</a></li>
                                <li><a href="#">NEW</a></li>
                                <li><a href="#">TAPE</a></li>
                                <li><a href="#">STICKER</a></li>
                                <li><a href="#">LIVING</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/sub/about.php">A Scoop Of P</a>
                            <ul class="depth">
                                <li><a href="#">Brand Story</a></li>
                                <li><a href="javascript:alert('준비중입니다.');">Gallery</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Community</a>
                            <ul class="depth">
                                <li><a href="#">Noice</a></li>
                                <li><a href="#">Event</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Service</a>
                            <ul class="depth">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Q&amp;A</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <nav class="info-menu-wrap">
                    <h2 class="hide">로그인 관련 메뉴</h2>
                    <ul class="info-menu">
                        <li><a href="./user/login.html">LOGIN</a></li>
                        <li><a href="./user/join.html">JOIN</a></li>
                        <li><a href="#">MY_ORDER</a></li>
                        <li><a href="#">CART</a></li>
                        <li><a href="./board/boardList.html">CS_CENTER</a></li>
                    </ul>
                </nav>
                <a href="javascript:;" class="btn-sitemap-close closeBtn"><span class="hide">Close</span></a>
            </div>
        </div>
    </div> <!--    왼쪽 숨겨진 메뉴 부분 끝  -->

    <!--   ====== 상단 GNB 시작 (왼쪽,오른쪽) ======   -->
    <nav class="gnb-wrap">
        <ul class="gnb">
            <li><a href="#" style="color: #f79744">BEST</a></li>
            <li><a href="#">NEW</a></li>
            <li><a href="#">TAPE</a></li>
            <li><a href="#">STICKER</a></li>
            <li><a href="#">LIVING</a></li>
        </ul>
    </nav>

    <nav class="gnb-info-wrap">
        <ul class="gnb-info">
            <li><a href="./user/login.html">LOGIN</a></li>
            <li><a href="./user/join.html">JOIN</a></li>
            <li><a href="#">MY_ORDER</a></li>
            <li><a href="#">CART</a></li>
            <li><a href="./board/boardList.html">CS_CENTER</a></li>
        </ul>
    </nav>
    <!--   ====== 상단 GNB 끝 ======    -->

    <!--   ====== 검색 부분 시작 ======    -->
    <div class="all-search-wrap">
        <a href="javascript:;" class="btn-all-search-open">Search</a>

        <!--   ====== 숨겨진 검색 팝업창 ======    -->
        <div class="all-search">
            <fieldset id="hd_sch">
                <div class="sch-word-box">
                    <form name="frmsearch1" action="https://bxgs.co.kr/shop/search.php" onsubmit="return search_submit(this);">
                        <label for="sch_str" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
                        <input type="text" name="q" value="" id="sch_str" required placeholder="Search..." autocomplete="off">
                        <button type="submit" id="sch_submit" value="검색"><span class="sound_only">Search</span></button>
                    </form>
                </div>
                <div class="sch-word-wrap">
                    <div class="sch-recent-word">
                        <h2>Recent Search</h2>
                        <ul>
                            <!-- <li class="sch-word-empty">최근검색어가 없습니다.</li>-->
                            <li>
                                <a href="" class="recent-word">#Masking tape</a>
                                <span class="recent-date">2022.10.14</span>
                                <button type="button" class="recent-delete"><span class="hide">DEL</span></button>
                            </li>
                            <li>
                                <a href="" class="recent-word">#Airpod</a>
                                <span class="recent-date">2022.11.14</span>
                                <button type="button" class="recent-delete"><span class="hide">DEL</span></button>
                            </li>
                        </ul>
                    </div>
                    <div class="sch-popular-word">
                        <h2>Top Searched</h2>
                        <ul>
                            <!-- <li class="sch-word-empty">인기검색어가 없습니다.</li>-->
                            <li><a href="">1. Masking tape</a></li>
                            <li><a href="">2. Sticker</a></li>
                            <li><a href="">3. Keyring</a></li>
                            <li><a href="">4. Airpod case</a></li>
                            <li><a href="">5. Birthday</a></li>
                            <li><a href="">6. Heart</a></li>
                        </ul>
                    </div>
                </div>
                <a href="javascript:;" class="btn-all-search-close closeBtn"><span class="hide">Close Search</span></a>
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
