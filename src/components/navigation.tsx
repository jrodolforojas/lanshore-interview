import { Route, Switch } from "wouter"
import Home from "../pages/home"
import SubmitListing from "../pages/submit-listing"
import PublishListing from "../pages/publish-listing"

export default function Navigation() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/submitListings" component={SubmitListing} />
      <Route path="/publishListings" component={PublishListing} />
      <Route>404: No such page!</Route>
    </Switch>
  )
}