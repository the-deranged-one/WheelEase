import React from 'react'
import Welcome from './components/Welcome'
import FirstPage from './components/FirstPage'
import Login from './components/Login'
import Signup from './components/Signup'
import Emergency from './components/Emergency'
import Employee from './components/Employee'
import Nurse from './components/Nurse'
import Doctor from './components/Doctor'
import Verification from './components/Verification'

function App() {
  return (
    <>
      <Welcome/>
      <FirstPage/>
      <Login/>
      <Signup/>
      <Emergency/>
      <Employee/>
      <Nurse/>
      <Doctor/>
      <Verification/>

    </>
  )
}

export default App