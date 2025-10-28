import React from 'react'
import Header from '../../Components.jsx/Header'
import Bann from '../../Components.jsx/Bann'
import couples from '../../images/requesthero.png'
import RequestSec from '../home/RequestSec'
import Footer from '../../Components.jsx/Footer'


const Request = () => {
  return (
    <>
    <Header/>
    <Bann imageImport={couples} always='Make a Request' />
    <RequestSec />
    <Footer/>
    </>
  )
}

export default Request