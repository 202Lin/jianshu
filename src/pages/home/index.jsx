import React, { Component } from 'react'
import {connect} from 'react-redux'
import {HomeLeft,HomeRight,HomeWrapper,BackTop} from './styles'
import {getHomeData,changeBackTopAction} from './srore/actionActator'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

 class Home extends Component {
     /*使用react-redux，一些和组件不相干的数据发生改变之后，组件也会重新渲染，性能不高
     这个时候我们可以通过shouldComponentUpdate,来选择是否重新渲染，甚至可以使用pureComponent,
     它的内部使用了shouldComponentUpdate来进行判断是否渲染，但是呢，老师说pureComponent最后和immutable一起使用，不然有坑，
     我因为一些不知名的bug，没有使用immutable，所以也先不使用，回过头来再优化解决
     */
    componentDidMount() {
            this.props.homeAxiosData( getHomeData())
            window.addEventListener('scroll', this.props.changeBackTop)//监听滚动条
        }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeBackTop)//页面没了也就不需要监听了，取消监听
    }
       
        handleScrollTop(){
            window.scrollTo(0,0)
        }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1231000690,3957602360&fm=26&gp=0.jpg" alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.scrollTop?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:''}
            </HomeWrapper>
        )
    }
}
const mapState = (state) => ({
    scrollTop:state.get('homeReducer').scrollTop
})

const stateMethods =(dispatch) => ({
    homeAxiosData:(action) =>{
        dispatch(action)
    },
    changeBackTop:() => {
        if(document.documentElement.scrollTop>100){
            dispatch(changeBackTopAction(true))
        }else{
            dispatch(changeBackTopAction(false))
        }
    }
})
export default connect(mapState,stateMethods)(Home)
