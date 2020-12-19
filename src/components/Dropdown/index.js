import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownContainer,
  DropdownBtn,
  DropdownContentWrapper,
} from './styled';

const Dropdown = ({ btn, filter }) => {
  const [Toggle, setToggle] = useState(false);
  const [SelectedOption, setSelectedOption] = useState('All');
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

  const onSelected = (selected) => {
    setSelectedOption(selected);
    handlerToggle();
    filter(selected);
  };

  return (
    <DropdownContainer ref={node}>
      <DropdownBtn toggle={Toggle} onClick={handlerToggle}>
        {SelectedOption}
      </DropdownBtn>
      <DropdownContentWrapper toggle={Toggle}>
        <a onClick={() => onSelected('All')}>All</a>
        <a onClick={() => onSelected('Done')}>Done</a>
        <a onClick={() => onSelected('Undone')}>Undone</a>
      </DropdownContentWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
