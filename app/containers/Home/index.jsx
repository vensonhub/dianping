import React from 'react';
import {connect} from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';

class Home extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName}/>
        <Category/>
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
