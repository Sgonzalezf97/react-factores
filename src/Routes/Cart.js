import React from 'react'
import Carts from '../Components/Carts'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import '../Components/NavStyle.css'



function Cart() {
  return (
        <div className=''>
          <Nav />
          <Carts />
          <Footer />
        </div>
  )
}
export default Cart