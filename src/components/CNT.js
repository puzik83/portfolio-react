import React from 'react';

const CNT = () => {
  return React.createElement(
    'div',
    { className: 'CNT' },
    React.createElement(
      'a',
      { href: '#contact', className: 'btn' },
      'Contact me'
    )
  );
};

export default CNT;