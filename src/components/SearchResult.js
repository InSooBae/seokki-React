import React, { Component } from 'react';

export default class SearchResult extends Component {
  render() {
    return (
      <div className="uk-child-width-3-5 uk-grid-match" data-uk-grid>
        {/* 영상 */}
        <div>
          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <ul
              className="uk-subnav-pill uk-flex-right uk-breadcrumb"
              data-uk-switcher
            >
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
            </ul>
            <ul
              className="uk-subnav-pill uk-flex-right uk-breadcrumb"
              data-uk-switcher
            >
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
            </ul>
            <div>
              <h4>검 색 결 과</h4>
              <ul className="uk-list uk-list-large uk-list-divider">
                <li>
                  <div>
                    <div className="uk-card uk-card-body " data-uk-grid>
                      <h3 className="uk-card-title">김치</h3>
                      <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
                        <div className="uk-width-1-5">
                          <img src="" />
                        </div>
                        <div className="uk-width-1-2 uk-margin-left">
                          본가에서 직접 보내주신 대용량 배추김치입니다!
                          신선해요~!
                        </div>
                        <div className="uk-width-1-2 uk-margin-left">
                          #신선함 #당일교환 #김치
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>List item 2</li>
                <li>List item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
