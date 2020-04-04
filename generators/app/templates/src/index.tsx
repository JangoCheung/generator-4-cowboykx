import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { Button } from 'antd';

import './index.less';

class App extends Component {
  state = {
  }

  constructor(props) {
    super(props);
  }

  // componentWillMount(){}

  // componentDidMount(){}

  // componentWillReceiveProps(nextProps){}

  // shouldComponentUpdate(nextProps, nextState){}

  // componentWillUpdate(nextProps, nextState){}

  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <Button type="primary">Hello React</Button>
      </div>
    )
  }

  // componentWillUnmount(){}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);