import React, { Component } from 'react'
import {connect} from 'react-redux'
import {HomeLeft,HomeRight,HomeWrapper} from './styles'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import axios from 'axios'

 class Home extends Component {
    componentDidMount() {
        axios.get('/api/home.json')
        .then((res) => {
            const action = {
                type:'change_home_data',
                topicList:res.data.topicList,
                listData:res.data.listData,
                recommendList:res.data.recommendList,
            }
            this.props.homeAxiosData(action)
        })
        .catch((e) => console.log("出错了啊啊啊！"+e))
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
            </HomeWrapper>
        )
    }
}
const stateMethods =(dispatch) => ({
    homeAxiosData:(action) =>{

        dispatch(action)
    }
})
export default connect(null,stateMethods)(Home)
