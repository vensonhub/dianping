import React from 'react'
import { Router, Route,browserHistory, hashHistory, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import NotFound from '../containers/404'


class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap
