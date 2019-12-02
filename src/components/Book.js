import React, { useState } from 'react';

export default function Book({ key, title, picture }) {
  const [id, setId] = useState(key);
  return (
    /* 중고서적 */

    <li>
      <div
        className="uk-card uk-card-default uk-card-body uk-card-hover uk-grid-match uk-grid-small"
        data-uk-grid
      >
        <div className="uk-text-center uk-text-secondary">
          <div className="uk-inline-clip uk-transition-toggle" tabIndex={0}>
            <h4 className="uk-card-title">{title}</h4>
            <a href="#">
              <img src={picture} />
              <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                <p className="uk-h4 uk-margin-remove uk-text-secondary">
                  {title}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
