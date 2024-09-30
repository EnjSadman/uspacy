"use client"

import global from '../globals.module.css'
import styles from './styles.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Container } from '@mui/material';
import { scrollToAnchor } from '../lib/scrollToAncror';

export function Header() {
  return(
    <header className={styles.header}>
      <Container className={styles.header__container}>
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