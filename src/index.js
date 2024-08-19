// C:\Users\kanka\Downloads\jobby-App-master\jobby-App-master\src\index.js




import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Cookie from 'js-cookie'

import App from './App'

// Clear JWT token on initial load to force login
Cookie.remove('JobbY_token')

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
