import {combineReducers} from 'redux-immutable'
//使用combineReducers来整合reducer，而引用redux-immutable会使得所有的state都变成inmmutable对象
import headerReducer from '../common/Header/store/reducer'
import homeReducer from '../pages/home/srore/reducer'

export default combineReducers({headerReducer,homeReducer})