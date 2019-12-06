import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function MyLike({ key, item, picture, title }) {
  const [a, b] = useState(false);
  const [loading, setLoading] = useState();
  const clickLike = e => {
    e.preventDefault();
    const loc = JSON.parse(localStorage.userToken).data[0];
    axios({
      method: 'post',
      url: `/board/like/${item}`,
      headers: { token: loc }
    })
      .then(function(response) {
        console.log(response);
        setLoading({});
      })
      .catch(function(error) {
        console.log(error);
        setLoading({});
      });
  };
  useEffect(() => {
    setLoading(false);
    console.log('gkdl');
  }, [loading]);
  return (
    <li className="uk-card uk-card-default uk-card-body tag-Like">
      <Link to={`/view/${item}`}>
        <img src={picture} alt="이미지"></img>
        {title}
      </Link>
      <div className="uk-align-right uk-child-width-1-1">
        <button
          onClick={clickLike}
          className="uk-button uk-button-danger uk-grid-margin"
        >
          <span href uk-icon="heart" />
        </button>
      </div>
    </li>
  );
}
