import React from 'react'
import styled from '@emotion/styled';
import Image from 'next/image'
import { Button } from '@mui/material';

type Props = {text: string, icon?: string, link: string, target?: string}

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

function ButtonColor({text, icon, link, target}: Props) {
  return (
    <>
      <ColorButton className='bg-opacity-100 bg-primaryMedium hover:bg-sky-700' variant="contained">
        {icon ? (<Image
          src={icon}
          alt="icon"
          width={24}
          height={24}
        />) : ('')}<a href={link} target={target}>{text}</a>
      </ColorButton>
    </>
  )
}

export default ButtonColor

