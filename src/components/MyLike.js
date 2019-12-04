import React, { useState, useEffect } from 'react';

export default function MyLike({ key, picture, title }) {
  return (
    <li className="uk-card uk-card-default uk-card-body tag-Like">
      <img src={picture} alt="이미지"></img>
      {title}
      <div className="uk-align-right uk-child-width-1-1">
        <button className="uk-button uk-button-danger uk-grid-margin">
          <span href uk-icon="heart" />
        </button>
      </div>
    </li>
  );
}
