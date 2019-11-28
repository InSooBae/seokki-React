import React, { Component } from 'react';

export default class MyPage extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="uk-card uk-card-hover uk-card-body">
          <h3 className="uk-card-title">
            <div uk-filter="target: .js-filter">
              <ul className="uk-subnav uk-subnav-pill uk-child-width-expand uk-text-center">
                <li className="uk-active" uk-filter-control=".tag-MyProd">
                  <a href="#">My Products</a>
                </li>
                <li uk-filter-control=".tag-Require">
                  <a href="#">요청한 상품</a>
                </li>
                <li uk-filter-control=".tag-Request">
                  <a href="#">요청받은 상품</a>
                </li>
                <li uk-filter-control=".tag-Tran">
                  <a href="#">교환 완료</a>
                </li>
                <li uk-filter-control=".tag-Like">
                  <a href="#">Like</a>
                </li>
              </ul>
              <hr className="uk-divider-icon" />
              {/* 마이페이지 */}
              <ul className="js-filter uk-list" uk-accordion="multiple: true">
                <li className="uk-card uk-card-default uk-card-body tag-Require">
                  이미지
                  <a className="uk-accordion-title" href="#" />
                  <div className="uk-accordion-content">
                    <div className="uk-card uk-card-body">
                      <a className="uk-card-badge uk-label">거래취소</a>
                      Item
                    </div>
                  </div>
                </li>
                <li className="uk-card uk-card-default uk-card-body tag-Require">
                  이미지
                  <a className="uk-accordion-title" href="#" />
                  <div className="uk-accordion-content">
                    <div className="uk-card uk-card-body">
                      <a className="uk-card-badge uk-label">거래취소</a>
                      Item
                    </div>
                  </div>
                </li>
                <li className="uk-card uk-card-default uk-card-body tag-Request">
                  이미지
                  <a className="uk-accordion-title" href="#" />
                  <div className="uk-accordion-content">
                    <div className="uk-card uk-card-body">
                      <a className="uk-card-badge uk-label">거래하기</a>
                      Item
                    </div>
                  </div>
                </li>
                <li className="uk-card uk-card-default uk-card-body tag-MyProd">
                  이미지
                  <div className="uk-align-right uk-child-width-1-1">
                    <button className="uk-button uk-button-text uk-grid-margin">
                      수정
                    </button>
                    <button className="uk-button uk-button-text uk-grid-margin">
                      삭제
                    </button>
                  </div>
                </li>
                <li className="uk-card uk-card-default uk-card-body tag-MyProd">
                  이미지
                  <div className="uk-align-right uk-child-width-1-1">
                    <button className="uk-button uk-button-text uk-grid-margin">
                      수정
                    </button>
                    <button className="uk-button uk-button-text uk-grid-margin">
                      삭제
                    </button>
                  </div>
                </li>
                <li className="uk-card uk-card-default uk-card-body tag-MyProd">
                  이미지
                  <div className="uk-align-right uk-child-width-1-1">
                    <button className="uk-button uk-button-text uk-grid-margin">
                      수정
                    </button>
                    <button className="uk-button uk-button-text uk-grid-margin">
                      삭제
                    </button>
                  </div>
                </li>
                {/* 트랜잭션 */}
                <li className="uk-card uk-card-default uk-card-body tag-Tran">
                  이미지 이미지
                  <div className="uk-align-right uk-child-width-1-1">
                    <button className="uk-button uk-button-text uk-grid-margin">
                      별점주기
                    </button>
                    <select id="example">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                </li>

                {/* //트랜잭션 */}
                <li className="uk-card uk-card-default uk-card-body tag-Like">
                  이미지
                  <div className="uk-align-right uk-child-width-1-1">
                    <button className="uk-button uk-button-danger uk-grid-margin">
                      <span href uk-icon="heart" />
                    </button>
                  </div>
                </li>
              </ul>
              {/* 마이페이지 */}
            </div>
          </h3>
        </div>
      </div>
    );
  }
}
