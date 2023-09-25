import React, { Component } from 'react'
import './style.scss'

import {
  Modal,
  Button,
  Typography,
  Card,
  CardContent,
  FormControl,
  TextField,
  CardActions,
  Link,
  CardHeader,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import Image from 'next/image'

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainClassName: 'section-login',
      open: false,
      title: 'Login to <b>ProfitTrackr.</b>'
    }
  }

  handleClose() {

    this.setState({
      open: false,
    })

    if(this.props.handleClose){
      this.props.handleClose()
    }

  }

  componentDidUpdate(prevProps) {

    
    if (prevProps.open != this.props.open) {
      
      console.log("🚀 ~ file: Login.jsx ~ line 45 ~ index ~ componentDidUpdate ~ prevProps.open", prevProps.open)
      console.log("🚀 ~ file: Login.jsx ~ line 36 ~ index ~ componentDidUpdate ~ this.props.open", this.props.open)
    
      this.setState({
        open: this.props.open
      })

    }

  }

  render() {

    const {
      state: {
        mainClassName,
        open,
        title,
      },
      props: {
      }
    } = this

    return (
      <Modal
        className={mainClassName}
        open={open}
        onClose={this.handleClose.bind(this)}
      >
        <div className='content'>

          <Card>

            <CardContent>

              <CardHeader
                className='block-header'
                title={
                  <Typography variant="h4" component="h5" dangerouslySetInnerHTML={{ __html: title }}></Typography>

                }
                action={(
                  <IconButton aria-label="close" onClick={this.handleClose.bind(this)}>
                    <CloseIcon />
                  </IconButton>
                )}
              >
              </CardHeader>

              <FormControl className='block-form'>
                <TextField label="Email" />
              </FormControl>

              <FormControl className='block-form'>
                <TextField label="Password" type='password' />
              </FormControl>

              <Link align='right'>
                <Typography>Forgot Password</Typography>
              </Link>

            </CardContent>

            <CardActions>
              <Button className='huge' variant='contained' color='secondary'>Login</Button>
            </CardActions>

          </Card>

        </div>
      </Modal>
    )
  }
}
