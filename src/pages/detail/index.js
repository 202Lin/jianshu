import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
//使用了异步加载的方法，该组件不再是路由组件了，还要使用this.props.match.params.index,就要使用withRouter进行转换
import {DetailWrapper,Header,Content} from './styles'
import {getDetailData} from './store/actionCreator'

 class Detail extends Component {
     componentDidMount(){
         this.props.getDetail(this.props.match.params.index)//传递参数，
     }

    render() {
        return (
            <DetailWrapper>
                <Header>朋友圈中，层次越低的人，越喜欢用这3种“头像”来显摆自己</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.data}}/>
            </DetailWrapper>
        )
    }
}

const mapDispatch = (dispatch) =>({
    getDetail:(index) => {
        dispatch(getDetailData(index))
             }
})
const mapState = (state) => ({
    data:state.get('detailReducer').get('detail')
})

export default connect(mapState,mapDispatch)(withRouter(Detail))
