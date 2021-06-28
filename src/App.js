import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HeaderBar from "./Header/HeaderBar";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" >
      <HeaderBar />
      </Route>
    </Switch>
    </BrowserRouter> 
  );
}

export default App;
