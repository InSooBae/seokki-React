import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import useInput from '../Hooks/useInput';
import { post } from 'axios';
import '../Auth.css';

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 700px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 90%;
    input {
      width: 98%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

const Select = styled.select``;

export default () => {
  const [action, setAction] = useState('logIn');
  const [photo, setPhoto] = useState('');
  const pwAsk = useInput(1);
  const pwAnswer = useInput('');
  const password = useInput('');
  const nickname = useInput('');
  const intro = useInput('');
  const id = useInput('');

  const addUser = () => {
    const url = '/user/signup';
    const formData = new FormData();
    console.log(
      photo,
      String(nickname.value),
      String(intro.value),
      String(id.value),
      String(password.value),
      Number(pwAsk.value),
      String(pwAnswer.value)
    );
    formData.append('photo', photo);
    formData.append('nickname', nickname.value);
    formData.append('intro', intro.value);
    formData.append('id', id.value);
    formData.append('password', password.value);
    formData.append('pw_ask', pwAsk.value);
    formData.append('pw_answer', pwAnswer.value);
    const config = {
      'content-type': 'multipart/form-data'
    };
    return post(url, formData, config);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    addUser().then(response => {
      console.log(response.data);
    });
  };
  const onChangeImage = e => {
    setPhoto(e.target.files[0]);
  };

  return (
    <Wrapper>
      <Form>
        {action === 'logIn' ? (
          <form>
            <Input placeholder={'Password'} {...password} type="password" />
            <Button text={'Log in'} />
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>이미지</label>
            <div className="js-upload uk-placeholder uk-text-center">
              <span uk-icon="icon: cloud-upload"></span>
              <span className="uk-text-middle">
                <em>이미지는 필수로 넣어 주세요!</em>
              </span>
              <div data-uk-form-custom>
                <Input accept="image/*" type="file" onChange={onChangeImage} />
                <button
                  className="uk-button uk-button-primary uk-button-small"
                  type="button"
                >
                  이미지 선택
                </button>
              </div>
            </div>
            <label>닉네임</label>
            <span>
              <button className="uk-button uk-button-text uk-button-small">
                중복 확인
              </button>
            </span>
            <Input placeholder={'Nick name'} {...nickname} />
            <label>자기소개</label>
            <Input placeholder={'Introduce'} {...intro} />
            <label>아이디</label>
            <button className="uk-button uk-button-text uk-button-small">
              중복 확인
            </button>
            <Input placeholder={'ID'} {...id} />
            <label>비밀번호</label>
            <Input placeholder={'Password'} {...password} type="password" />
            <label>비밀번호 찾기 질문</label>
            <Select {...pwAsk} className="uk-select">
              <option value="1">나의 보물 제 1호는?</option>
              <option value="2">내가 나온 초등학교의 이름은?</option>
              <option value="3">내가 나온 중학교의 이름은?</option>
            </Select>
            <label>비밀번호 찾기 답변</label>
            <Input placeholder={'Forgot Password Questions'} {...pwAnswer} />
            <Button text={'Sign up'} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === 'logIn' ? (
          <>
            Don't have an account?{' '}
            <Link onClick={() => setAction('signUp')}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{' '}
            <Link onClick={() => setAction('logIn')}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
