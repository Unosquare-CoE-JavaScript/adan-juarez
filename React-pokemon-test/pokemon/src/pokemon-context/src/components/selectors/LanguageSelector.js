import React, { useContext, useEffect } from 'react';

import { languageOptions } from '../../translations/languages';
import { PokeContext } from '../../state/context/PokeContext';

export const LanguageSelector = () => {
  /* const { userLanguage, userLanguageChange, descriptionLang} = useContext(PokeContext);

  const handleLanguageChange = e => {
    userLanguageChange(e.target.value);
    descriptionLang
  }

  useEffect(() => {
    handleLanguageChange
}, []);

  return (
    <select
      style={{
        borderRadius: '10px',
        padding: '4px',
        width: 'auto',
        background: 'white'
      }}
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  ); */
};