import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HeaderBar from "./Header/HeaderBar";
import CreateForm from "./Component/CreateForm";

function App() {
  return (
    <CreateForm />
    // <BrowserRouter>
    // <Switch>
    //   <Route path="/Createform">
    //     <Createform />
    //   </Route>
    //   <Route path="/" >
    //   <HeaderBar />
    //   </Route>
    // </Switch>
    // </BrowserRouter>
  
  
  );
}

export default App;
