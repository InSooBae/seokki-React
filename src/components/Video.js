import React from 'react';

export default function Video() {
  return (
    /* 영상 */
    <div>
      <div className="uk-card uk-card-secondary uk-card-hover uk-card-body">
        <div uk-slideshow="animation: push">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex={-1}
          >
            <ul className="uk-slideshow-items">
              <li>
                <iframe
                  width={1920}
                  height={1080}
                  src="https://www.youtube.com/embed/7R2DnnxZjOI?controls=0"
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-uk-responsive="true"
                  uk-video="automute: true"
                />
              </li>
              <li>
                <iframe
                  width={1920}
                  height={1080}
                  src="https://www.youtube.com/embed/PudUB0CxEZA"
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-uk-responsive="true"
                  uk-video="automute: true"
                />
              </li>
            </ul>
            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              data-uk-slidenav-previous
              uk-slideshow-item="previous"
            />
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              data-uk-slidenav-next
              uk-slideshow-item="next"
            />
          </div>
          <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
        </div>
      </div>
    </div>
    /* //영상 문제없음*/
  );
}
