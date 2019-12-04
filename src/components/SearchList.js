import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchList({
  count,
  item,
  title,
  nickname,
  picture,
  text,
  views
}) {
  return (
    <li>
      <div>
        <div className="uk-card uk-card-body " data-uk-grid>
          <Link to={`/view/${item}`}>
            <h3 className="uk-card-title">{title}</h3>
            <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
              <div className="uk-width-1-5">
                <img src={picture} />
              </div>
              <div className="uk-width-1-2 uk-margin-left">{text}</div>
              <div className="uk-width-1-2 uk-margin-left">
                {`좋아요:${count},조회수:${views}`}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
}
