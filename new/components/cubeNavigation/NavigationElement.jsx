import React from 'react';
import { Blob, Text, MenuText } from './navigationElement.styles';
import { FiChevronsRight } from "react-icons/fi";

const NavigationElement = ({ blob, isSelected, name, select, url, icon }) => {
  const onSelect = () => select(url);
  return (
    <Blob className="blob" isSelected={isSelected} onClick={onSelect}>
      <Text>
        <FiChevronsRight className="icon" />
        <MenuText>
          {name}
        </MenuText>
      </Text>
      {blob}
    </Blob>
  );
};

export default NavigationElement;
