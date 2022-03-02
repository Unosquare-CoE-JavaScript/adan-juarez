import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/blogs/new" component={BlogNew} />
              <Route exact path="/blogs/:_id" component={BlogShow} />
              <Route path="/blogs" component={Dashboard} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
  )
}

export default Routes