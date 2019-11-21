import React from 'react';

export default function Search() {
  return (
    <div className="uk-text-center uk-margin-small-bottom">
      <img src="./img/seok (128).png" alt="로고" width="100px" height="100px" />
      <form className="uk-search uk-width-large uk-margin-large-left">
        <input
          className="uk-input uk-search-input"
          type="search"
          placeholder="Search..."
        />
        <a href="#" className="uk-search-icon-flip" data-uk-search-icon />
      </form>
    </div>
  );
}
