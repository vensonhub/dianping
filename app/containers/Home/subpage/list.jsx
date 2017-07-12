import React from 'react';
import {getListData} from '../../../fetch/home/home';
import ListComponent from '../../../components/List';
import './style.less';
class List extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      data:[],
      hasMore:false
    }
  }
  render(){
    return (
      <div id="home-list">
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.data.length
          ?<ListComponent data={this.state.data}/>
          :<div>加载中...</div>
        }

      </div>
    )
  }

  componentDidMount(){
    this.loadFirstPageData();
  }
  //第一次加载数据
  loadFirstPageData(){
    const cityName = this.props.cityName;
    const result = getListData(cityName,0);
    this.resultHandle(result);
  }
  //数据处理
  resultHandle(result){
    result.then(res=>{
      return res.json();
    }).then(json=>{
      console.log(json);
      const hasMore = json.hasMore;
      const data = json.data;
      //存储
      this.setState({
        hasMore:hasMore,
        data:data
      })
    })
  }
}
export default List;
