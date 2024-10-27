import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
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
    <Router> {/* This wraps the app with Router functionality */}
      <Routes> {/* Define the routes */}
        <Route path="/" element={<Welcome />} />         {/* Default Route */}
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App