import Header from "components/header/Header";
import ContainerLogin from "containers/login/ContainerLogin";
import ContainerRegister from "containers/register/ContainerRegister";

// router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Header} />
          <Route exact path="/home" component={Header} />
        </Switch>
      </Router>
      {/* <ContainerLogin /> */}
      {/* <ContainerRegister /> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
