import { useState } from 'react';
import '../App.css'

export default function SignUpForm() { 
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit(event) {
    event.preventDefault();
   try {fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
              { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: "some-username", 
                  password: "super-secret-999" 
                }) 
              })

    } catch (error) {
      setError(error.message);
    }
    
  }
    return ( 
    
    <div>
       <h2>Sign Up!</h2>
       {error && <p>{error}</p>}
       <form onSubmit={handleSubmit}>
        <label>
        Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           </label>
        <button>Submit</button>
    </form>
    </div>
    )
}