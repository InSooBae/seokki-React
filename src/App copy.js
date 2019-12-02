import React from 'react';
import Router from './components/Router';

// 로그인/비로그인 판별은 localstorage 있냐 없냐 부터 있으면 토큰 맞는게있는지 확인해야함

const Check = () => {
  // if (localStorage.getItem('userToken') != null) {
  //   const loc = JSON.parse(localStorage.userToken).data[0];
  //   //아이디 확인 보내는거 (get방식으로 아이디 있는지 확인)
  //   let a = false;
  //   axios
  //     .get('http://seokki.kro.kr/mypage', {
  //       headers: {
  //         token: loc
  //       }
  //     })
  //     .then(function(response) {
  //       const { data } = response;
  //       a = data.success;
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }
  if (localStorage.getItem('userToken') == null) return false;
  else return true;
};

const App = () => {
  return <Router isLoggedIn={Check()} />;
};

export default App;
