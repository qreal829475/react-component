import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './App'
import Index from '../demo/Index'
import Next from '../demo/Next'
import Login from '../login/Login'
import Register from '../login/Register'
import Grid from '../grid/Index'
import Password from '../login/Password'
import ShowIcon from '../show/showIcon'
import ShowImg from '../show/showImg'
import ShowCard from '../show/showCard'
import ShowList from '../show/showList'
import ShowNotification from '../show/showNotification'

const rootRoute = (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="/next" component={Next}/>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/grid" component={Grid} />
    <Route path='/password' component={Password} />
    <Route path='/demo_icon' component={ShowIcon} />
    <Route path='/demo_img' component={ShowImg} />
    <Route path='/demo_card' component={ShowCard} />
    <Route path='/demo_list' component={ShowList} />
    <Route path='/demo_notification' component={ShowNotification} />
  </Route>
)

export default rootRoute
