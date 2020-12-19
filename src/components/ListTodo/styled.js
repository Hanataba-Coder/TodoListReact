import styled from 'styled-components';

export const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  height: 100%;
`;

export const List = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    background: #fff;
    border-radius: 20px;
    margin 10px 0px;
    justify-content: space-between;
`;

export const SettingIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-65%);
  right: 10px;
  font-weight: bold;
`;

export const ListInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background: #fff;

  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`;

export const InlineFlex = styled.div`
  display: inline-flex;
`;

export const SaveBtn = styled.button`
  outline: none;
  background: #585292;
  color: #fff;
  border-radius: 20px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  outline: none;
  background: #e07c7c;
  color: #fff;
  border-radius: 20px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
