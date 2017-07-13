import React from 'react';
import SearchInput from '../../components/SearchInput';
import { hashHistory } from 'react-router';
import './style.less';
class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
              <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                <i className="icon-chevron-left"></i>
              </span>
              <div className="input-container">
                <i className="icon-search"></i>
                <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
              </div>
            </div>
        )
    }
    componentDidMount() {

    }
    clickHandle() {
        hashHistory.push('/');
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }

}

export default SearchHeader
