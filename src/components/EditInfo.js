import React, { useState } from 'react';
import Input from '../Hooks/Input';
import Button from '../Hooks/Button';
import useInput from '../Hooks/useInput';
import axios, { put } from 'axios';

export default function EditInfo() {
  const [valid, isValid] = useState(true);
  const nickname = useInput('');
  const intro = useInput('');
  const [photo, setPhoto] = useState('');
  const loc = JSON.parse(localStorage.userToken).data[0];

  const onChangeImage = e => {
    setPhoto(e.target.files[0]);
  };

  const editUser = () => {
    const url = '/mypage';
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('nickname', nickname.value);
    formData.append('intro', intro.value);
    axios({
      method: 'put',
      url: url,
      headers: { token: loc },
      data: formData
    })
      .then(r => console.log(r))
      .catch(e => console.log(e));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    editUser();
  };

  const isNickNameDuplicate = e => {
    e.preventDefault();
    console.log(nickname.value);
    axios({
      method: 'post',
      url: '/user/doublecheck',
      headers: {},
      data: {
        nickname: `${nickname.value}` // This is the body part
      }
    })
      .then(res => {
        alert('사용 가능합니다');
        isValid(false);
      })
      .catch(err => {
        alert('닉네임 중복');
        isValid(true);
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>이미지</label>
        <div className="js-upload uk-placeholder uk-text-center">
          <div>
            <em>이미지는 필수로 넣어 주세요!</em>
          </div>
          <div uk-form-custom="target: true">
            <Input accept="image/*" type="file" onChange={onChangeImage} />
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
      </div>
      <div className="uk-margin-small uk-grid-small uk-grid" data-uk-grid>
        <label style={{ margin: 'auto' }}>닉네임</label>

        <div className="uk-width-expand">
          <Input
            className={`uk-input`}
            placeholder={'Nickname'}
            {...nickname}
          />
        </div>

        <div className="uk-width-auto">
          <Button
            text={'중복확인'}
            style={{ marginTop: 0 }}
            onClick={isNickNameDuplicate}
            className={'uk-button uk-button-primary uk-width-1-1'}
          />
        </div>
      </div>
      <div className="uk-margin-small uk-grid-small uk-grid" data-uk-grid>
        <label style={{ margin: 'auto' }}>자기소개</label>

        <div className="uk-width-expand">
          <Input className={`uk-input`} placeholder={'Introduce'} {...intro} />
        </div>
      </div>
      {valid === true ? (
        <Button
          className={`uk-button uk-button-primary uk-width-1-1`}
          text={'Sign up'}
          disabled
        />
      ) : (
        <Button
          className={`uk-button uk-button-primary uk-width-1-1`}
          text={'Sign up'}
        />
      )}
    </form>
  );
}
