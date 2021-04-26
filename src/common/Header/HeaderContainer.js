import {connect} from 'react-redux'
import Header from './index'
import {InputBlurAction,InputFocusAction,getList,searchMouseInAction,searchMouseLeaveAction,changeItemAction} from './store/actionCreator'
import {logoutAction} from '../../pages/login/store/actionCreator'

function state(state) {
    return {foused:state.getIn(['headerReducer','foused']),
            list:state.getIn(['headerReducer','list']),
            mouseIn:state.getIn(['headerReducer','mouseIn']),
            page:state.getIn(['headerReducer','page']),
            totalPage:state.getIn(['headerReducer','totalPage']),
            loginStatus: state.getIn(['loginReducer','loginStatus'])
    // return {foused:state.get('headerReducer').get('foused')} ;//因为将reducer拆开了，所以多了数据多了一层，这里要写state.headerReducer，而不是state
}
}
function methods(dispatch) {
    return{
        handleInputBlur : () => {
            const action = InputBlurAction()
            dispatch(action)
        },
        handleInputFocus : (list) => {
            const action = InputFocusAction()
            if(list.size === 0){//immutable数组有一个size属性，这里用来优化性能，减少发送axios请求。
                dispatch(getList())
            }
            dispatch(action)
        },
        searchMouseIn:() => {
            const action = searchMouseInAction()
            dispatch(action)
        },
        searchMouseLeave:() => {
            const action = searchMouseLeaveAction()
            dispatch(action)
        },
        changeItem:(page,totalPage,spin) => {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            console.log(originAngle)
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{

                originAngle = 0
            }
            spin.style.transform = `rotate(${originAngle+360}deg`
            const action = changeItemAction(page,totalPage)
            dispatch(action)
        },
        logout:() => {
            dispatch(logoutAction())
        }
  }
}
export default connect(state,methods)(Header)