import React, { useState, useEffect } from 'react';

import Food from './Food';
import Elec from './Elec';
import Recommend from './Recommend';
import Book from './Book';
import Cloth from './Cloth';
import Category from './Category';
import Video from './Video';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  //통신 Recommend Food Elec Book Cloth
  const [loading, setLoading] = useState(true);
  const [rec, setRec] = useState([]);
  const [food, setFood] = useState([]);
  const [elec, setElec] = useState([]);
  const [book, setBook] = useState([]);
  const [cloth, setCloth] = useState([]);
  const loc = JSON.parse(localStorage.userToken).data[0];
  // const consolF = () => {
  //   console.log(cloth);
  // };

  // const getProd = async () => {
  //   /* const {
  //     data: {
  //       data: [food, elec, book, cloth]
  //     }
  //   } = await axios.get('http://seokki.kro.kr/home/latelyList');
  //   console.log(food);
  //   setFood({ food });
  //   setElec({ elec });
  //   setBook({ book });
  //   setCloth({ cloth }); */
  //   /* */
  // };

  useEffect(() => {
    axios
      .get('http://seokki.kro.kr/home/recommendation', {
        headers: {
          token: loc
        }
      })
      .then(response => {
        console.log(response);
        const {
          data: { data }
        } = response;
        setRec(data);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get('http://seokki.kro.kr/home/latelyList')
      .then(res => {
        const {
          data: {
            data: [food, elec, book, cloth]
          }
        } = res;
        setFood(food);
        setElec(elec);
        setBook(book);
        setCloth(cloth);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  // console.log(recent);
  //   setFood(recent[0]);
  //   setElec(recent[1]);
  //   setCloth(recent[2]);
  //   setBook(recent[3]);
  //   console.log('food', food);
  //   console.log('elec', elec);
  //   console.log('book', book);
  //   console.log('cloth', cloth);
  //   setLoading(false);
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="uk-child-width-3-5 uk-grid-match" data-uk-grid>
      {/* 영상 */}
      <Video />
      {/* //영상 문제없음 */}
      {/* 추천  */}
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
          <h3 className="uk-card-title uk-text-center">Recommendation</h3>
          <ul
            className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
            data-uk-grid
          >
            {rec ? (
              rec.map(arr => (
                <Link to={`/view/${arr.item_idx}`}>
                  <Recommend
                    key={arr.item_idx}
                    title={arr.title}
                    picture={arr.thumbnail}
                  />
                </Link>
              ))
            ) : (
              <div>데이터 없음</div>
            )}
          </ul>
        </div>
      </div>
      {/* //추천 문제없음 */}
      {/* 카테고리 종류  */}
      <Category />
      {/* 카테고리 종류 문제없음 */}
      {/* 식료품  */}
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
          <h3 className="uk-card-title">식 료 품</h3>
          <div
            className="uk-grid"
            uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
          >
            <ul
              className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
              data-uk-grid
            >
              {console.log(food)}

              {food.map(arr => (
                <Link to={`/view/${arr.item_idx}`}>
                  <Food
                    key={arr.item_idx}
                    title={arr.title}
                    picture={arr.thumbnail}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
          <h3 className="uk-card-title">전 자 기 기 / IT</h3>
          <div
            className="uk-grid"
            uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
          >
            <ul
              className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
              data-uk-grid
            >
              {elec ? (
                elec.map(arr => (
                  <Link to={`/view/${arr.item_idx}`}>
                    <Elec
                      key={arr.item_idx}
                      title={arr.title}
                      picture={arr.thumbnail}
                    />
                  </Link>
                ))
              ) : (
                <div>데이터 없음</div>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
          <h3 className="uk-card-title">중 고 서 적</h3>
          <div
            className="uk-grid"
            uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
          >
            <ul
              className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
              data-uk-grid
            >
              {book.map(arr => (
                <Link to={`/view/${arr.item_idx}`}>
                  <Book
                    key={arr.item_idx}
                    title={arr.title}
                    picture={arr.thumbnail}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
          <h3 className="uk-card-title">의 류</h3>
          <div
            className="uk-grid"
            uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
          >
            <ul
              className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
              data-uk-grid
            >
              {cloth.map(arr => (
                <Link to={`/view/${arr.item_idx}`}>
                  <Cloth
                    key={arr.item_idx}
                    title={arr.title}
                    picture={arr.thumbnail}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(user => {
      console.log(user.data);
      setUsers(user.data);
      console.log(users);
      console.log(users);
      setLoading(false);
    });
  }, [loading]);

  if (loading) return <div>Loading...</div>;
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Home;
 */
