import { useState } from 'react';
import '../App.css'

export default function SignUpForm() { 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

async function handleSubmit(event) {
    event.preventDefault();

   try {
    const url = 'https://fsa-jwt-practice.herokuapp.com/signup', 
    const data = JSON.stringify({ username , password }); 
    const response = await fetch(url,
              { 
                method: 'POST', 
                headers: { 
                  "Content-Type": 'application/json' 
                }, 
                body:data });
                
                if (!response.ok) { 
                 throw new Error('Something went wrong');
                }
            // Handle the response here

          } catch (error) {
      console.error(error);
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