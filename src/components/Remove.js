import React from 'react';

const NewComponent = () => {
  return (
    <div>
      {/* 왼쪽 메뉴 (메뉴버튼 클릭시 나옴)*/}
      <div id="offcanvas-nav" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <ul className="uk-nav uk-nav-default">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
            <li className="uk-parent">
              <a href="#">Parent</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Sub item</a>
                </li>
                <li>
                  <a href="#">Sub item</a>
                </li>
              </ul>
            </li>
            <li className="uk-nav-header">Header</li>
            <li>
              <a href="#">
                <span className="uk-margin-small-right" uk-icon="icon: table" />
                Item
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="uk-margin-small-right"
                  uk-icon="icon: thumbnails"
                />
                Item
              </a>
            </li>
            <li className="uk-nav-divider" />
            <li>
              <a href="#">
                <span className="uk-margin-small-right" uk-icon="icon: trash" />
                Item
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* //왼쪽메뉴*/}
      {/* 네비게이션 바 (background-color:지정해줘야함 ) */}
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav className="uk-navbar-container" data-uk-navbar>
          {/* 좌측(nav) */}
          <div className="uk-navbar-left uk-margin-xlarge-left">
            {/* <em>석기시대</em> 쪽 실제 아이디 값 출력, margin-left:값 줘야함 */}
            <div>
              <a
                className="uk-navbar-toggle"
                uk-toggle="target: #offcanvas-nav"
              >
                <span uk-icon="menu" />
              </a>
            </div>
            <div className="uk-navbar-nav">
              <em>석기시대</em>님 환영합니다!
            </div>
          </div>
          {/* 우측(nav)  */}
          <div className="uk-navbar-right">
            {/* 검색 */}
            <div>
              <a className="uk-navbar-toggle" data-uk-search-icon href="#" />
              <div
                className="uk-drop"
                uk-drop="mode: click; pos: left-center; offset: 0"
              >
                <form className="uk-search uk-search-navbar uk-width-4-4">
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="검색..."
                    data-autofocus
                  />
                </form>
              </div>
            </div>
            {/* //검색 */}
            <ul className="uk-navbar-nav">
              <li>
                {/* 알림 드롭다운(width 지정해줘야함) */}
                {/* 알림 badge로 갯수 표시 javascript로 동적으로 변환해야함 */}
                <span>
                  <a href="#" uk-icon="bell" style={{ position: 'relative' }}>
                    <span
                      className="uk-badge"
                      style={{
                        background: 'red',
                        left: '10px',
                        bottom: '10px',
                        position: 'absolute'
                      }}
                    >
                      2
                    </span>
                  </a>
                </span>
                <div className="uk-navbar-dropdown " uk-drop="mode: click">
                  <ul className="uk-flex uk-flex-column uk-navbar-dropdown-nav uk-width-1-1">
                    <li>
                      <div className="uk-card uk-card-default uk-card-body">
                        Item1
                      </div>
                    </li>
                    <li>
                      <div className="uk-card uk-card-default uk-card-body uk-margin-top">
                        Item2
                      </div>
                    </li>
                  </ul>
                </div>
                {/* //알림 드롭다운 */}
              </li>
            </ul>
            <div>
              <a className="uk-navbar-toggle" href="#">
                마이페이지
              </a>
            </div>
            <div>
              <a className="uk-navbar-toggle" href="#">
                로그아웃
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* //네비게이션 바 (background-color:지정해줘야함 ) */}
      <div className="uk-text-center uk-margin-small-bottom">
        <img
          src="./img/seok (128).png"
          alt="로고"
          width="100px"
          height="100px"
        />
        <form className="uk-search uk-width-large uk-margin-large-left">
          <input
            className="uk-input uk-search-input"
            type="search"
            placeholder="Search..."
          />
          <a href="#" className="uk-search-icon-flip" data-uk-search-icon />
        </form>
      </div>
      <div className="uk-margin-large-left uk-margin-large-right">
        <div data-uk-grid>
          {/* 왼쪽 레이아웃 */}
          <div className="uk-width-1-5 uk-visible@l">
            {/* 왼쪽 플로팅 배너 */}
            <div className="uk-card uk-card-default" uk-sticky="offset : 150">
              <div className="uk-card-media-top">
                <img
                  src="./img/seok.png"
                  alt="프로필사진"
                  height="80vh"
                  style={{ maxWidth: '100%' }}
                />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">홍길동</h3>
                <p>....</p>
              </div>
              <div className="uk-card-footer">별점 넣는 곳</div>
            </div>
            {/* 왼쪽 플로팅 배너 */}
          </div>
          {/* 왼쪽 레이아웃 */}
          {/* 메인 */}
          <div className="uk-width-expand">
            <div className="uk-child-width-3-5 uk-grid-match" data-uk-grid>
              {/* 영상 */}
              <div>
                <div className="uk-card uk-card-secondary uk-card-hover uk-card-body">
                  <div uk-slideshow="animation: push">
                    <div
                      className="uk-position-relative uk-visible-toggle uk-light"
                      tabIndex={-1}
                    >
                      <ul className="uk-slideshow-items">
                        <li>
                          <iframe
                            width={1920}
                            height={1080}
                            src="https://www.youtube.com/embed/7R2DnnxZjOI?controls=0"
                            frameBorder={0}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            data-uk-responsive="true"
                            uk-video="automute: true"
                          />
                        </li>
                        <li>
                          <iframe
                            width={1920}
                            height={1080}
                            src="https://www.youtube.com/embed/PudUB0CxEZA"
                            frameBorder={0}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            data-uk-responsive="true"
                            uk-video="automute: true"
                          />
                        </li>
                      </ul>
                      <a
                        className="uk-position-center-left uk-position-small uk-hidden-hover"
                        href="#"
                        data-uk-slidenav-previous
                        uk-slideshow-item="previous"
                      />
                      <a
                        className="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        data-uk-slidenav-next
                        uk-slideshow-item="next"
                      />
                    </div>
                    <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
                  </div>
                </div>
              </div>
              {/* //영상 문제없음*/}
              {/* 추천 */}
              <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                  <h3 className="uk-card-title uk-text-center">
                    Recommendation
                  </h3>
                  <ul
                    className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
                    data-uk-grid
                  >
                    <li>
                      <div className="uk-grid-match uk-grid-small" data-uk-grid>
                        <div className="uk-text-center uk-text-secondary">
                          <div
                            className="uk-inline-clip uk-transition-toggle"
                            tabIndex={0}
                          >
                            <a href="#">
                              <img src="김치.jpg" />
                              <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                  추천1
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="uk-grid-match uk-grid-small" data-uk-grid>
                        <div className="uk-text-center uk-text-secondary">
                          <div
                            className="uk-inline-clip uk-transition-toggle"
                            tabIndex={0}
                          >
                            <a href="#">
                              <img src="김치.jpg" />
                              <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                  추천2
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="uk-grid-match uk-grid-small" data-uk-grid>
                        <div className="uk-text-center uk-text-secondary">
                          <div
                            className="uk-inline-clip uk-transition-toggle"
                            tabIndex={0}
                          >
                            <a href="#">
                              <img src="김치.jpg" />
                              <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                  추천3
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* //추천 문제없음*/}
              {/* 카테고리 종류 */}
              <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                  <ul
                    className="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center"
                    data-uk-grid
                  >
                    <li>
                      <a
                        className="uk-button uk-button-primary uk-button-body"
                        href="#food"
                        data-uk-scroll
                      >
                        식 료 품
                      </a>
                    </li>
                    <li>
                      <a
                        className="uk-button uk-button-primary uk-button-body"
                        href="#elec"
                        data-uk-scroll
                      >
                        전 자 기 기 / IT
                      </a>
                    </li>
                    <li>
                      <a
                        className="uk-button uk-button-primary uk-button-body"
                        href="#book"
                        data-uk-scroll
                      >
                        중 고 서 적
                      </a>
                    </li>
                    <li>
                      <a
                        className="uk-button uk-button-primary uk-button-body"
                        href="#cloth"
                        data-uk-scroll
                      >
                        의 류
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* 카테고리 종류 문제없음*/}
              {/* 식료품 */}
              <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                  <h3 className="uk-card-title">식 료 품</h3>
                  <div
                    className="uk-grid"
                    uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
                  >
                    <ul
                      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
                      data-uk-grid
                    >
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* //식료품 */}
              {/* 전자기기/IT */}
              <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                  <h3 className="uk-card-title">전 자 기 기 / I T</h3>
                  <div
                    className="uk-grid"
                    uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
                  >
                    <ul
                      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
                      data-uk-grid
                    >
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* //전자기기/IT */}
              {/* 중고서적 */}
              <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                  <h3 className="uk-card-title">중 고 서 적</h3>
                  <div
                    className="uk-grid"
                    uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
                  >
                    <ul
                      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
                      data-uk-grid
                    >
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* //중고서적 */}
              {/* 의류 */}
              <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                  <h3 className="uk-card-title">의 류</h3>
                  <div
                    className="uk-grid"
                    uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
                  >
                    <ul
                      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
                      data-uk-grid
                    >
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="uk-grid-match uk-grid-small"
                          data-uk-grid
                        >
                          <div className="uk-text-center uk-text-secondary">
                            <div
                              className="uk-inline-clip uk-transition-toggle"
                              tabIndex={0}
                            >
                              <a href="#">
                                <img src="김치.jpg" />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                  <p className="uk-h4 uk-margin-remove uk-text-secondary">
                                    김치
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* //의류 */}
            </div>
          </div>
          {/* 메인 */}
          {/* 오른쪽 레이아웃 uk-visible@m: 크기 medium이하면 안보임*/}
          <div className="uk-width-1-5 uk-visible@m">
            {/* 오른쪽 플로팅 배너 */}
            <div
              className="uk-card uk-card-default"
              uk-sticky="offset : 150"
              style={{ zIndex: -1 }}
            >
              <div className="uk-card-header">최근 본 상품</div>
              <div className="uk-card-body">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
              </div>
              <div className="uk-card-footer">top버튼</div>
            </div>
            <div className="uk-text-center" uk-sticky="offset : 520">
              <button className="uk-button uk-button-default uk-button-large uk-text-bolder">
                물품 등록
              </button>
            </div>
            {/* 오른쪽 플로팅 배너 */}
          </div>
          {/* 오른쪽 레이아웃*/}
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
