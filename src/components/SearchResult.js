import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchList from './SearchList';

export default function SearchResult({ path, location, match }) {
  const [ser, setSer] = useState([]);
  useEffect(() => {
    let a = location.search;
    let b = a.split('=')[1];
    axios
      .get('/search/title/ByDate', {
        params: {
          keyword: b
        }
      })
      .then(function(response) {
        console.log(response);
        setSer(response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });

    console.log(b);
  }, []);

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
              {ser ? (
                ser.map(arr => {
                  return (
                    <SearchList
                      id={arr.item_idx}
                      item={arr.item_idx}
                      text={arr.text}
                      title={arr.title}
                      nickname={arr.nickname}
                      picture={arr.thumbnail}
                      views={arr.views}
                    />
                  );
                })
              ) : (
                <div>검색결과 없음</div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
