import React  from 'react'
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom"
import { Layout } from 'antd';
const { Content} = Layout;
import MyBreadcrumb from '@page/MyBreadcrumb/MyBreadcrumb';
import MyHeader from '@page/MyHeader/MyHeader';
import routes from '@/router';
import './App.css'


function App() {

  return (
    <Router>
      <Layout>
        <MyHeader />
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <MyBreadcrumb />
            <Content
              className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 580 }}
            >
              <Switch>
                <Redirect exact from="/" to="/index" />
                {
                  routes.map(route => <Route exact key={route.path} path={route.path}>
                    <route.component />
                  </Route>)
                }
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )

}

export default App
