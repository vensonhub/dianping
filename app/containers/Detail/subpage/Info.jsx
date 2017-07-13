import React from 'react';
import './style.less';
class Info extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    return (
      <div>
        info{this.props.id}
      </div>
    )
  }
}
export default Info;
