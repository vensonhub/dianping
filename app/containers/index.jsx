import React from 'react';
import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFormOtherFile from '../actions/userinfo';

class App extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      initDone:false
    }
  }
  render(){
    return (
      <div>
        {
          this.state.initDone?
          this.props.children:
          <div>正在加载...</div>
        }
      </div>
    )
  }

  componentDidMount(){

    let cityName = LocalStore.getItem(CITYNAME);
    if(cityName == null){
      cityName = '北京';
    }
    // console.log(cityName);
    //将城市信息存储到Redux中
    this.props.userInfoActions.update({
      cityName:cityName
    });

    this.setState({
      initDone:true
    })

  }
}

function mapStateToProps(state){
  return {

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
)(App);
