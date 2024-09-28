"use client"

import './styles.css';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Container } from '@mui/material';

export function Header() {
  return(
    <header className='header'>
      <Container className='header__container'>
        <Link
          href={'/'}        
        >
          <Image 
            src={'../../images/logo_full.svg'}
            alt={'uspacy logo'}
            width={116}
            height={32}
          />
        </Link>
        <Button
          className='button button-white'
          variant='contained'
        >
          Зареєструватися
        </Button>
      </Container>
    </header>
  )
}