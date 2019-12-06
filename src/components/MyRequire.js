import React, { useState, useEffect } from 'react';
export default function MyReq({
  key,
  aTitle,
  rTitle,
  aPicture,
  rPicture,
  rName,
  date
}) {
  return (
    <li className="uk-card uk-card-default uk-card-body tag-Require">
      <img width="100px" height="100px" src={aPicture}></img>
      {aTitle}
      <img width="100px" height="100px" masrc={rPicture}></img>
      {rTitle}
      <span></span>
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
