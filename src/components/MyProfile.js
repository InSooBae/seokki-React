import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MyProfile() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const loc = JSON.parse(localStorage.userToken).data[0];

  useEffect(() => {
    axios
      .get('http://seokki.kro.kr/mypage', {
        headers: {
          token: loc
        }
      })
      .then(function(response) {
        const {
          data: {
            data: [a]
          }
        } = response;
        setProfile(a);
      })
      .catch(function(error) {
        console.log(error);
      });

    setLoading(false);
  }, []);
  return (
    /* 왼쪽 레이아웃 */
    <div className="uk-width-1-5 uk-visible@l">
      {/* 왼쪽 플로팅 배너 */}
      <div className="uk-card uk-card-default" uk-sticky="offset : 150">
        <div className="uk-card-media-top">
          <img
            className="uk-border-circle"
            src={profile.photo}
            alt="프로필사진"
            height="80vh"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div className="uk-card-body">
          <div className="uk-flex">
            <h3 className="uk-card-title uk-width-3-5">{profile.nickname}</h3>
            <div className="uk-width-2-5">
              <Link to="/edit">
                <a>
                  <span class="uk-label uk-button uk-button-text">
                    정보수정
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <p>{profile.intro}</p>
        </div>
        <div className="uk-card-footer">{profile.star}</div>
      </div>
      {/* 왼쪽 플로팅 배너 */}
    </div>
    /* 왼쪽 레이아웃 */
  );
}
