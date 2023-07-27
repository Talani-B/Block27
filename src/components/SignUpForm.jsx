import { useState } from 'react';
import '../App.css'


export default function SignUpForm() { 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  

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
       {error && <p>{error}</p>}
       <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
          <input
            value={username} // controls the input value
            type="username"
            id="username"
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value)
            }}
          />
        <label htmlFor='password'>Password</label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)
             }
             />
        <button type ="submit">Sign Up</button>
    </form>
    </div>
    )}