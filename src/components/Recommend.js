import React from 'react';

export default function Recommend({ title, picture }) {
  return (
    /* 추천 */

    <li>
      <div className="uk-grid-match uk-grid-small" data-uk-grid>
        <div className="uk-text-center uk-text-secondary">
          <div className="uk-inline-clip uk-transition-toggle" tabIndex={0}>
            <h4 className="uk-card-title">{title}</h4>
            <a href="#">
              <img src={picture} />
              <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                <p className="uk-margin-remove uk-text-secondary">{title}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
