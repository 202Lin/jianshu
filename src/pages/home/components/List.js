import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ListInfo,ListItem} from '../styles'

 class List extends Component {
   
    render() {
        const {list} = this.props
        return (
            list.map((item) => {
                return (       
                <ListItem>
                    <img className="pic" src={item.get('picUrl')} alt=""/>
                    <ListInfo>
                        <h3 className="title">{item.get('title')}</h3>
                        <p className="desc">{item.get('desc')}</p>
                    </ListInfo>
                </ListItem>)
            })
        )
}
}

const state = (state) => {
    return {
        list:state.get('homeReducer').get('listData')
    }
}
export default connect(state,null)(List)
