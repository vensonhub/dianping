import React from 'react'
import Header from './subpage/Header.js'
import Footer from './subpage/Footer.js'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userinfoActions from '../../actions/userinfo.js'



class User extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      isshow:false
    }
  }
  render(){
    return (
      <div>
        <Header/>
        <hr/>
        <Footer/>
        <hr/>
        <button onClick={this.changeUserInfo.bind(this)}>修改</button>
      </div>
    )
  }

  changeUserInfo(){
    this.setState({
      isshow:!this.state.isshow
    })
    if(this.state.isshow){
      this.props.userinfoActions.login({
        userid:'header',
        city:'beijing'
      })
    }else{
      this.props.userinfoActions.login({
        userid:'footer',
        city:'beijing'
      })
    }

  }
  componentDidMount(){

  }
}


function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    userinfoActions:bindActionCreators(userinfoActions,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
