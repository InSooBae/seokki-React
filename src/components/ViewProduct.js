import React, { useState, useEffect } from 'react';
import axios, { put } from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Reply from './Reply';
import useInput from '../Hooks/useInput';
import Input from '../Hooks/Input';
import { red } from 'ansi-colors';
import { setState } from 'expect/build/jestMatchersObject';
export default function ViewProduct({ history, location, match }) {
  //댓글 출력 제어
  const [rep, setRep] = useState([]);
  //본문 출력 제어
  const [ser, setSer] = useState([]);
  //댓글 입력 제어
  const input = useInput('');
  //로컬 저장된 토큰
  const loc = JSON.parse(localStorage.userToken).data[0];
  //수정 제어
  const [mod, setMod] = useState(false);
  const [home, setHome] = useState(false);
  const [photo, setPhoto] = useState('');
  const title = useInput('');
  const hashtag = useInput('');
  const text = useInput('');
  const category_idx = useInput(1);
  let a = match.url;
  let b = a.split('/')[2];
  const [myProd, setMyProd] = useState([]);
  const [trade, setTrade] = useState(false);
  const [item, setItem] = useState(false);
  const [myItem, setMyItem] = useState(false);
  const [myRequire, setMyRequire] = useState([]);

  const Product = () => {
    axios
      .get('/mypage/myproduct', {
        headers: {
          'Content-Type': 'application/json',
          token: loc
        }
      })
      .then(response => {
        console.log(response);
        setMyProd(response.data.data);
      })
      .catch(error => {
        console.log(error.message);
        console.log(error);
      });
  };

  const onChangeImage = e => {
    setPhoto(e.target.files[0]);
  };

  const Dialog = a => {
    switch (a) {
      case 1:
        return <h2 className="uk-select">식 료 품</h2>;
      case 2:
        return <h2 className="uk-select">전 자 기 기</h2>;
      case 3:
        return <h2 className="uk-select">중 고 서 적</h2>;
      case 4:
        return <h2 className="uk-select">의 류</h2>;
      default:
        return null;
    }
  };

  const redirect = () => {
    if (home) return <Redirect to="/" />;
    else return <span></span>;
  };

  const deleteProduct = e => {
    e.preventDefault();
    let a = match.url;
    let b = a.split('/')[2];
    axios({
      method: 'delete',
      url: `/board/${b}`,
      headers: { token: loc }
    })
      .then(function(response) {
        console.log(response);
        setHome(true);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const modifyProduct = () => {
    console.log(title, hashtag, category_idx);
    const url = `/board/${b}`;
    const formData = new FormData();
    formData.append('thumbnail', photo);
    formData.append('title', title.value);
    formData.append('hashtag', hashtag.value);
    formData.append('category_idx', category_idx.value);
    formData.append('text', text.value);
    const config = {
      headers: {
        token: loc,
        'content-type': 'multipart/form-data'
      }
    };
    return put(url, formData, config);
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
    window.location.reload(false);
  };

  const handleFormSubmit = e => {
    //자동 리프레시 우선막음
    e.preventDefault();
    modifyProduct().then(response => {
      console.log(response.data);
    });
    setMod(false);
  };

  const clickLike = e => {
    e.preventDefault();
    let a = match.url;
    let b = a.split('/')[2];
    axios({
      method: 'post',
      url: `/board/like/${b}`,
      headers: { token: loc }
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

  const Require = () => {
    axios
      .get('/mypage/ask', {
        headers: {
          'Content-Type': 'application/json',
          token: loc
        }
      })
      .then(response => {
        const {
          data: { data }
        } = response;
        setMyRequire(data);
      })
      .catch(error => {
        console.log(error.message);
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
    Product();
    Require();
  }, []);
  return (
    <>
      {mod ? (
        <div className="uk-card uk-card-default uk-card-hover uk-card-body ">
          <h3 className="uk-card-title">상 품 등 록</h3>
          <ul
            className="uk-grid-midium uk-child-width-1-1 uk-text-center"
            data-uk-grid
          >
            <div className="uk-card uk-card-default uk-card-body">
              <form
                className="js-upload uk-placeholder uk-text-center"
                onSubmit={handleFormSubmit}
              >
                <div className="js-upload uk-placeholder uk-text-center">
                  <div>
                    <em>이미지는 필수로 넣어 주세요!</em>
                  </div>
                  <div uk-form-custom="target: true">
                    <Input
                      accept="image/*"
                      type="file"
                      onChange={onChangeImage}
                    />
                    <Input
                      className="uk-input uk-text-center"
                      placeholder={'Select Image'}
                      data-disabled
                    />
                    <button
                      className="uk-button uk-button-primary"
                      type="button"
                    >
                      이미지 선택
                    </button>
                  </div>
                </div>
                <fieldset className="uk-fieldset">
                  <div className="uk-margin">
                    <Input
                      className="uk-input"
                      type="text"
                      name="title"
                      {...title}
                      placeholder="상품의 제목을 입력하세요"
                    />
                  </div>
                  <div className="uk-margin">
                    <Input
                      className="uk-input"
                      type="text"
                      name="hashTag"
                      {...hashtag}
                      placeholder="해시태그를 입력하세요"
                    />
                  </div>
                  <div className="uk-margin">
                    <select {...category_idx} className="uk-select">
                      <option value="1">식 료 품</option>
                      <option value="2">전 자 기 기/ IT</option>
                      <option value="3">중 고 서 적</option>
                      <option value="4">의 류</option>
                    </select>
                  </div>
                </fieldset>
                <div className="uk-margin uk-width-expand">
                  <textarea
                    className="uk-textarea"
                    rows={15}
                    {...text}
                    placeholder="상품에 대하여 자세하게 설명해주세요."
                  />
                </div>
                <div className="uk-flex uk-flex-right">
                  <button
                    className="uk-button uk-button-primary"
                    onClick={() => setMod(false)}
                  >
                    수 정 취 소
                  </button>
                  <button
                    type="submit"
                    value="Submit"
                    className="uk-button uk-button-primary "
                  >
                    상 품 등 록
                  </button>
                </div>
              </form>
            </div>
          </ul>
        </div>
      ) : (
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

                  {Dialog(ser.category_idx)}

                  <div className="uk-card uk-card-default uk-card-body uk-width-expand uk-margin-top ">
                    <h3 className="uk-card-title ">
                      <div>{ser.nickname}</div>

                      <button
                        onClick={clickLike}
                        className="uk-button uk-button-danger"
                      >
                        <span uk-icon="heart"></span>+{ser.like_count}
                      </button>
                    </h3>
                  </div>
                </div>
              </ul>
              <br />
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-width-expand@m">
                  {ser.text}
                </div>
              </div>
              <div className="uk-margin-top">
                {ser.date}
                <br /> 조회수:{ser.views}
              </div>
              <div className="uk-flex uk-flex-right uk-margin-top">
                <p data-uk-margin>
                  {ser.nickname ==
                  JSON.parse(localStorage.userToken).data[1] ? (
                    <>
                      <button
                        className="uk-button uk-button-primary"
                        onClick={() => setMod(true)}
                      >
                        수정
                      </button>
                      <button
                        onClick={deleteProduct}
                        className="uk-button uk-button-primary"
                      >
                        삭제
                      </button>
                      {redirect()}
                    </>
                  ) : (
                    <></>
                  )}
                  {ser.nickname ==
                  JSON.parse(localStorage.userToken).data[1] ? (
                    <></>
                  ) : myRequire ? (
                    myRequire
                      .map(arr => arr.requested_item_idx)
                      .filter(arr => arr == b) == b ? (
                      <button className="uk-button uk-button-danger">
                        거 래 취 소
                      </button>
                    ) : (
                      <button
                        onClick={e => {
                          e.preventDefault();
                          setTrade(true);
                        }}
                        className="uk-button uk-button-primary"
                      >
                        거 래 요 청
                      </button>
                    )
                  ) : (
                    <button
                      onClick={e => {
                        e.preventDefault();
                        setTrade(true);
                      }}
                      className="uk-button uk-button-primary"
                    >
                      거 래 요 청
                    </button>
                  )}
                </p>
              </div>
              {trade ? (
                <div uk-slider="center: true">
                  <div
                    className="uk-position-relative uk-visible-toggle uk-light"
                    tabIndex={-1}
                  >
                    <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                      {myProd ? (
                        myProd.map(arr => {
                          return (
                            <li>
                              <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top">
                                  <img
                                    width="300px"
                                    height="300px"
                                    src={arr.thumbnail}
                                    alt=""
                                  />
                                </div>
                                <div className="uk-card-body">
                                  <h3 className="uk-card-title">
                                    {arr.title}
                                    <button
                                      onClick={e => {
                                        e.preventDefault();
                                        axios({
                                          method: 'post',
                                          url: `/communication/exchange/${b}`,
                                          headers: {
                                            token: JSON.parse(
                                              localStorage.userToken
                                            ).data[0]
                                          },
                                          data: {
                                            myItemIdx: [`${arr.item_idx}`]
                                          }
                                        })
                                          .then(function(response) {
                                            console.log(response);
                                            window.location.reload(false);
                                          })
                                          .catch(function(error) {
                                            console.log(error);
                                            window.location.reload(false);
                                          });
                                      }}
                                      className="uk-button uk-button-danger uk-margin-left"
                                    >
                                      선택
                                    </button>
                                  </h3>
                                  <p>교환하시려는 물건을 선택하세요</p>
                                </div>
                              </div>
                            </li>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </ul>
                    <a
                      className="uk-position-center-left uk-position-small uk-hidden-hover"
                      href="#"
                      data-uk-slidenav-previous
                      data-uk-slider-item="previous"
                    />
                    <a
                      className="uk-position-center-right uk-position-small uk-hidden-hover"
                      href="#"
                      data-uk-slidenav-next
                      data-uk-slider-item="next"
                    />
                  </div>
                  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
                </div>
              ) : (
                <></>
              )}
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
                      item={b}
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
      )}
    </>
  );
}
