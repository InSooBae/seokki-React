import React, { Component, useState } from 'react';
import axios, { post } from 'axios';
import useInput from '../Hooks/useInput';
import Input from '../Hooks/Input';
import Button from '../Hooks/Button';
import { Link, Redirect } from 'react-router-dom';
export default function Register() {
  // select태그 스테이트 설정

  const [send, setSend] = useState(false);
  const [photo, setPhoto] = useState('');
  const title = useInput('');
  const hashtag = useInput('');
  const text = useInput('');
  const category_idx = useInput(1);
  const [valid, isvalid] = useState('');
  const loc = JSON.parse(localStorage.userToken).data[0];

  const addProduct = async () => {
    const url = '/board';
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
    return await post(url, formData, config);
  };

  const handleFormSubmit = e => {
    //자동 리프레시 우선막음
    e.preventDefault();
    addProduct().then(response => {
      console.log(response.data);
      setSend(true);
    });
  };

  const onChangeImage = e => {
    setPhoto(e.target.files[0]);
  };
  //왠진 모르겠는데 e.target.name 출력안됨

  return (
    <>
      {send ? (
        <Redirect to="/" />
      ) : (
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
                    <Button
                      text={'이미지 선택'}
                      className={'uk-button uk-button-primary'}
                      type={'button'}
                    />
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
      )}
    </>
  );
}
