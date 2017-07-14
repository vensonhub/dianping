import React from 'react'
import { Router, Route,browserHistory, hashHistory, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import User from '../containers/User'
import NotFound from '../containers/404'


class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发',document.location.hash)
    }
    render() {
        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/login(/:router)' component={Login}/>
                    <Route path='/city' component={City}/>
                    <Route path='/user' component={User}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap
