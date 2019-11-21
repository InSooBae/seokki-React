import React from 'react';

export default function Recommend() {
  return (
    /* 추천 */
    <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body">
        <h3 className="uk-card-title uk-text-center">Recommendation</h3>
        <ul
          className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
          data-uk-grid
        >
          <li>
            <div className="uk-grid-match uk-grid-small" data-uk-grid>
              <div className="uk-text-center uk-text-secondary">
                <div
                  className="uk-inline-clip uk-transition-toggle"
                  tabIndex={0}
                >
                  <a href="#">
                    <img src="김치.jpg" />
                    <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                      <p className="uk-h4 uk-margin-remove uk-text-secondary">
                        추천1
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-grid-match uk-grid-small" data-uk-grid>
              <div className="uk-text-center uk-text-secondary">
                <div
                  className="uk-inline-clip uk-transition-toggle"
                  tabIndex={0}
                >
                  <a href="#">
                    <img src="김치.jpg" />
                    <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                      <p className="uk-h4 uk-margin-remove uk-text-secondary">
                        추천2
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-grid-match uk-grid-small" data-uk-grid>
              <div className="uk-text-center uk-text-secondary">
                <div
                  className="uk-inline-clip uk-transition-toggle"
                  tabIndex={0}
                >
                  <a href="#">
                    <img src="김치.jpg" />
                    <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                      <p className="uk-h4 uk-margin-remove uk-text-secondary">
                        추천3
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    /* //추천 문제없음*/
  );
}
