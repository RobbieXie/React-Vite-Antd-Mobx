import React from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'mobx-react';
import App from '@page/App/App'
import RootStore from '@store/RootStore';
import './index.css'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider rootStore={RootStore}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
