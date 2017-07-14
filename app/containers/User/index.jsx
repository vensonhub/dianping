import React from 'react';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router'
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import OrderList from './subpage/OrderList';
import './style.less';
class User extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    const userinfo = this.props.userinfo;
    return (
      <div>
        <Header title="用户中心" backRouter="/"/>
        <UserInfo username={userinfo.username} city={userinfo.cityName}/>
        <OrderList username={userinfo.username}/>
      </div>
    )
  }
  componentDidMount() {
      // 如果未登录，跳转到登录页面
      if (!this.props.userinfo.username) {
          hashHistory.push('/login')
      }
  }
}

function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch){
  return {

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
