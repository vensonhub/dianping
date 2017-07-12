import React from 'react';
import {getListData} from '../../../fetch/home/home';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';
import './style.less';
class List extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      data:[],
      hasMore:false,
      isLoadingMore:false,
      page:1
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
        {
          this.state.hasMore
          ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
          :<div></div>
        }
      </div>
    )
  }

  componentDidMount(){
    this.loadFirstPageData();
  }
  //点击加载更多会更新
  loadMoreData(){
    //记录状态
    this.setState({
      isLoadingMore:true
    })
    const cityName = this.props.cityName;
    const page = this.state.page; // 下一页页码
    const result = getListData(cityName,page);

    this.resultHandle(result);

    //增加page的计数
    this.setState({
      page:page+1,
      isLoadingMore:false
    })

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
        data:this.state.data.concat(data)
      })
    })
  }
}
export default List;
