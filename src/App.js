import {Route,BrowserRouter} from 'react-router-dom'
import Header from './common/Header/HeaderContainer'
import Home from './pages/home/index'
import Detail from './pages/detail/loadable'//加载的是异步加载的那个插件写的文件，不是index了哦
//同时因为<Route/>的component里面不再是detail的ui组件，所以不能拿到路由组件才能拿到的一些属性，可以使用withRouter转换
import Login from './pages/login/index'
import Writer from './pages/writer/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/detail/:index" exact component={Detail}/>
        <Route path="/login" component={Login}/>
        <Route path="/writer" component={Writer}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
