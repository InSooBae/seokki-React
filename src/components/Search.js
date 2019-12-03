import React, { useState } from 'react';
import logo from '../image/seok (128).png';
import useInput from '../Hooks/useInput';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

export default function Search() {
  const search = useInput();
  const [send, setSend] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    setSend(true);
  };

  return (
    <>
      {send ? (
        <Redirect to={`/search?keyword=${search.value}`} />
      ) : (
        <div className="uk-text-center uk-margin-small-bottom">
          <Link to="/">
            <a href="/">
              <img src={logo} alt="로고" width="100px" height="100px" />
            </a>
          </Link>

          <form
            onSubmit={handleFormSubmit}
            className="uk-search uk-width-large uk-margin-large-left"
          >
            <input
              className="uk-input uk-search-input"
              type="search"
              placeholder="Search..."
              {...search}
            />
            <a
              href="#"
              onClick={handleFormSubmit}
              className="uk-search-icon-flip"
              data-uk-search-icon
            />
          </form>
        </div>
      )}
    </>
  );
}
