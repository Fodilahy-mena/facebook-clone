import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Header from '../components/Header'
import AddPost from './AddPost'
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

                <Route path="/addPost">
					<AddPost/>
				</Route>

                <Route path="/userName">
					<UserName/>
				</Route>
            </Switch>
        </>
    )
}

export default App
