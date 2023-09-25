import React, { Component } from 'react'
import './style.scss'
import { Header } from '@/components/sections'



export default class MainLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainClassName: 'main-layout'
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

        <Header/>

        {children}



      </div>

    )
  }
}
