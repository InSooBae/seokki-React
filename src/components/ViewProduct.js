import React, { Component } from 'react';

export default class ViewProduct extends Component {
  render() {
    return (
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body ">
          <h3 className="uk-card-title">양파 2.5kg</h3>
          <ul
            className="uk-grid-midium uk-child-width-1-1 uk-child-width-1-2@m uk-text-center"
            data-uk-grid
          >
            <li>
              <div className="uk-card uk-card-default uk-card-body">
                <img src="" />
              </div>
            </li>
            <div className="uk-text-bolder uk-text-left">
              <h4>양파 2.5kg</h4>
              <h4>#신선함 #당일교환가능</h4>

              <h2 className="uk-select">식 료 품</h2>

              <div className="uk-card uk-card-default uk-card-body uk-width-expand uk-margin-top ">
                <h3 className="uk-card-title ">Default</h3>
              </div>
            </div>
          </ul>
          <br />
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-width-expand@m">
              본가에서 직접 보내주신 양파입니다! 신선해요~!
            </div>
          </div>
          <div className="uk-flex uk-flex-right uk-margin-top">
            <p data-uk-margin>
              <button className="uk-button uk-button-primary">
                거 래 요 청
              </button>
            </p>
          </div>
        </div>
        <br />
        <div className="uk-card uk-card-default uk-card-hover uk-card-body ">
          <h3 className="uk-card-title">댓 글</h3>
          <textarea
            className="uk-textarea "
            rows={1}
            placeholder="댓글을 입력하세요."
            defaultValue={''}
          />
          <div className="uk-flex uk-flex-right uk-margin-top">
            <p uk-margin>
              <button className="uk-button uk-button-primary">
                댓 글 작 성
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
