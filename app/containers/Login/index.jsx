import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFormOtherFile from '../../actions/userinfo';
import {hashHistory} from 'react-router';
import Header from '../../components/Header';
import LoginComponent from '../../components/Login';
import './style.less';
class Login extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      checking:true
    }
  }
  render(){
    return (
      <div>
        <Header title="登陆"/>
        {
          this.state.checking
          ? <div>login</div>
          : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
        }
      </div>
    )
  }

  componentDidMount(){
    //判断是否已登陆
    this.doCheck();
  }

  doCheck(){
    const userinfo = this.props.userinfo;
    if(userinfo.username){
      //登陆
      this.goUserPage();
    }else{
      //未登录
      this.setState({
        checking:false
      })
    }
  }

  loginHandle(username){
    //保存用户信息
    const actions = this.props.userInfoActions;
    let userinfo = this.props.userinfo;
    userinfo.username = username;
    actions.update(userinfo);

    //跳转
    const params = this.props.params;
    const router = params.router;

    if(router){
      //跳转到指定的页面
      hashHistory.push(router);
    }else{
      //跳转到默认页面，即用户中心页
      this.goUserPage();
    }
  }

  goUserPage(){
    hashHistory.push('/user');
  }
}

function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch){
  return {
    userInfoActions:bindActionCreators(userInfoActionsFormOtherFile,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
