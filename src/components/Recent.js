import React from 'react';

export default function Recent() {
  return (
    /* 오른쪽 레이아웃 uk-visible@m: 크기 medium이하면 안보임*/
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
        <a
          href="/register"
          className="uk-button uk-button-default uk-button-large uk-text-bolder"
        >
          물품 등록
        </a>
      </div>
      {/* 오른쪽 플로팅 배너 */}
    </div>
    /* 오른쪽 레이아웃*/
  );
}
