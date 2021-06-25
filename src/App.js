import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HeaderBar from "./Header/HeaderBar";
import CreateForm from "./Component/CreateForm";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/Createform">
        <CreateForm />
      </Route>
      <Route path="/" >
      <HeaderBar />
      </Route>
    </Switch>
    </BrowserRouter>
  
  
  );
}

export default App;
