import Header from "components/header/Header.jsx";
import Home from "containers/home/Home";
import ContainerLogin from "containers/login/ContainerLogin";
import ContainerRegister from "containers/register/ContainerRegister";

// router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
      {/* <ContainerLogin /> */}
      {/* <ContainerRegister /> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
