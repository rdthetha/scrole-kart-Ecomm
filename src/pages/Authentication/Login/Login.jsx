import React from 'react'
import LoginForm from '../../../components/Auth/LoginForm'
import Footer from '../../../components/Footer/footer'
import NavigationTop from '../../../components/Navigation/navigation-top'
import "./Login.css"
export default function Login() {
  return (
      
    <div className="ec-login-container">
      <NavigationTop/>
      <LoginForm/>
      <Footer/>
    </div>
  )
}
