import React from 'react';
import {getOrderListData} from '../../../fetch/user/orderlist';
import OrderListComponent from '../../../components/OrderList';
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
      <div className="order-list-container">
          <h2>您的订单</h2>
          {
            this.state.data.length
            ?  <OrderListComponent data={this.state.data}/>
            : <div></div>
          }
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
      this.setState({
        data:json
      })
    })
  }
}

export default OrderList;
