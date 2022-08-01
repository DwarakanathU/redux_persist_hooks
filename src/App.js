import { Route, Switch } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </>
  );
};

export default App;
