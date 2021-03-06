import React, { useState, useEffect } from 'react';
import logo from '../image/seok (128).png';
import axios from 'axios';
import useInput from '../Hooks/useInput';
import { Redirect } from 'react-router-dom';

const Reply = ({ key, comment_id, item, picture, writer, text, date }) => {
  const [modify, setModify] = useState(false);
  const modText = useInput('');
  const loc = JSON.parse(localStorage.userToken).data[0];
  const [repAdmin, setRepAdmin] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.userToken).data[1] === writer)
      setRepAdmin(true);
    else setRepAdmin(false);

    console.log(item);
  }, []);

  const modifyTrue = () => setModify(true);
  const modifyFalse = () => setModify(false);

  const modifyReply = (e, callback) => {
    e.preventDefault();

    axios({
      method: 'put',
      url: `/communication/comment/${comment_id}`,
      headers: { token: loc },
      data: {
        text: `${modText.value}` // This is the body part
      }
    })
      .then(r => console.log(r))
      .catch(e => console.log(e));
    setRender(true);
  };

  const deleteReply = e => {
    e.preventDefault();

    axios({
      method: 'delete',
      url: `/communication/comment/${comment_id}`,
      headers: { token: loc }
    })
      .then(r => console.log(r))
      .catch(e => console.log(e));
    setRender(true);
  };

  return (
    <>
      {render ? (
        <Redirect to={`/view/${item}`} />
      ) : (
        <>
          {modify ? (
            <div className="uk-card uk-card-default uk-card-hover uk-card-body ">
              <h3 className="uk-card-title">댓 글</h3>
              <input
                className="uk-textarea "
                placeholder="댓글을 입력하세요."
                value={text}
                {...modText}
              ></input>
              <div className="uk-flex uk-flex-right uk-margin-top">
                <p uk-margin>
                  <button
                    onClick={modifyReply}
                    className="uk-button uk-button-primary"
                  >
                    댓 글 수 정
                  </button>
                  <button
                    onClick={modifyFalse}
                    className="uk-button uk-button-primary"
                  >
                    취 소
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div
              className="uk-card uk-card-default uk-card-hover uk-card-body uk-child-width-1-5m"
              data-uk-grid
              style={{ backgroundColor: 'rgba(140,161,151,0.1)' }}
            >
              <h3 className="uk-card-title"></h3>
              <div className="uk-card uk-card-default uk-card-body uk-width-1-5">
                <img src={picture} className="uk-border-circle" />
                <p>{writer}</p>
              </div>
              <div className="uk-card uk-card-default uk-card-body uk-width-4-5">
                {text}
              </div>
              <p className="uk-flex uk-flex-right uk-margin-top">
                {repAdmin ? (
                  <>
                    <button
                      onClick={modifyTrue}
                      className="uk-button uk-button-primary"
                    >
                      댓 글 수 정
                    </button>
                    <button
                      onClick={deleteReply}
                      className="uk-button uk-button-primary"
                    >
                      삭 제
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </p>
              {date}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Reply;
