import React from 'react';
import {getOrderListData} from '../../../fetch/user/orderlist';
import './style.less';

class OrderList extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      data:[]
    }
  }
  render(){
    return (
      <div>
          OrderList
      </div>
    )
  }
  componentDidMount() {
    const username = this.props.username;
    if(username){
      this.loadOrderList(username);
    }
  }
  loadOrderList(username){
    const result = getOrderListData(username);
    result.then(res=>{
      return res.json();
    }).then(json=>{
      console.log(json);
    })
  }
}

export default OrderList;
