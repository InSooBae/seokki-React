import React, { Component } from 'react';
import axios, { post } from 'axios';
/* 
 이미지 업로드 처리 해야함
const upload = () => ({
    var bar = document.getElementById("js-progressbar");

      UIkit.upload(".js-upload", {
        url: "",
        multiple: true,

        beforeSend: function() {
          console.log("beforeSend", arguments);
        },
        beforeAll: function() {
          console.log("beforeAll", arguments);
        },
        load: function() {
          console.log("load", arguments);
        },
        error: function() {
          console.log("error", arguments);
        },
        complete: function() {
          console.log("complete", arguments);
        },

        loadStart: function(e) {
          console.log("loadStart", arguments);

          bar.removeAttribute("hidden");
          bar.max = e.total;
          bar.value = e.loaded;
        },

        progress: function(e) {
          console.log("progress", arguments);

          bar.max = e.total;
          bar.value = e.loaded;
        },

        loadEnd: function(e) {
          console.log("loadEnd", arguments);

          bar.max = e.total;
          bar.value = e.loaded;
        },

        completeAll: function() {
          console.log("completeAll", arguments);

          setTimeout(function() {
            bar.setAttribute("hidden", "hidden");
          }, 1000);

          alert("Upload Completed");
        }
      });
}) */

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      nickname: '',
      intro: '',
      id: '',
      password: '',
      pw_ask: 0,
      pw_answer: '',
      fileName: ''
    };
  }

  addUser = () => {
    const url = 'http://localhost:3000/user/signup';
    const formData = new FormData();
    console.log(this.state.file);
    if (!this.state.file) formData.append('photo', './logo.svg');
    else formData.append('photo', this.state.file);
    formData.append('nickname', this.state.nickname);
    formData.append('intro', this.state.intro);
    formData.append('id', this.state.id);
    formData.append('password', this.state.password);
    formData.append('pw_ask', this.state.pw_ask);
    formData.append('pw_answer', this.state.pw_answer);
    const config = {
      'content-type': 'multipart/form-data'
    };
    return post(url, formData, config);
  };

  handleFormSubmit = e => {
    console.log(this.state.fileName);

    e.preventDefault();
    this.addUser().then(response => {
      console.log(response.data);
    });
  };

  handleFileChange = e => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    });
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleSelectChange = e => {
    console.log(Number(e.target.value));

    this.setState({
      pw_ask: Number(e.target.value)
    });
  };

  render() {
    return (
      <div className="uk-child-width-1-1 uk-grid-match" data-uk-grid>
        <div>
          <div
            className="uk-card uk-background-muted uk-card-hover uk-card-body uk-flex"
            style={{ height: '700px' }}
          >
            <form onSubmit={this.handleFormSubmit}>
              <div className="uk-card-header">
                <div className="uk-card uk-card-default uk-card-body">
                  <div className=" uk-placeholder uk-text-center">
                    <div data-uk-form-custom>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={this.handleFileChange}
                      />
                      <button className="uk-button uk-button-primary">
                        프로필 이미지
                        <span uk-icon="icon: cloud-upload" />
                      </button>
                    </div>
                  </div>
                </div>
                <em>※프로필 이미지 선택 안할시 기본 이미지 적용</em>
              </div>
              {/* 로그인 */}

              <div className="uk-margin" data-uk-margin>
                <div uk-form-custom="target: true">
                  <span className="uk-form-icon" uk-icon="icon: user" />
                  <input
                    className="uk-input uk-form-width-large"
                    type="text"
                    name="nickname"
                    value={this.state.title}
                    onChange={this.handleValueChange}
                    placeholder="닉네임 입력란"
                  />
                </div>
                <button className="uk-button uk-button-primary">
                  중복확인
                </button>
              </div>
              <div className="uk-margin uk-flex uk-flex-center ">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: user" />
                  <input
                    className="uk-input uk-form-width-large"
                    type="text"
                    name="intro"
                    value={this.state.intro}
                    onChange={this.handleValueChange}
                    placeholder="자기소개 입력란"
                  />
                </div>
              </div>
              <div className="uk-margin" data-uk-margin>
                <div uk-form-custom="target: true">
                  <span className="uk-form-icon" uk-icon="icon: user" />
                  <input
                    className="uk-input uk-form-width-large"
                    type="text"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleValueChange}
                    placeholder="아이디 입력란"
                  />
                </div>

                <button className="uk-button uk-button-primary">
                  중복확인
                </button>
              </div>
              <div className="uk-margin uk-flex uk-flex-center">
                <div className="uk-inline ">
                  <span
                    className="uk-form-icon uk-form-icon"
                    uk-icon="icon: lock"
                  />
                  <input
                    className="uk-input uk-form-width-large"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleValueChange}
                    placeholder="비밀번호 입력란"
                  />
                </div>
              </div>
              <div className="uk-margin uk-flex uk-flex-center">
                <select
                  value={this.state.pw_ask}
                  onChange={this.handleSelectChange}
                  className="uk-select"
                >
                  <option value="1">나의 보물 제 1호는?</option>
                  <option value="2">내가 나온 초등학교의 이름은?</option>
                  <option value="3">내가 나온 중학교의 이름은?</option>
                </select>
              </div>
              <div className="uk-margin uk-flex uk-flex-center">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: user" />
                  <input
                    className="uk-input uk-form-width-large"
                    type="text"
                    name="pw_answer"
                    value={this.state.pw_answer}
                    onChange={this.handleValueChange}
                    placeholder="비밀번호 찾기 답변란"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="uk-button uk-button-primary uk-form-width-large uk-margin-small-bottom"
              >
                가입하기
              </button>
              {/* //로그인 */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
