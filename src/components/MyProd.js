import React, { useState, useEffect } from 'react';

export default function MyProd({ key, title, picture, date }) {
  return (
    <li className="uk-card uk-card-default uk-card-body tag-MyProd">
      <img src={picture}></img>
      <span>{title}</span>
      {date}
      <div className="uk-align-right uk-child-width-1-1">
        <button className="uk-button uk-button-text uk-grid-margin">
          수정
        </button>
        <button className="uk-button uk-button-text uk-grid-margin">
          삭제
        </button>
      </div>
    </li>
  );
}
