import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownContainer,
  DropdownBtn,
  DropdownContentWrapper,
} from './styled';

const ListOptionDropdown = ({ btn, option }) => {
  const [Toggle, setToggle] = useState(false);
  const node = useRef();

  const handlerToggle = () => {
    setToggle(!Toggle);
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setToggle(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <DropdownContainer ref={node}>
      <DropdownBtn onClick={handlerToggle}>{btn}</DropdownBtn>
      <DropdownContentWrapper toggle={Toggle}>
        {option.map((e, index) => (
          <a
            onClick={() => {
              e.click();
              handlerToggle();
            }}
            style={{ color: e.color }}
          >
            {e.name}
          </a>
        ))}
      </DropdownContentWrapper>
    </DropdownContainer>
  );
};

export default ListOptionDropdown;
