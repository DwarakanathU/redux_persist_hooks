import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import "./App.css";
import { PrivateRoutes, PublicRoutes } from "./routes/routesCheck";
import { HOME_PATH, LOGIN_PATH } from "./routes/routesPath";
const App = ({ user }) => {
  console.log(user);
  return (
    <Switch>
      <PublicRoutes
        path={LOGIN_PATH}
        exact
        component={Login}
        loggedInPath={HOME_PATH}
      />
      <PrivateRoutes path={HOME_PATH} exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
