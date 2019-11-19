import React from "react"
import Categories from "./CategoryList"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Posts from "./PostList"
import Post from "./ViewPost"
import CreatePost from "./PostForm"
import "../styles/style.css"

function App() {
  return (
    <Router>
      <div className="maincontainer">
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route exact path="/:slug" component={Posts} />
          <Route exact path="/:slug/post" component={CreatePost} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
