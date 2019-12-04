import React, { useState, useEffect } from 'react';
import MyRequest from './MyRequest';
import MyProd from './MyProd';
import MyReq from './MyRequire';
import MyTran from './MyTran';
import MyLike from './MyLike';
import axios from 'axios';
export default function MyPage() {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    Product();
    Require();
    Like();
    console.log(myProd);
  }, []);
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
                    <MyProd
                      key={arr.item_idx}
                      item={arr.item_idx}
                      date={arr.date}
                      title={arr.title}
                      picture={arr.thumbnail}
                    />
                  );
                })
              ) : (
                <div>존재안함</div>
              )}
              {myRequire ? (
                myRequire.map(arr => {
                  return (
                    <MyReq
                      key={arr.date}
                      date={arr.date}
                      title={arr.title}
                      picture={arr.thumbnail}
                    />
                  );
                })
              ) : (
                <div>존재안함</div>
              )}
              <MyRequest />
              <MyTran />
              {myLike ? (
                myLike.map(arr => {
                  return (
                    <MyLike key={1} picture={arr.thumbnail} title={arr.title} />
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
