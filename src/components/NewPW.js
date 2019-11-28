import React from 'react';

export default function NewPW() {
  return (
    <div className="uk-child-width-1-1 uk-grid-match" data-uk-grid>
      <div>
        <div
          className="uk-card uk-background-muted uk-card-hover uk-card-body"
          style={{ height: '700px' }}
        >
          <div className="uk-card-header">
            <div>
              <div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-center">
                    비밀번호 입력
                  </h3>
                </div>
                <div className="uk-card-media-bottom" />
              </div>
            </div>
          </div>
          {/* 로그인 */}
          <form>
            <div className="uk-margin uk-flex uk-flex-center">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: lock" />
                <input
                  className="uk-input uk-form-width-large"
                  type="password"
                  placeholder="비밀번호 입력란"
                />
              </div>
            </div>
            <div className="uk-margin uk-flex uk-flex-center">
              <button className="uk-button uk-button-primary uk-form-width-large uk-margin-small-bottom">
                비밀번호 변경
              </button>
            </div>
          </form>
          {/* //로그인 */}
        </div>
      </div>
    </div>
  );
}
