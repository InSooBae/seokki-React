import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MyProd({ key, item, title, picture, date }) {
  const deleteProduct = e => {
    e.preventDefault();
    const loc = JSON.parse(localStorage.userToken).data[0];

    axios({
      method: 'delete',
      url: `/board/${item}`,
      headers: { token: loc }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <li className="uk-card uk-card-default uk-card-body tag-MyProd">
      <Link to={`/view/${item}`}>
        <img src={picture}></img>
        <span>{title}</span>
      </Link>
      <div className="uk-align-right uk-child-width-1-1">
        <button className="uk-button uk-button-text uk-grid-margin">
          수정
        </button>
        <button
          onClick={deleteProduct}
          className="uk-button uk-button-text uk-grid-margin"
        >
          삭제
        </button>
      </div>
      <div>{date}</div>
    </li>
  );
}
