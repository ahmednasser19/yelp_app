import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantdetailPage from "./routes/RestaurantDetailPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants/:id/update" component={UpdatePage} />
        <Route exact path="/restaurants/:id" component={RestaurantdetailPage} />
      </Switch>
    </Router>
  );
};
export default App;
