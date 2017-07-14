import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as storeActionsFromFile from '../../../actions/store';
import BuyAndStore from '../../../components/BuyAndStore';
import './style.less';
class Buy extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      isStore:false
    }
  }
  render(){
    return (
      <div>
        <BuyAndStore isStore={this.state.isStore}
         buyHandle={this.buyHandle.bind(this)}
         storeHandle={this.storeHandle.bind(this)}/>
      </div>
    )
  }

  componentDidMount(){
    this.checkStoreState();
  }

  buyHandle(){
    //检查登陆
    const loginFlag = this.loginCheck();
    if(!loginFlag){
      return ;
    }
    //购买流程

    //跳转到用户主页
    hashHistory.push('/user');
  }
  //检查商户是否被收藏
  checkStoreState(){
    const id = this.props.id;
    const store = this.props.store;

    store.some(item=>{
      if(item.id === id){
         // 已经被收藏
        this.setState({
          isStore:true
        })
        // 跳出循环
       return true;
      }
    })
  }
  storeHandle(){
    //检查登陆
    const loginFlag = this.loginCheck();
    if(!loginFlag){
      return ;
    }

    const id=this.props.id;
    const storeActions = this.props.storeActions;
    if(this.state.isStore){
      //当前商户已经被收藏，点击时取消收藏
      storeActions.rm({id:id})
    }else{
      //当前商户尚未被收藏，点击时即要执行收藏
      storeActions.add({id:id})
    }

    //修改状态
    this.setState({
      isStore:!this.state.isStore
    })
  }
  loginCheck(){
    const id = this.props.id;
    const userinfo = this.props.userinfo;
    if(!userinfo.username){
      //跳转到登陆页面
      hashHistory.push('/login/'+encodeURIComponent('/detail/'+id));
      return false;
    }
    return true;
  }
}

function mapStateToProps(state){
  return {
    userinfo:state.userinfo,
    store:state.store
  }
}

function mapDispatchToProps(dispatch){
  return {
    storeActions:bindActionCreators(storeActionsFromFile,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy);
