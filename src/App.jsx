import { useState } from "react";
import  SignUpForm  from './components/SignUpForm.jsx';
import Authenticate  from './components/Authenticate';
import './App.css'


function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
export default App
