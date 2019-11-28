import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.input`
  border-radius: 20px;
`;

const Input = ({
  className,
  placeholder,
  required = true,
  value,
  onChange,
  type = 'text',
  accept,
  onBlur
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    type={type}
    accept={accept}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  accept: PropTypes.string
};
export default Input;
