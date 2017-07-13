import React from 'react';
import './style.less';
class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          value:''
        }
    }
    render() {
        return (
            <div id="search-input">
                <input type="text" className="search-input-text"
                  placeholder="请输入关键字" value={this.state.value}
                  onChange={this.changeHandle.bind(this)}
                  onKeyUp = {this.keyUpHandle.bind(this)}/>
            </div>
        )
    }
    componentDidMount() {
      this.setState({
        value:this.props.value || ''
      })
    }
    changeHandle(e){
      let val = e.target.value;
      this.setState({
        value:val
      })
    }
    keyUpHandle(e){
      if(e.keyCode !== 13){
        return ;
      }
      // console.log(this.state.value);
      this.props.enterHandle(this.state.value);
    }
}

export default SearchInput
