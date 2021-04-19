import React, { Component } from 'react'
import {connect} from 'react-redux'
import {TopicItem,TopicWrapper} from '../styles'

 class Topic extends Component {
    
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map(item => {
                        return (                
                            <TopicItem key={item.get('id')}>
                                <img
                                    className="topic-pic"
                                    src={item.get('url')} 
                                    alt=""
                                    />
                                {item.get('title')}
                            </TopicItem> )
                    })               
                }
            </TopicWrapper>
        )
    }
}



const state = (state) => {
    return {list:state.get('homeReducer').get('topicList')}
}
export default connect(state,null)(Topic)
