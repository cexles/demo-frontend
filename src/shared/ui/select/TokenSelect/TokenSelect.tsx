'use client';

import { useEffect, useState } from 'react';
import Select from 'react-select';

import { allowedTokens } from '@/shared/config/token.config';

import { Props } from './type';

function TokenSelect({ selectName, defaultValue, onChangeSelect }: Props) {
  const [currentToken, setCurrentToken] = useState<object>();

  useEffect(() => {
    if (currentToken === undefined) {
      allowedTokens.forEach((token) => {
        if (token.value === defaultValue) {
          setCurrentToken(token);
        }
      });
    }
  }, [currentToken, defaultValue]);

  const handleSelectChange = (selected) => {
    setCurrentToken(selected);
    onChangeSelect(selectName, selected.value);
  };

  return (
    <Select
      value={currentToken}
      options={allowedTokens}
      onChange={handleSelectChange}
      isSearchable={false}
      classNamePrefix="unit-select"
    />
  );
}

export default TokenSelect;
