import React from 'react';
import './style.less';

class HomeAd extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    const data = this.props.data;
    return (
      <div>
        <h2>超值特惠</h2>
        <div>
          {data.map((item,index)=>{
            return (
              <div key={index}>
                <a href={item.link}>
                  <img src={item.img} style={{width:'100px'}} alt=""/>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default HomeAd;
