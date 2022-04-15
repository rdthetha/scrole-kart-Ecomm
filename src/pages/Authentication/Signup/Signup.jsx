import React from 'react'
import SignupForm from '../../../components/Auth/SignupForm'
import Footer from '../../../components/Footer/footer'
import NavigationTop from '../../../components/Navigation/navigation-top'

export default function Signup() {
  return (
    <div class="ec-login-container">
        <NavigationTop/>
        <SignupForm/>
        <Footer/>     
    </div>
  )
}
