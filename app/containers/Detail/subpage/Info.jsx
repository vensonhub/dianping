import React from 'react';
import {getInfoData} from '../../../fetch/detail/detail';
import DetailInfo from '../../../components/DetailInfo';
import './style.less';
class Info extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      info:false
    }
  }
  render(){
    return (
      <div>
          {
              this.state.info
              ? <DetailInfo data={this.state.info}/>
              : ''
          }
      </div>
    )
  }
  componentDidMount(){
    let id = this.props.id;
    let result = getInfoData(id);
    result.then(res=>{
      return res.json();
    }).then(json=>{
      this.setState({
        info:json
      })
    }).catch(ex=>{
      if(__DEV__){
        console.error('详情页，获取商户信息出错')
      }
    })
  }
}
export default Info;
