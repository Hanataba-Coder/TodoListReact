import styled from 'styled-components';

export const DropdownBtn = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  width: 150px;
  position: relative;
  outline: none;
  text-align: left;

  &:after {
    position: absolute;
    content: '';
    top: ${({ toggle }) => (toggle ? '20%' : '50%')};
    right: ${({ toggle }) => (toggle ? '8px' : '20px')};
    width: 7px;
    height: 7px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    -webkit-transform: ${({ toggle }) =>
        toggle ? 'rotate(225deg)' : 'rotate(45deg)'}
      translateY(-100%);
    -ms-transform: ${({ toggle }) =>
        toggle ? 'rotate(225deg)' : 'rotate(45deg)'}
      translateY(-100%);
    transform: ${({ toggle }) => (toggle ? 'rotate(225deg)' : 'rotate(45deg)')}
      translateY(-100%);
  }
`;

export const DropdownContentWrapper = styled.div`
  position: absolute;
  margin-top: 5px;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${({ toggle }) => (toggle ? 'block' : 'none')};
  border-radius: 10px;
  padding: 5px;

  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 10px;
  }

  & a:hover {
    background-color: #585292;
    color: #fff;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    & ${DropdownBtn} {
      background-color: #f1f1f1;
    }
  }
`;
