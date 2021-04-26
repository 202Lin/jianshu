import React, { Component,createRef } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'//引入重定向
import {LoginBox,LoginWrapper,Input,Button} from './styles'
import {handleLogin} from './store/actionCreator'

 class Login extends Component {
     userName = createRef()
     password = createRef()
    render() {
        if(this.props.loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input ref={this.userName} placeholder="账号" />
                        <Input ref={this.password} placeholder="密码"/>
                        <Button onClick={() =>this.props.login(this.userName.current.value,this.password.current.value)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/"/>
        }
    }
}
const mapState = (state) => ({
    loginStatus:state.getIn(['loginReducer','loginStatus'])
})

const mapDispatch = (dispatch) => ({

    login:(userName,password) =>{

        dispatch(handleLogin(userName,password))
    }
})

export default connect(mapState,mapDispatch)(Login)
