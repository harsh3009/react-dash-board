import React from 'react';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';
import Photos from './Photos';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

export default function Display() {
  return (
    <>
      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/photos" component={Photos} />
      </Switch>
    </>
  );
}
