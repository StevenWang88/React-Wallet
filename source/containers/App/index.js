import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, browserHistory, Route } from 'react-router-dom'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Header from '../components/header'
import Counter from '../components/dashboard'
import Login from '../components/login'
import todo from '../reducers'

const mainReducer = combineReducers({
  routing: routerReducer,
  todo
})
const enhancer = process.env.NODE_ENV==='production'? applyMiddleware(thunk) : applyMiddleware(thunk, createLogger())
const store = createStore(mainReducer, enhancer)

class App extends Component {

  render() {
    return (
      <div>
       <Provider store={store}>
       <BrowserRouter history={browserHistory}>
         <Header>
          <Route path="/login" component={Login} />
          <Route path="/calcu" component={Counter} />
         </Header>
       </BrowserRouter>
       </Provider>
      </div>
    )
  }
}

export default App