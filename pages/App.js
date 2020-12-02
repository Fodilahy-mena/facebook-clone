import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Header from '../components/Header'
import Add from './Add'
import Feed from './Feed'
import UserName from './UserName'

function App() {
    return (
        <>
           <Header/> 
           <Switch>
				<Route exact path="/">
                    <Feed/>
				</Route>

                <Route path="/add">
					<Add/>
				</Route>

                <Route path="/userName">
					<UserName/>
				</Route>
            </Switch>
        </>
    )
}

export default App
