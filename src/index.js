import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './styles.js';//使用styled-components这个库，就是用法有一些搞不懂
import {GlobalStyleIconfont} from './static/Iconfont/iconfont'
import {Provider} from 'react-redux'
import store from './store/index'
import App from './App';

ReactDOM.render( 
  <Fragment>
    <GlobalStyle></GlobalStyle>
    <GlobalStyleIconfont></GlobalStyleIconfont>
    <Provider store={store}>
      <App/>
    </Provider>
  </Fragment>,
  document.getElementById('root')
);


