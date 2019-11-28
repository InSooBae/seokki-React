import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import useInput from '../Hooks/useInput';
import { post } from 'axios';

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
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
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

const useInputForPw = init => {
  const [value, setValue] = useState(init);
  const [invalid, setInvalid] = useState(false);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  const onBlur = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
    setInvalid(!/(?=.*\d)(?=.*[a-z]).{6,}/.test(value));
  };

  return { value, invalid, onChange, onBlur };
};

export default () => {
  const [action, setAction] = useState('logIn');
  const [photo, setPhoto] = useState('');
  const pwAsk = useInput(1);
  const pwAnswer = useInput('');
  const password = useInputForPw('');
  const nickname = useInput('');
  const intro = useInput('');
  const id = useInput('');

  const addUser = () => {
    const url = '/user/signup';
    const formData = new FormData();

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

  const inputClassNameHelper = boolean => {
    switch (boolean) {
      case true:
        return 'uk-form-success';
      case false:
        return 'uk-form-danger';
      default:
        return '';
    }
  };
  return (
    <Wrapper>
      <Form>
        {action === 'logIn' ? (
          <form>
            <div className="uk-margin">
              <label htmlFor="nameInput">아이디</label>
              <Input className={`uk-input`} placeholder={'ID'} {...id} />
            </div>
            <div className="uk-margin">
              <label htmlFor="emailInput">비밀번호</label>
              <Input
                type={'password'}
                className={`uk-input`}
                placeholder={'Password'}
                {...password}
              />
            </div>
            <Button
              type={'submit'}
              className={'uk-button uk-button-primary uk-width-1-1'}
              text={'Log in'}
            />
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>이미지</label>
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
            </div>

            <div className="uk-margin-small uk-grid-small uk-grid" data-uk-grid>
              <label style={{ margin: 'auto' }}>닉네임</label>

              <div className="uk-width-expand">
                <Input
                  className={`uk-input ${inputClassNameHelper(nickname.value)}`}
                  placeholder={'Nickname'}
                  {...nickname}
                />
              </div>

              <div className="uk-width-auto">
                <Button
                  text={'중복확인'}
                  style={{ marginTop: 0 }}
                  className="uk-button uk-button-primary uk-width-1-1"
                />
              </div>
            </div>
            <div className="uk-margin-small uk-grid-small uk-grid" data-uk-grid>
              <label style={{ margin: 'auto' }}>자기소개</label>

              <div className="uk-width-expand">
                <Input
                  className={`uk-input uk-form-width-medium ${inputClassNameHelper(
                    intro.value
                  )}`}
                  placeholder={'Introduce'}
                  {...intro}
                />
              </div>
            </div>
            <div className="uk-margin-small uk-grid-small uk-grid" data-uk-grid>
              <label style={{ margin: 'auto' }}>아이디</label>

              <div className="uk-width-expand">
                <Input
                  className={`uk-input ${inputClassNameHelper(id.value)}`}
                  placeholder={'ID'}
                  {...id}
                />
              </div>

              <div className="uk-width-auto">
                <Button
                  text={'중복확인'}
                  style={{ marginTop: 0 }}
                  className="uk-button uk-button-primary uk-width-1-1"
                />
              </div>
            </div>
            <div className="uk-margin-small uk-grid-small uk-grid" data-uk-grid>
              <label style={{ margin: 'auto' }}>아이디</label>

              <div className="uk-width-expand">
                <Input
                  className={`uk-input uk-form-width-medium ${inputClassNameHelper(
                    password.invalid
                  )}`}
                  placeholder={'Password'}
                  {...password}
                  type="password"
                />
              </div>
            </div>
            <div>
              <label>비밀번호 찾기 질문</label>
              <Select {...pwAsk} className="uk-select">
                <option value="1">나의 보물 제 1호는?</option>
                <option value="2">내가 나온 초등학교의 이름은?</option>
                <option value="3">내가 나온 중학교의 이름은?</option>
              </Select>
            </div>
            <div>
              <label>비밀번호 찾기 답변</label>
              <Input
                className={'uk-input uk-form-width-medium'}
                placeholder={'Forgot Password Questions'}
                {...pwAnswer}
              />
            </div>
            <Button
              className={'uk-button uk-button-primary uk-width-1-1'}
              text={'Sign up'}
            />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === 'logIn' ? (
          <>
            Don't have an account?{' '}
            <a onClick={() => setAction('signUp')}>Sign up</a>
          </>
        ) : (
          <>
            Have an account? <a onClick={() => setAction('logIn')}>Log in</a>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
