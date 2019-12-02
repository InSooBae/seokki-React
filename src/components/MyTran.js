import React from 'react';

export default function MyTran() {
  return (
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
  );
}
