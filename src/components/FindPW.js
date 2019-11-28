import React from 'react';

export default function FindPW() {
  return (
    <div className="uk-child-width-1-1 uk-grid-match" data-uk-grid>
      <div>
        <div
          className=" uk-card uk-background-muted uk-card-hover uk-card-body"
          style={{ height: '700px' }}
        >
          <div className="uk-card-header">
            <div>
              <div className="uk-card-body">
                <h3 className="uk-card-title uk-text-center">비밀번호 찾기</h3>
              </div>
              <div className="uk-card-media-bottom" />
            </div>
          </div>
          {/* 로그인 */}
          <form className="uk-flex uk-flex-column uk-flex-middle">
            <div className="uk-flex uk-flex-center" data-uk-margin>
              <div uk-form-custom="target: true">
                <span className="uk-form-icon" uk-icon="icon: user" />
                <input
                  className="uk-input uk-form-width-large"
                  type="text"
                  placeholder="아이디 입력란"
                />
              </div>
            </div>
            <div className="uk-margin uk-flex uk-flex-width-1-1@m uk-width-1-2 uk-flex-wrap-around">
              <select className="uk-select">
                <option>나의 보물 제 1호는?</option>
                <option>내가 나온 초등학교의 이름은?</option>
                <option>내가 나온 중학교의 이름은?</option>
              </select>
            </div>
            <div className="uk-margin ">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user" />
                <input
                  className="uk-input uk-form-width-large"
                  type="text"
                  placeholder="비밀번호 찾기 질문 답변란"
                />
              </div>
            </div>
            <div className="uk-margin uk-flex uk-flex-center">
              <button className="uk-button uk-button-primary uk-form-width-large uk-margin-small-bottom">
                본인확인
              </button>
            </div>
          </form>
          {/* //로그인 */}
        </div>
      </div>
    </div>
  );
}
