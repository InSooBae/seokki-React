import React, { Component } from 'react';
import { post } from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      nickName: '',
      title: '',
      hashTag: '',
      category: '',
      description: '',
      fileName: ''
    };
  }
  // select태그 스테이트 설정

  addProduct = () => {
    const url = '/api/';
    const formData = new FormData();
    formData.append('image', this.state.file);
    formData.append('nickName', this.state.nickName);
    formData.append('title', this.state.title);
    formData.append('hashTag', this.state.hashTag);
    formData.append('category', this.state.category);
    formData.append('description', this.state.description);
    const config = {
      'content-type': 'multipart/form-data'
    };
    return post(url, formData, config);
  };

  handleFormSubmit = e => {
    //자동 리프레시 우선막음
    e.preventDefault();
    this.addProduct().then(response => {
      console.log(response.data);
    });
  };

  handleFileChange = e => {
    console.log(e.target.value);
    this.setState({
      //e.target 은 이벤트가 발생한 인풋값 그자체
      file: e.target.files[0],
      fileName: e.target.value
    });
  };

  handleValueChange = e => {
    let nextState = {};
    console.log(e.target.name, e.target.value);
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };
  //왠진 모르겠는데 e.target.name 출력안됨
  handleSelectChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      category: e.target.value
    });
  };
  //왠진 모르겠는데 e.target.name 출력안됨
  handleTextAreaChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  render() {
    return (
      <div className="uk-card uk-card-default uk-card-hover uk-card-body ">
        <h3 className="uk-card-title">상 품 등 록</h3>
        <ul
          className="uk-grid-midium uk-child-width-1-1 uk-child-width-1-2@m uk-text-center"
          data-uk-grid
        >
          <li>
            <div className="uk-card uk-card-default uk-card-body">
              <form
                className="js-upload uk-placeholder uk-text-center"
                onSubmit={this.handleFormSubmit}
              >
                <div data-uk-form-custom>
                  <input
                    type="file"
                    multiple={true}
                    accept="image/*"
                    onChange={this.handleFileChange}
                  />
                  <button className="uk-button uk-button-primary">
                    프로필 이미지 선택
                    <span uk-icon="icon: cloud-upload" />
                  </button>
                </div>
              </form>
            </div>
            <em>※프로필 이미지 선택 안할시 기본 이미지 적용</em>
            <progress
              id="js-progressbar"
              className="uk-progress"
              value={0}
              max={100}
              data-hidden
            />
          </li>
          <form onSubmit={this.handleFormSubmit}>
            <fieldset className="uk-fieldset">
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleValueChange}
                  placeholder="상품의 제목을 입력하세요"
                />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  name="hashTag"
                  value={this.state.hashTag}
                  onChange={this.handleValueChange}
                  placeholder="해시태그를 입력하세요"
                />
              </div>
              <div className="uk-margin">
                <select
                  value={this.state.category}
                  onChange={this.handleSelectChange}
                  className="uk-select"
                >
                  <option value="식료품">식 료 품</option>
                  <option value="전자기기/IT">전 자 기 기/ IT</option>
                  <option value="중고서적">중 고 서 적</option>
                  <option value="의류">의 류</option>
                </select>
              </div>
            </fieldset>
            <div className="uk-margin uk-width-expand">
              <textarea
                className="uk-textarea"
                rows={15}
                value={this.state.description}
                onChange={this.handleTextAreaChange}
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
        </ul>
      </div>
    );
  }
}
