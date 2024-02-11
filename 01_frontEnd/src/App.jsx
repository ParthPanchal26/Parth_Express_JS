import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  })

  return (
    <>
      <h1>FrontEnd and BackEnd</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
          </div>
        ))
      }

    </>
  )
}

export default App
