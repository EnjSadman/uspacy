"use client"

import './styles.css';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Container } from '@mui/material';
import { scrollToAnchor } from '../lib/scrollToAncror';

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
          onClick={() => {
            scrollToAnchor("register");
          }}
        >
          Зареєструватися
        </Button>
      </Container>
    </header>
  )
}