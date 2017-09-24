import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import './style/style.css'

// Import Components
import PostsIndex from './components/posts_index'

// Reducers
import reducers from './reducers'

// ServiceWorker
import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
