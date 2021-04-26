import React, { Component } from 'react'
import {connect} from 'react-redux'
import {RecommendWrapper,RecommendItem} from '../styles'

 class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {this.props.list.map((item) => <RecommendItem key={item.id} imgUrl={item.imgUrl}/>)}
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => {
    return {list:state.get('homeReducer').recommendList}
}
export default connect(mapState,null)(Recommend)
