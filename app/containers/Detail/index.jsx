import React from 'react';
import Header from '../../components/Header';
import Info from './subpage/info';
import Buy from './subpage/buy';
import Comment from './subpage/comment'
import './style.less';
class Detail extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    const id= this.props.params.id;
    return (
      <div>
        <Header title="商户详情"/>
        <Info id={id}/>
        <Buy id={id}/>
        <Comment id={id}/>
      </div>
    )
  }
}
export default Detail;
