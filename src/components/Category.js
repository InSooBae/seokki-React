import React from 'react';

export default function Category() {
  return (
    /* 카테고리 종류 */
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
    /* 카테고리 종류 문제없음*/
  );
}
