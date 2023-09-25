import React, { Component } from 'react'
import './style.scss'
import { Container, Typography, Grid } from '@mui/material'
import Image from 'next/image'

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainClassName: 'section-about-us',
      slogan: '"Simplify, Track, Prosper <br/> Your Business, Elevated."',
      title: 'Welcome to <b>ProfitTrackr</b>',
      subtitle: 'Streamlining Your Business Operations',
      description: 'At ProfitTrackr, we are on a mission to empower entrepreneurs by providing them with a revolutionary tool that simplifies their daily operations and transforms the way they manage their businesses. Our innovative website serves as a comprehensive ERP solution, tailored specifically to cater to the needs of modern entrepreneurs who understand the importance of efficient inventory management and accurate financial tracking.'
    }
  }
  render() {

    const {
      state: {
        mainClassName,
        title,
        slogan,
        subtitle,
      },
      props: {
        className,
      }
    } = this

    return (
      <section className={mainClassName + ' full-screen '+(className||'')} id={mainClassName}>

        <Container>
          <div className='block-title'>
            <Typography variant='h2' component='h1' dangerouslySetInnerHTML={{__html: title}}></Typography>
            <Typography variant='h4' component='h2'>{subtitle}</Typography>
          </div>

          <div className='block-description'>
            <Typography variant='h5' component='h3'>
              <b className='light'><i  dangerouslySetInnerHTML={{__html: slogan}}></i></b>
            </Typography>
            <Image src={require('@/images/illustration-multitasking.svg')} alt="Illustration Multitasking"/>
          </div>
        </Container>

        <Image className='decor-image img-2 right-bottom' src={require('@/images/decor-blob-1.svg')} alt="decor image"/> 


      </section>
    )
  }
}
