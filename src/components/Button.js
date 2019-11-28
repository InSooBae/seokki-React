import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  border-radius: 30px;
`;

const Button = ({ text, className, type, style }) => (
  <Container className={className} type={type} style={style}>
    {text}
  </Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
