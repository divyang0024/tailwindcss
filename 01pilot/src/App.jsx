import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="bg-blue-900">
        <ul className="flex gap-5 px-8 py-5 text-white text-base">
          <li className="cursor-pointer"><a href="http://www.google.com">Home</a></li>
          <li className="cursor-pointer"><a href="http://www.google.com">About</a></li>
          <li className="cursor-pointer"><a href="http://www.google.com">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default App
