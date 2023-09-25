import React, { Component } from 'react'
import './style.scss'
import { Container, Typography, Grid, Link } from '@mui/material'
import Image from 'next/image'

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainClassName: 'section-contact',
      title: "Let's Talk.",
      subtitle: "Share your excitement with us.",
      email: 'contact@profittrackr.com'
    }
  }
  render() {

    const {
      state: {
        mainClassName,
        title,
        subtitle,
        email,
      },
      props: {
        className,
      }
    } = this

    return (
      <section className={mainClassName + ' full-screen ' + (className || '')} id={mainClassName}>

        <Container>
          <Link className='block-title' href={'mailto:'+email}>
            <Typography variant='h1' component='h3'><b>{title}</b></Typography>
            <Typography variant='h5' component='h5'>{subtitle}</Typography>
            <Typography className='color-primary' variant='h4' component='h6'>{email}</Typography>
          </Link>
        </Container>

        <Image className='decor-image img-2 right-bottom' src={require('@/images/decor-blob-1.svg')} alt="decor image"/> 


      </section>
    )
  }
}
