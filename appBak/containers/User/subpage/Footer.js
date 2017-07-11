import React from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userinfoActions from '../../../actions/userinfo.js'


class Footer extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        {this.props.userinfo.userid}

      </div>
    )
  }

  componentDidMount(){
    console.log("Footer:"+new Date().getTime())
    this.props.userinfoActions.login({
      userid:'footer',
      city:'beijing'
    })
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
)(Footer);
