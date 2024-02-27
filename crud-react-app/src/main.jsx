import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/UserContext.jsx'
import AuthProvider from './context/AuthContext.jsx'
import ModalProvider from './context/ModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <UserProvider>
  <ModalProvider>
  <App />
  </ModalProvider>
    
  </UserProvider>
  </AuthProvider>
)
