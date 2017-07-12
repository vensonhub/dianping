import React from 'react';

import './style.less';
class LoadMore extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    return (
      <div className="load-more" ref="wrapper">
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

  //下拉加载更多
  componentDidMount(){
    const loadMoreFn = this.props.loadMoreFn;
    const wrapper = this.refs.wrapper;
    let timeout;
    function callback(){
      const top = wrapper.getBoundingClientRect().top;
      const windowHeight = window.screen.height;
      if(top && top < windowHeight){
        loadMoreFn();
      }
    }
    window.addEventListener('scroll',function(){
      if(this.props.isLoadingMore){//如果正在加载中忽略
        return
      }
      if(timeout){
        clearTimeout(timeout);
      }
      timeout = setTimeout(callback,50)
    }.bind(this),false)
  }
}
export default LoadMore;
