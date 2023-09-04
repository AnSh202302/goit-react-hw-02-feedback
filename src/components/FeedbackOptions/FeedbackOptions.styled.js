const { styled } = require('styled-components');

export const ButtonList = styled('ul')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  };
});

export const Buttton = styled('button')(() => {
  return {
    minWidth: 64,
    padding: 4,
    backgroundColor: '#cfc5c5',
    border: 'none',
    borderRadius: 4,
    boxShadow: '4px 5px 7px 1px rgb(18 15 18 / 43%)',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#5089b3c9',
    },
  };
});
