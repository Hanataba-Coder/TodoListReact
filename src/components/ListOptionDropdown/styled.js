import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownBtn = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  position: relative;
  outline: none;
`;

export const DropdownContentWrapper = styled.div`
  position: absolute;
  right: 0;
  margin-top: 5px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: ${({ toggle }) => (toggle ? 'block' : 'none')};
  border-radius: 10px;
  padding: 5px;
  z-index: 1;

  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  & a:hover {
    background-color: #f1f1f1;
  }
`;
