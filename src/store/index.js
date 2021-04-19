import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//这里是为了要使用redux-devtools插件哦
export default  createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
))