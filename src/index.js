import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import './style/style.css'

// Components
import App from './components/app'

// Reducers
import reducers from './reducers'

// ServiceWorker
import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware()(createStore)

class Hello extends React.Component {
  render () { return <div>Hello!</div> }
}

class Goodbye extends React.Component {
  render () { return <div>Goodbye!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
        <Route path='/hello' component={Hello} />
        <Route path='/goodbye' component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
