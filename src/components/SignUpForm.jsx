import { useState } from 'react';
import '../App.css'


export default function SignUpForm() { 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  

async function handleSubmit(event) {
    event.preventDefault();
    console.log(username);
    console.log(password);
    setUsername(''); // resets the state value
    setPassword('');  
  }
    return ( 
    
    <div>
       <h2>Sign Up!</h2>
      
       <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
          <input
            value={username} // controls the input value
            type="username"
            id="username"
            onChange={(e) =>setUsername(e.target.value)
            }
          />
        <label htmlFor='password'>Password</label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)
             }
             />
             <p>{errorMessage}</p>
        <button type ="submit">Sign Up</button>
    </form>
    </div>
    )}