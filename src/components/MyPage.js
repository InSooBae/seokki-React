import React, { useState, useEffect } from 'react';
import MyRequest from './MyRequest';
import MyProd from './MyProd';
import MyReq from './MyRequire';
import MyTran from './MyTran';
import axios from 'axios';
import { Link } from 'react-router-dom';
import change from '../image/swap.png';
export default function MyPage() {
  const [loading, setLoading] = useState();
  const [myProd, setMyProd] = useState([]);
  const [myRequire, setMyRequire] = useState([]);
  const [myRequest, setMyRequest] = useState([]);
  const [myTran, setMyTran] = useState([]);
  const [myLike, setMyLike] = useState([]);
  const loc = JSON.parse(localStorage.userToken).data[0];
  let temp = [];

  // const myProduct = () => {
  //   axios
  //     .get('/mypage/myproduct', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         token: loc
  //       }
  //     })
  //     .then(response => {
  //       setMyProd(response.data.data);
  //       // setMyProd({ myProd: response.data.data.map() });

  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //       console.log(error);
  //     });
  // };

  // const myProduct = () => {
  //   axios
  //     .get('/mypage/myproduct', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         token: loc
  //       }
  //     })
  //     .then(response => {
  //       setMyProd(response.data.data);
  //       // setMyProd({ myProd: response.data.data.map() });
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //       console.log(error);
  //     });
  // };

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
        // setMyProd({ myProd: response.data.data.map() });
      })
      .catch(error => {
        console.log(error.message);
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
        setMyRequire(response.data.data);
      })
      .catch(error => {
        console.log(error.message);
        console.log(error);
      });
  };

  const Like = () => {
    axios
      .get('/board/like', {
        headers: {
          'Content-Type': 'application/json',
          token: loc
        }
      })
      .then(response => {
        setMyLike(response.data.data);
      })
      .catch(error => {
        console.log(error.message);
        console.log(error);
      });
  };

  const Requested = () => {
    axios
      .get('/mypage/requested', {
        headers: {
          'Content-Type': 'application/json',
          token: loc
        }
      })
      .then(response => {
        setMyRequest(response.data.data);
      })
      .catch(error => {
        console.log(error.message);
        console.log(error);
      });
  };

  const Transaction = () => {
    axios
      .get('/mypage/exchangeList', {
        headers: {
          'Content-Type': 'application/json',
          token: loc
        }
      })
      .then(response => {
        console.log(response);
        setMyTran(response.data.data);
      })
      .catch(error => {
        console.log(error.message);
        console.log(error);
      });
  };

  useEffect(() => {
    Product();
    Require();
    Like();
    Requested();
    Transaction();
    console.log(myProd);
  }, [loading]);
  return (
    <div>
      <div className="uk-card uk-card-hover uk-card-body">
        <h3 className="uk-card-title">
          <div uk-filter="target: .js-filter">
            <ul className="uk-subnav uk-subnav-pill uk-child-width-expand uk-text-center">
              <li className="uk-active" uk-filter-control=".tag-MyProd">
                <a href="#">My Products</a>
              </li>
              <li uk-filter-control=".tag-Require">
                <a href="#">요청한 상품</a>
              </li>
              <li uk-filter-control=".tag-Request">
                <a href="#">요청받은 상품</a>
              </li>
              <li uk-filter-control=".tag-Tran">
                <a href="#">교환 완료</a>
              </li>
              <li uk-filter-control=".tag-Like">
                <a href="#">Like</a>
              </li>
            </ul>
            <hr className="uk-divider-icon" />
            {/* 마이페이지 */}
            <ul className="js-filter uk-list" uk-accordion="multiple: true">
              {console.log(myProd)}
              {myProd ? (
                myProd.map(arr => {
                  return (
                    <li className="uk-card uk-card-default uk-card-body tag-MyProd">
                      <Link to={`/view/${arr.item_idx}`}>
                        <img
                          width="100px"
                          height="100px"
                          src={arr.thumbnail}
                        ></img>
                        <span>{arr.title}</span>
                      </Link>
                      <div className="uk-align-right uk-child-width-1-1">
                        <button className="uk-button uk-button-text uk-grid-margin">
                          수정
                        </button>
                        <button
                          onClick={() => {
                            const loc = JSON.parse(localStorage.userToken)
                              .data[0];

                            axios({
                              method: 'delete',
                              url: `/board/${arr.item_idx}`,
                              headers: { token: loc }
                            })
                              .then(function(response) {
                                console.log(response);
                                setLoading({});
                              })
                              .catch(function(error) {
                                console.log(error);
                                setLoading({});
                              });
                          }}
                          className="uk-button uk-button-text uk-grid-margin"
                        >
                          삭제
                        </button>
                      </div>
                      <div>{arr.date}</div>
                    </li>
                  );
                })
              ) : (
                <div>존재안함</div>
              )}
              {myRequire ? (
                myRequire.map(arr => {
                  console.log(arr);
                  return (
                    <li className="uk-card uk-card-default uk-card-body tag-Require">
                      <img
                        width="100px"
                        height="100px"
                        src={arr.requested_item_thumbnail}
                      ></img>
                      {arr.requested_item_title}
                      <img width="100px" height="100px" src={change}></img>
                      <img
                        width="100px"
                        height="100px"
                        src={arr.ask_item_thumbnail}
                      ></img>
                      {arr.ask_item_title} (본인꺼)
                      <span></span>
                      <a
                        onClick={() => {
                          axios({
                            method: 'delete',
                            url: `/communication/exchange`,
                            headers: { token: loc },
                            data: {
                              to_item_idx: arr.requested_item_idx,
                              from_item_idx: arr.ask_item_idx
                            }
                          })
                            .then(function(response) {
                              console.log(response);
                              setLoading({});
                            })
                            .catch(function(error) {
                              console.log(error);
                              setLoading({});
                            });
                        }}
                        className="uk-card-badge uk-label"
                      >
                        거래취소
                      </a>
                    </li>
                    // <MyReq
                    //   key={arr.date}
                    //   date={arr.date}
                    //   aTitle={arr.ask_item_title}
                    //   rTitle={arr.requested_item_title}
                    //   aPicture={arr.requested_item_thumbnail}
                    //   rPicture={arr.ask_item_thumbnail}
                    //   rName={arr.requested_user_nickname}
                    // />
                  );
                })
              ) : (
                <div>존재안함</div>
              )}
              {myRequest ? (
                myRequest.map(arr => {
                  console.log(arr);
                  return (
                    <li className="uk-card uk-card-default uk-card-body tag-Request">
                      <img
                        width="100px"
                        height="100px"
                        src={arr.requested_item_thumbnail}
                      ></img>
                      {arr.requested_item_title} (본인꺼)
                      <img width="50px" height="100px" src={change}></img>
                      <img
                        width="100px"
                        height="100px"
                        src={arr.ask_item_thumbnail}
                      ></img>
                      {arr.ask_item_title}
                      <span></span>
                      <a
                        onClick={() => {
                          axios({
                            method: 'delete',
                            url: `/communication/exchange`,
                            headers: { token: loc },
                            data: {
                              to_item_idx: arr.requested_item_idx,
                              from_item_idx: arr.ask_item_idx
                            }
                          })
                            .then(function(response) {
                              console.log(response);
                              setLoading({});
                            })
                            .catch(function(error) {
                              console.log(error);
                              setLoading({});
                            });
                        }}
                        className="uk-card-badge uk-label uk-margin-large-top"
                      >
                        거래취소
                      </a>
                      <a
                        onClick={() => {
                          axios({
                            method: 'put',
                            url: `/communication/exchange`,
                            headers: { token: loc },
                            data: {
                              to_item_idx: `${arr.ask_item_idx}`,
                              from_item_idx: `${arr.requested_item_idx}`
                            }
                          })
                            .then(function(response) {
                              console.log(response);
                              setLoading({});
                            })
                            .catch(function(error) {
                              console.log(error);
                              setLoading({});
                            });
                        }}
                        className=" uk-label uk-float-right"
                      >
                        거래
                      </a>
                    </li>
                  );
                })
              ) : (
                <></>
              )}
              {myTran ? (
                myTran.map(arr => {
                  console.log(arr);
                  return (
                    <li className="uk-card uk-card-default uk-card-body tag-Request">
                      <img
                        width="100px"
                        height="100px"
                        src={arr.thumbnail}
                      ></img>
                      {arr.title} (본인꺼)
                      <img width="100px" height="100px" src={change}></img>
                      <img
                        width="100px"
                        height="100px"
                        src={arr.other_thumbnail}
                      ></img>
                      {arr.other_title}
                      <span></span>
                    </li>
                  );
                })
              ) : (
                <>{console.log(myTran)}</>
              )}
              {myLike ? (
                myLike.map(arr => {
                  return (
                    <li className="uk-card uk-card-default uk-card-body tag-Like">
                      <Link to={`/view/${arr.item_idx}`}>
                        <img src={arr.thumbnail} alt="이미지"></img>
                        {arr.title}
                      </Link>
                      <div className="uk-align-right uk-child-width-1-1">
                        <button
                          onClick={() => {
                            const loc = JSON.parse(localStorage.userToken)
                              .data[0];
                            axios({
                              method: 'post',
                              url: `/board/like/${arr.item_idx}`,
                              headers: { token: loc }
                            })
                              .then(function(response) {
                                console.log(response);
                                setLoading({});
                              })
                              .catch(function(error) {
                                console.log(error);
                                setLoading({});
                              });
                          }}
                          className="uk-button uk-button-danger uk-grid-margin"
                        >
                          <span href uk-icon="heart" />
                        </button>
                      </div>
                    </li>
                  );
                })
              ) : (
                <div>존재안함</div>
              )}
            </ul>
            {/* 마이페이지 */}
          </div>
        </h3>
      </div>
    </div>
  );
}
