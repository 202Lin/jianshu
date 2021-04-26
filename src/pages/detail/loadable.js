import React from 'react'
import Loadable from 'react-loadable';


const LoadableComponent = Loadable({
  loader: () => import('./'),//选择要异步加载的组件
  loading(){
      return <div>正在加载中。。。。。。</div>
  },//加载过程中要展示的内容
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}