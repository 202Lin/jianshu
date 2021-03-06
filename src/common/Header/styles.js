import styled from 'styled-components';
import logoPic from '../../static/Logo.png'

export const HeaderWriper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;
// 通过attrs({可以给组件标签写属性})
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display: block;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size:contain;
    // 等比缩放时期高度和宽度完全适应内容区域
`;
export const Nav = styled.div`
  width:960px;
  height: 100%;
  padding-right:70px;
  box-sizing:border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height:56px;
  padding: 0 15px;
  font-size:17px;
  color: #333;
  //NavItem可以使用多次
//   这个就表示给类是right的NavItem写样式
  &.left {
      float:left;
  }
  &.right {
      float:right;
      color:#969696;
  }
  &.active {
      background:#ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position:relative;
  z-index:1;
 // background:#eee;

  float:left;
  .slide-enter{
    transition:all .2s ease-out;
  }
  .slide-enter-active{
    width:240px;
  }
  .slide-exit-active{
    width:160px;
  }
//   这个表示给这个组件里面的类是iconfont的标签写样式
  .zoom {
      position: absolute;
      right:5px;
      bottom:4px;
      width:30px;
      line-height:30px;
      border-radius:15px;
      background:#eee;
      text-align:center;
      &.foused{
        background:#777;
        color:#fff;
      }
  }
`;

export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  width:240px;
  margin-top:10px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  background:#fff;
  
`;
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;

`;
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin{//给换一换的spin写动画效果
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;
    transform-origin:center center
  }
`;
export const SearchInfoList = styled.div`
  overflow:hidden;
`;
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:15px;
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
  width:160px;
  height:38px;
  margin-top:9px;
  padding: 0 30px 0 20px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  &::placeholder {
    //   表示这个组件下的placeholder属性，在这里写他的样式；
      color: #999;
  }
  &.foused{
    width:240px;
  }
`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;
export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding: 0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg {
      color:#ec6149;
  }
  &.writting{
      color:#fff;
      background:#ec6149;
  }
`