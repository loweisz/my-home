import React from 'react';
import { Blob, Text, MenuText } from './navigationElement.styles';

const NavigationElement = ({ blob, isSelected, name, select, url, icon }) => {
  const onSelect = () => select(url);
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
