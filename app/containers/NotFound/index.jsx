import React from 'react'
import {hashHistory} from 'react-router'

class NotFound extends React.Component {
    render() {
      setTimeout(()=>{
        hashHistory.goBack();
      },3000)
        return (
          <div>

            <p>404 NotFound <span ref="timeout"></span></p>
          </div>
        )
    }
}

export default NotFound
