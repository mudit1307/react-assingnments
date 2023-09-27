import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import ChangeColor from "./components/change-color/ChangeColor.jsx"
import ChangeTextSize from "./components/change-text-size/changeTextSize.jsx"
import ResetSize from "./components/reset-text/resetSize.jsx"
import EmailDomain from "./components/emailDomain/emailDomain.jsx"
import Toggle from './components/toggle-display/toggle.jsx'
import ToDo from './components/todoList/ToDo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ChangeColor/> */}
    {/* <ChangeTextSize/> */}
    {/* <ResetSize/> */}
    {/* <EmailDomain/> */}
    {/* <Toggle></Toggle> */}
    <ToDo></ToDo>
  </React.StrictMode>,
)
