import React from 'react';
import { Blob, Text, MenuText } from './navigationElement.styles';
import { FiUser } from 'react-icons/fi';

const NavigationElement = ({ blob, isSelected, name, select, url, icon }) => {
  const onSelect = () => select(url);
  console.log(isSelected);
  return (
    <Blob className="blob" isSelected={isSelected} onClick={onSelect}>
      <Text>
        {icon}
        <div>
          <MenuText>{name}</MenuText>
        </div>
      </Text>
      {blob}
    </Blob>
  );
};

export default NavigationElement;
