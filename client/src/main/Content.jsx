import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import EmptyPage from '../components/default-pages/empty-page/empty-page';
import Products from '../components/default-pages/products/products';
import Four0Four from '../components/default-pages/four0four/four0four';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={EmptyPage}/>
          <Route path='/items' component={Products}/>
          <Route path='*' component={Four0Four}/>
        </Switch>
      </main>
    );
  }
}

export default Content;