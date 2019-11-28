import React, { Component } from 'react';
import { post } from 'axois';

export default class CusAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: '',
      title: '',
      hashTag: '',
      category: '',
      description: ''
    };
  }
  render() {
    return <div></div>;
  }
}
