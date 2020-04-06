import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, observer, inject } from "mobx-react";
import { configure } from "mobx";
import { Button } from 'antd';
import hotkeys from 'hotkeys-js';

import stores from "./store/";

import './index.less';

configure({ enforceActions: "observed" });

@inject('store')
@observer
class App extends Component<any, any> {
  constructor(options) {
    super(options)
  }

  componentDidMount() {
  }

  onClick = () => {
    this.props.store.add('Hello');
  }

  render() {
    return (
      <div className="main">
        <div>{this.props.store.name}</div>
        <Button onClick={this.onClick}>Click Me!</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('app')
);