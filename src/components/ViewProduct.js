import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Reply from './Reply';
import MyProd from './MyProd';
import useInput from '../Hooks/useInput';
export default function ViewProduct({ history, location, match }) {
  //댓글 출력 제어
  const [rep, setRep] = useState([]);
  //본문 출력 제어
  const [ser, setSer] = useState([]);
  //댓글 입력 제어
  const input = useInput('');
  //로컬 저장된 토큰
  const loc = JSON.parse(localStorage.userToken).data[0];

  const pass = () => {
    var input = window.confirm('교환하시겠습니까?');
    alert('교환신청하였습니다.');
  };

  const inputReply = e => {
    e.preventDefault();
    let a = match.url;
    let b = a.split('/')[2];
    axios({
      method: 'post',
      url: `/communication/comment/${b}`,
      headers: { token: loc },
      data: {
        text: `${input.value}` // This is the body part
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const printReply = () => {
    let a = match.url;
    let b = a.split('/')[2];
    axios
      .get(`/communication/comment/${b}`, {
        headers: {
          'Content-Type': 'application/json',
          token: loc
        }
      })
      .then(function(response) {
        console.log(response);
        setRep(response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  //마운트시 실행 url / 기준으로 나눈뒤 마지막 숫자 추가해
  useEffect(() => {
    let a = match.url;
    let b = a.split('/')[2];
    axios
      .get(`/board/${b}`, {
        headers: {
          token: loc
        }
      })
      .then(function(response) {
        console.log(response.data.data);
        setSer(...response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    printReply();
  }, []);
  return (
    <div>
      <form>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body ">
          <h3 className="uk-card-title">{ser.title}</h3>
          <ul
            className="uk-grid-midium uk-child-width-1-1 uk-child-width-1-2@m uk-text-center"
            data-uk-grid
          >
            <li>
              <div className="uk-card uk-card-default uk-card-body">
                <img src={ser.thumbnail} />
              </div>
            </li>
            <div className="uk-text-bolder uk-text-left">
              <h4>{ser.text}</h4>
              <h4>{ser.hashtag}</h4>

              <h2 className="uk-select">식 료 품</h2>

              <div className="uk-card uk-card-default uk-card-body uk-width-expand uk-margin-top ">
                <h3 className="uk-card-title ">{ser.title}</h3>
              </div>
            </div>
          </ul>
          <br />
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-width-expand@m">
              {ser.text}
            </div>
          </div>
          <div className="uk-flex uk-flex-right uk-margin-top">
            <p data-uk-margin>
              <Link to="/mypage">
                <button onClick={pass} className="uk-button uk-button-primary">
                  거 래 요 청
                </button>
              </Link>
            </p>
          </div>
        </div>
        <br />
        <div className="uk-card uk-card-default uk-card-hover uk-card-body ">
          <h3 className="uk-card-title">댓 글</h3>
          <textarea
            className="uk-textarea "
            rows={1}
            placeholder="댓글을 입력하세요."
            defaultValue={''}
            {...input}
          />
          <div className="uk-flex uk-flex-right uk-margin-top">
            <p uk-margin>
              <button
                onClick={inputReply}
                className="uk-button uk-button-primary"
              >
                댓 글 작 성
              </button>
            </p>
          </div>
        </div>
        <div>
          {rep ? (
            rep.map(arr => {
              return (
                <Reply
                  key={''}
                  comment_id={arr.comment_idx}
                  item={arr.item_idx}
                  writer={arr.nickname}
                  text={arr.text}
                  picture={arr.photo}
                  date={arr.date}
                />
              );
            })
          ) : (
            <span></span>
          )}
        </div>
      </form>
    </div>
  );
}
