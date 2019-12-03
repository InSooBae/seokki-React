import React, { useState, useEffect } from 'react';
export default function MyReq({ key, title, picture, date }) {
  return (
    <li className="uk-card uk-card-default uk-card-body tag-Require">
      <img src={picture}></img>
      <span>{title}</span>
      {date}
      <a className="uk-accordion-title" href="#" />
      <div className="uk-accordion-content">
        <div className="uk-card uk-card-body">
          <a className="uk-card-badge uk-label">거래취소</a>
          Item
        </div>
      </div>
    </li>
  );
}
