import React from 'react';
import styled from 'styled-components';
import Clock from 'react-live-clock';
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span``;

export default () => (
  <Footer>
    <Copyright>Seokki Sidae &copy;</Copyright>
    <Clock format={'YYYY 년 MM 월 DD 일 HH:mm:ss'} ticking={true} />
  </Footer>
);
