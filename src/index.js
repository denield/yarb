import 'reset-css/reset.css'

import React from 'react'
import { render } from 'react-dom'
import App from './app'
import ErrorBoundary from './error'

render(
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>
, document.getElementById('app'))