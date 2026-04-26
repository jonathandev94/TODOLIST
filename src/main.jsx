import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Se o erro do index.css aparecer, deixe esta linha comentada:
// import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)