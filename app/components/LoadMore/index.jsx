import React from 'react';

import './style.less';
class LoadMore extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    return (
      <div className="load-more">
        {
          this.props.isLoadingMore
          ?<span>加载中...</span>
          :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
  loadMoreHandle(){
    //执行传递过来的loadMoreFn
    this.props.loadMoreFn();
  }

  
}
export default LoadMore;
