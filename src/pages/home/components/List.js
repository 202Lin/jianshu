import React, { Component } from 'react'

import {connect} from 'react-redux'
import {ListInfo,ListItem,LoadMore} from '../styles'
import {getMoreData} from '../srore/actionActator'
import {Link} from 'react-router-dom'

 class List extends Component {
   
    render() {
        const {list,getMoreList} = this.props
        return (
            <div>
                {
                    list.map((item) => {
                        // 要使用js表达式的话，要在外层加一个大括号哦
                        return (<Link key={item.id} to={`/detail/${item.id}`}>
                                    <ListItem key={item.id}>
                                        <img className="pic" src={item.picUrl} alt=""/>
                                        <ListInfo>
                                            <h3 className="title">{item.title}</h3>
                                            <p className="desc">{item.desc}</p>
                                        </ListInfo>
                                    </ListItem>
                        </Link>)
                    })
                }
                <LoadMore onClick={getMoreList}>加载更多</LoadMore>
            </div>
        )
}
}

const state = (state) => {
    return {
        list:state.get('homeReducer').listData
    }
}
const useState = (dispatch) => ({
    getMoreList:() => {
        dispatch(getMoreData())
    }
})
export default connect(state,useState)(List)
