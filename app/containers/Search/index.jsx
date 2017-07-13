import React from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/list';
import './style.less';
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
      const params = this.props.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
    componentDidMount() {
        const params = this.props.params
        console.log('category param: ' + params.category)
        console.log('key param:' + params.keyword)
    }
}

export default Search
