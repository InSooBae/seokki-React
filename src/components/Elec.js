import React, { useState } from 'react';

export default function Elec({ key, title, picture }) {
  const [id, setId] = useState(key);
  return (
    /* 전자기기/IT */

    <li>
      <div className="uk-grid-match uk-grid-small" data-uk-grid>
        <div className="uk-text-center uk-text-secondary">
          <div className="uk-inline-clip uk-transition-toggle" tabIndex={0}>
            <div className="uk-card-title">{title}</div>
            <a href="#">
              <img src={picture} />
              <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                <p className=" uk-margin-remove uk-text-secondary">{title}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
