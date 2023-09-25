import React, { Component } from 'react'
import './style.scss'

import { Stack, Button, Link } from '@mui/material';
import Image from 'next/image'
import Router, { withRouter } from 'next/router'

import { Login } from '@/components/sections'

class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainClassName: 'section-header',
      showLogin: false,
    }
  }

  handleEvent(type) {

    try {

      console.log("🚀 ~ file: Header.jsx ~ line 17 ~ index ~ handleEvent ~ type", type)

      if (type == 'login') {

        this.setState({
          showLogin: true
        })

      }
      else if (type == 'close-login') {

        this.setState({
          showLogin: false
        })

      }
      else {

        Router.replace(
          {
            pathname: Router.router.pathname,
            query: {
              section: type
            },
          },
          undefined,
          { shallow: true }
        )


      }

    }
    catch (err) {

      console.log("🚀 ~ file: Header.jsx ~ line 21 ~ index ~ handleEvent ~ err", err)

    }
  }

  componentDidUpdate(prevProps) {

    console.log("🚀 ~ file: Header.jsx ~ line 40 ~ index ~ componentDidUpdate ~ prevProps", prevProps)
    if (prevProps.router != this.props.router) {

    }

  }

  render() {

    const {
      state: {
        mainClassName,
        showLogin,
      },
      props: {
      }
    } = this

    return (
      <section className={mainClassName}>

        <div className='content'>

          <Link
            className='block-brand white'
            onClick={this.handleEvent.bind(this, 'section-about-us')}
          >
            <Image
              className='logo'
              src={require('@/images/logo.png')}
              alt='Logo'
            />
            <Button variant="text"
            >HOME</Button>

            <Image className='decor-image img-1 left-top' src={require('@/images/decor-blob-1.svg')} alt="image-decor" />

          </Link>

          <Stack className='block-menu'>
            <div className='block-menu-item black'>
              <Button
                variant="text"
                onClick={this.handleEvent.bind(this, 'section-about-us')}
              >
                ABOUT
              </Button>
            </div>

            <div className='block-menu-item black'>
              <Button
                variant="text"
                onClick={this.handleEvent.bind(this, 'section-pricing')}

              >
                PRICING
              </Button>
            </div>

            <div className='block-menu-item black'>
              <Button
                variant="text"
                onClick={this.handleEvent.bind(this, 'section-contact')}

              >
                CONTACT
              </Button>
            </div>

            <div className='block-menu-item'>
              <Button
                variant="outlined"
                onClick={this.handleEvent.bind(this, 'login')}

              >
                Login
              </Button>
              <Login
                open={showLogin}
                handleClose={this.handleEvent.bind(this, 'close-login')}
              />
            </div>
          </Stack>

        </div>



      </section>
    )
  }
}

export default withRouter(index)
