import React from 'react'
import ReactDOM from 'react-dom/client'
//=======================================bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'popper.js/dist/popper.js'
//==============================================
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
