import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import './page2.css'

const Page2 = (props) => {
  return (
    <div className="page2-container">
      <Helmet>
        <title>Page2 - Obedient Sour Jellyfish</title>
        <meta property="og:title" content="Page2 - Obedient Sour Jellyfish" />
      </Helmet>
      <Navbar3
        link1={
          <Fragment>
            <span className="page2-text1">О нас</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="page2-text2">Указы и документы</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="page2-text3">Получение лицензии</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="page2-text4">Portfolio</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="page2-text5">Контакты</span>
          </Fragment>
        }
        rootClassName="navbar3root-class-name"
      ></Navbar3>
    </div>
  )
}

export default Page2
