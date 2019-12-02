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
  const loc = JSON.parse(localStorage.userToken).data[0];
  let temp = [];

  const myProduct = async () => {
    await axios
      .get('/mypage/myproduct', {
        headers: {
          'Content-Type': 'application/json',
          token: loc
        }
      })
      .then(response => {
        console.log(response.data.data);

        setMyProd({ myProd: response.data.data });
      })
      .catch(error => {
        console.log(error.message);
        console.log(error);
      });
    console.log(myProd);
  };
  useEffect(() => {
    console.log(loc);
    myProduct();
    axios
      .get('/mypage/ask', {
        headers: {
          'Content-Type': 'application/json',
          token: loc
        }
      })
      .then(response => {
        console.log(response);
        const {
          data: {
            data: [a]
          }
        } = response;
        setMyRequire(a);
      })
      .catch(error => {
        console.log(error.message);
        console.log(error);
      });
    setLoading(false);
    setLoading(false);
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
              <MyProd />
              <MyReq />
              <MyRequest />
              <MyTran />
              <MyLike />
            </ul>
            {/* 마이페이지 */}
          </div>
        </h3>
      </div>
    </div>
  );
}
