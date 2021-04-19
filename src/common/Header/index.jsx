import React, {Component} from 'react'
import {HeaderWriper,
       Logo,
       Nav,
       NavItem,
       NavSearch,
       Addition,
       Button,
       SearchWrapper,
       SearchInfo,
       SearchInfoTitle,
       SearchInfoSwitch,
       SearchInfoItem,
       SearchInfoList,
    } from './styles'
import { CSSTransition } from 'react-transition-group';

export default class Header extends Component{
     getListArea = () => {
         const {foused,list,mouseIn,page,totalPage,searchMouseIn,searchMouseLeave,changeItem} =this.props
         const newList = list.toJS()
         const minList = []
         if(newList.length){
            for( let i = (page-1)*10;i<page*10;i++){
                minList.push(newList[i])
            }
        }
         
        if(foused || mouseIn) {
            return (
            <SearchInfo
                onMouseEnter={searchMouseIn}
                onMouseLeave={searchMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch 
                      onClick={() =>changeItem(page,totalPage,this.spin)}
                    >
                        <span ref={(spin) => this.spin = spin} className="iconfont spin">&#xe606;</span>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {//注意此时的list是一个immutable数组，但是恰好呢immutable数组也提供了一个map方法
                        minList.map((item) => <SearchInfoItem key={item}>{item}</SearchInfoItem>)
                    }
                </SearchInfoList>
            </SearchInfo>)
        }else{
            return null
        }
    }
    render(){
        const {foused,list,handleInputFocus,handleInputBlur}= this.props
        return(
            <HeaderWriper>
                <Logo/>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                        <SearchWrapper>
                            <CSSTransition 
                                    in={foused}
                                    timeout={200}
                                    classNames="slide"
                            >
                                <NavSearch
                                className={foused ? 'foused' : ''}
                                onFocus={() =>handleInputFocus(list)}
                                onBlur={handleInputBlur}>
                                </NavSearch>
                                </CSSTransition>
                                <i className={foused ? 'foused iconfont zoom' : 'iconfont zoom'}>&#xe60b; </i>
                                {this.getListArea(foused)}
                        </SearchWrapper>
                    <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                </Nav>
                <Addition>
                    <Button className="writting">
                    <span className="iconfont">&#xe67e;</span>
                        写文章
                        </Button>
                    <Button className="red">注册</Button>
                </Addition>
            </HeaderWriper>
        )
    }

}







