import React from 'react'
import Header from '../../Components.jsx/Header'
import Bann from '../../Components.jsx/Bann'
import corporate from '../../images/contacthero.png'
import Journey from '../../Components.jsx/Journey'
import Footer from '../../Components.jsx/Footer'
import ContactSec1 from './ContactSec1'

const Contact = () => {
  return (
    <>
    <Header/>
    <Bann imageImport={corporate} always='Contact Us' neww={true}/>
    <ContactSec1/>
    <Journey/>
    <Footer/>
    </>
  )
}

export default Contact