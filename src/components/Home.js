import React from 'react';

import Food from './Food';
import Elec from './Elec';
import Recommend from './Recommend';
import Book from './Book';
import Cloth from './Cloth';
import Category from './Category';
import Video from './Video';

export default function Home() {
  return (
    <div className="uk-child-width-3-5 uk-grid-match" data-uk-grid>
      {/* 영상 */}
      <Video />
      {/* //영상 문제없음 */}
      {/* 추천  */}
      <Recommend />
      {/* //추천 문제없음 */}
      {/* 카테고리 종류  */}
      <Category />
      {/* 카테고리 종류 문제없음 */}
      {/* 식료품  */}
      <Food />
      {/* //식료품  */}
      {/* 전자기기/IT  */}
      <Elec />
      {/* //전자기기/IT  */}
      {/* 중고서적  */}
      <Book />
      {/* //중고서적  */}
      {/* 의류  */}
      <Cloth />
      {/* //의류 */}
    </div>
  );
}
