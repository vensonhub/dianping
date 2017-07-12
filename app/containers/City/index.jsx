import React from 'react';
import {hashHistory} from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoActionsFormOtherFile from '../../actions/userinfo';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

import LocalStore from '../../util/localStore';
import {CITYNAME} from '../../config/localStoreKey';

class City extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    return (
      <div>
        <Header title="选择城市"/>
        <CurrentCity cityName={this.props.userinfo.cityName}/>
        <CityList changeFn={this.changeCity.bind(this)}/>
      </div>
    )
  }

  changeCity(newCity){
    if(newCity == null){
      return ;
    }
    //修改redux
    const userinfo = this.props.userinfo;
    userinfo.cityName = newCity;
    this.props.userInfoActions.update(userinfo);
    //修改localStorage
    LocalStore.setItem(CITYNAME,newCity);
    //跳转到首页
    hashHistory.push('/');
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
)(City);
