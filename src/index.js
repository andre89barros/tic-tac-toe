import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Board from './components/board'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Board/>, document.getElementById('root'))
if (module.hot) {
  module.hot.accept()
}
registerServiceWorker()
