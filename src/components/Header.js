import React from 'react';

export default function Header() {
  return (
    /* 네비게이션 바 (background-color:지정해줘야함 ) */
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav className="uk-navbar-container" data-uk-navbar>
        {/* 좌측(nav) */}
        <div className="uk-navbar-left uk-margin-xlarge-left">
          {/* <em>석기시대</em> 쪽 실제 아이디 값 출력, margin-left:값 줘야함 */}
          <div>
            <a className="uk-navbar-toggle" uk-toggle="target: #offcanvas-nav">
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
            <a className="uk-navbar-toggle" href="/myPage">
              마이페이지
            </a>
          </div>
          <div>
            <a className="uk-navbar-toggle" href="/login">
              로그아웃
            </a>
          </div>
        </div>
      </nav>
    </div>
    /* //네비게이션 바 (background-color:지정해줘야함 ) */
  );
}
