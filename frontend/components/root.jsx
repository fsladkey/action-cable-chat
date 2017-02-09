import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './app'
import RoomIndex from './room_index'
import RoomShow from './room_show'

export default function Root() {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ RoomIndex } />
        <Route path="rooms/:id" component={ RoomShow } />
      </Route>
    </Router>
  )
}
