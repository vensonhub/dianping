import React from 'react';
import Item from './Item';
import './style.less';

class OrderList extends React.Component {
  constructor(props,context) {
    super(props,context);

  }
  render(){
    const data = this.props.data;
    const submitComment = this.props.submitComment;
    return (
      <div>
          {
            data.map((item,index)=>{
              return (
                <Item key={index} data={item} submitComment={submitComment}/>
              )
            })
          }
      </div>
    )
  }
  componentDidMount() {

  }

}

export default OrderList;
