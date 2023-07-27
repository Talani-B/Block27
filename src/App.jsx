import { useState } from "react";
import  SignUpForm  from './components/SignUpForm.jsx';
import Authenticate  from './components/Authenticate';
import './App.css'

function App() {
  

  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

export default App
