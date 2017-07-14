import React from 'react';
import {Link,hashHistory} from 'react-router';
import SearchInput from '../SearchInput';
import './style.less';
class HomeHeader extends React.Component{
  constructor(props,context){
    super(props,context);

  }
  render(){
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <Link to="/login">
            <i className="icon-user icon-user-size"></i>
          </Link>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
              <i className="icon-search"></i>
              <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
  enterHandle(value){
    hashHistory.push('/search/all/'+encodeURIComponent(value));
  }

}
export default HomeHeader;
