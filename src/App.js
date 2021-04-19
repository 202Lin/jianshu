import {Route,BrowserRouter} from 'react-router-dom'
import Header from './common/Header/HeaderContainer'
import Home from './pages/home/index'
import Detail from './pages/detail/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/detail" exact component={Detail}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
