import React from 'react';

export default function Login() {
  return (
    <div>
      <div
        className="uk-card uk-background-muted uk-card-hover uk-card-body"
        style={{ height: '700px' }}
      >
        <div className="uk-card-header">
          <div>
            <div>
              <div className="uk-card-body">
                <h3 className="uk-card-title uk-text-center">LOGIN</h3>
              </div>
              <div className="uk-card-media-bottom"></div>
            </div>
          </div>
        </div>
        {/* 로그인 */}
        <form>
          <div className="uk-margin uk-flex uk-flex-center">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user" />
              <input
                className="uk-input uk-form-width-large"
                type="text"
                placeholder="아이디"
              />
            </div>
          </div>
          <div className="uk-margin uk-flex uk-flex-center">
            <div className="uk-inline ">
              <span
                className="uk-form-icon uk-form-icon"
                uk-icon="icon: lock"
              />
              <input
                className="uk-input uk-form-width-large"
                type="password"
                placeholder="비밀번호"
              />
            </div>
          </div>
          <div className="uk-margin uk-flex uk-flex-center">
            <button className="uk-button uk-button-primary uk-form-width-large uk-margin-small-bottom">
              Submit
            </button>
          </div>
        </form>
        {/* //로그인 */}
        <div className="uk-card-footer uk-margin uk-flex uk-flex-center">
          <ul className="uk-breadcrumb">
            <li>
              <button className="uk-button uk-button-text">아이디 저장</button>
            </li>
            <li>
              <a href="/login/findPW" className="uk-button uk-button-text">
                비밀번호 찾기
              </a>
            </li>
            <li>
              <a href="/login/signUp" className="uk-button uk-button-text">
                회원가입
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
