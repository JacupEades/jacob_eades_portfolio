import React from 'react'
import styled from '@emotion/styled';
import { Button } from '@mui/material';

type Props = {}

const ColorButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 700,
  padding: '12px 24px',
  border: '2px solid',
  lineHeight: 1.5,
  borderColor: 'var(--border-weak)',
  '&:hover': {
    backgroundColor: 'var(--primary-strong)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'var(--primary-strong)',
    borderColor: 'var(--primary-weak)',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(255, 255, 255, 0.9)',
  },
});

function PrimaryColorButton({}: Props) {
  return (
    <>
      <ColorButton className='bg-opacity-100 bg-primaryMedium' variant="contained">
        Hire Me
      </ColorButton>
    </>
  )
}

export default PrimaryColorButton

