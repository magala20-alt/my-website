import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindcss from '@tailwindcss/vite'
import './App.css'

function Navigation(){
  return (
    <nav className="w-full container mx-auto py-4 top-0 left-0 navbar">
        <p>Angel Ashley Kisaakye Magala</p>
        <ul class="navi">
            <li className="navi-item"><a href="#">About</a></li>
            <li className="navi-item"><a href="#">Experience</a></li>
            <li className="navi-item"><a href="#">Projects</a></li>
            <li className="navi-item"><a href="#">Contact</a></li>
        </ul>
    </nav>

  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Navigation/>
          <main>
            <p>Welcome, content soon</p>
          </main>
      </div>
     
    </>
  )
}

export default App
