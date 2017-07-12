import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/ad';
import List from './subpage/list';

class Home extends React.Component{
  constructor(props,context){
    super(props,context);
  }
  render(){
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName}/>
        <Category/>
        <div style={{height:'15px'}}></div>
        <Ad/>
        <div style={{height:'15px'}}></div>
        <List cityName={this.props.userinfo.cityName}/>
      </div>
    )
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
)(Home);
