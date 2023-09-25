import React, { Component } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import './style.scss'

import { AboutUs, Pricing, Contact } from '@/components/sections'
import Router, { withRouter } from 'next/router'


class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainClassName: 'templates-home-page'
    }
  }

  initalize() {

    try {

      if (window.innerWidth > 1000) {

        let sections = gsap.utils.toArray("." + this.state.mainClassName + " section")

        let currentSection = sections[0]

        gsap.defaults({ overwrite: 'auto', duration: 0.3 })

        gsap.set("." + this.state.mainClassName, { height: (sections.length * 100) + "%" })


        sections.forEach((section, i) => {

          ScrollTrigger.create({
            start: () => (i - 0.5) * innerHeight,
            end: () => (i + 0.5) * innerHeight,
            onToggle: self => self.isActive && setSection(section)
          })


        })

        function setSection(newSection) {

          try {

            if (newSection !== currentSection) {
              console.log("🚀 ~ file: HomePage.jsx ~ line 50 ~ index ~ setSection ~ newSection", newSection)

              gsap.to(currentSection, { scale: 0.8, autoAlpha: 0 })
              gsap.to(newSection, { scale: 1, autoAlpha: 1 })
              currentSection = newSection

              if (newSection) {

                Router.replace(
                  {
                    pathname: Router.router.pathname,
                    query: {
                      section: newSection?.id
                    },
                  },
                  undefined,
                  { shallow: true }
                )

                if (newSection.id == 'section-contact') {
                  document.querySelectorAll('.section-header .block-menu-item .MuiButton-root').forEach(item => item.style.color = 'white')
                }
                else {
                  document.querySelectorAll('.section-header .block-menu-item .MuiButton-root').forEach(item => item.style.color = null)
                }
                console.log("🚀 ~ file: HomePage.jsx ~ line 64 ~ index ~ setSection ~ Router", Router)

              }

            }
          }
          catch (err) {
            console.log("🚀 ~ file: HomePage.jsx ~ line 76 ~ index ~ setSection ~ err", err)

          }

        }

        ScrollTrigger.create({
          start: 1,
          end: () => ScrollTrigger.maxScroll(window) - 1,
          onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
          onLeave: self => self.scroll(2)
        }).scroll(2)

      }

    }
    catch (err) {

      console.log("🚀 ~ file: HomePage.jsx ~ line 53 ~ index ~ initalize ~ err", err)

    }
  }

  componentDidMount() {
    this.initalize()
  }

  componentDidUpdate(prevProps) {

    try {

      if (prevProps.router?.query?.section != this.props.router?.query?.section) {


        const currentSection = '#' + prevProps.router?.query.section
        const newSection = '#' + this.props.router?.query.section
        console.log("🚀 ~ file: HomePage.jsx ~ line 114 ~ index ~ componentDidUpdate ~ newSection", newSection)


        const currentSectionElement = document.querySelector(currentSection)
        const newSectionElement = document.querySelector(newSection)
        console.log("🚀 ~ file: HomePage.jsx ~ line 120 ~ index ~ componentDidUpdate ~ newSectionElement", newSectionElement)

        console.log("🚀 ~ file: HomePage.jsx ~ line 129 ~ index ~ componentDidUpdate ~ window.innerWidth", window.innerWidth)

        if (window.innerWidth > 1000) {

          const a = gsap.to(currentSectionElement, { scale: 0.8, autoAlpha: 0 })
          console.log("🚀 ~ file: HomePage.jsx ~ line 128 ~ index ~ componentDidUpdate ~ a", a)


          const b = gsap.to(newSectionElement, { scale: 1, autoAlpha: 1 })
          console.log("🚀 ~ file: HomePage.jsx ~ line 131 ~ index ~ componentDidUpdate ~ b", b)


          if (newSection == '#section-contact') {

            document.querySelectorAll('.section-header .block-menu-item .MuiButton-root').forEach(item => item.style.color = 'white')

          }
          else {

            document.querySelectorAll('.section-header .block-menu-item .MuiButton-root').forEach(item => item.style.color = null)

          }

        }
        else {

          const y = newSectionElement.getBoundingClientRect().top
          window.scrollTo({ top: y, behavior: 'smooth' });

        }


      }

    }
    catch (err) {

      console.log("🚀 ~ file: HomePage.jsx ~ line 124 ~ index ~ componentDidUpdate ~ err", err)

    }


  }


  render() {

    const {
      state: {
        mainClassName,
      },
      props: {
      }
    } = this

    return (
      <main className={mainClassName}>

        <AboutUs className='first' />

        <Pricing />

        <Contact />

      </main>
    )
  }
}
export default withRouter(index)