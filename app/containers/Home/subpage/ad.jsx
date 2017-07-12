import React from 'react';
import {getAdData} from '../../../fetch/home/home';
import HomeAd from '../../../components/HomeAd';

class Ad extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      data:[]
    }
  }
  render(){
    return (
      <div>
          {
            this.state.data.length
            ?<HomeAd data={this.state.data}/>
            :<div>加载中...</div>
          }
      </div>
    )
  }

  componentDidMount(){
    const result = getAdData();
    result.then((res)=>{
      return res.json();
    }).then((json)=>{
      const data = json;
      if(data.length){
        this.setState({
          data:data
        })
      }
    }).catch(ex => {
        // 发生错误
        if (__DEV__) {
            console.error('首页广告模块获取数据报错, ', ex.message)
        }
    })
  }
}
export default Ad;
