import React, { Component } from 'react'
import './style.scss'

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainClassName: 'section-footer'
    }
  }
  render() {

    const {
      state: {
        mainClassName,
      },
      props: {
        children
      }
    } = this

    return (
      <div className={mainClassName}>

        {children}

      </div>
    )
  }
}

