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
                            <TopicItem key={item.id}>
                                <img
                                    className="topic-pic"
                                    src={item.url} 
                                    alt=""
                                    />
                                {item.title}
                            </TopicItem> )
                    })               
                }
            </TopicWrapper>
        )
    }
}



const state = (state) => {
    return {list:state.get('homeReducer').topicList}
}
export default connect(state,null)(Topic)
