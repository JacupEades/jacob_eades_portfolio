import React from 'react'
import Stack from '@mui/material/Stack';
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

const ClearButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 700,
  color: 'var(--primary-medium)',
  padding: '12px 24px',
  border: '2px solid',
  backdropFilter: 'blur(2px)',
  lineHeight: 1.5,
  borderColor: 'var(--border-weak)',
  '&:hover': {
    backgroundColor: "var(--neutral-glass-hover)",
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: "var(--neutral-glass-hover)",
    borderColor: 'var(--primary-weak)',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(255, 255, 255, 0.9)',
  },
});

function HeroButtons({}: Props) {
  return (
    <>
     <Stack spacing={2} direction="row">
      <ColorButton className='bg-opacity-100 bg-primaryMedium' variant="contained">
        Hire Me
      </ColorButton>
      <ClearButton className='bg-opacity-100 bg-neutralGlass' variant="contained">
        View Projects
      </ClearButton>
    </Stack>
    {/* <div className='bg-borderWeak p-1 rounded-md'>
         <button className="px-6 py-3 bg-primaryMedium rounded-md">Hire Me</button>
    </div> */}
    </>
  )
}

export default HeroButtons

