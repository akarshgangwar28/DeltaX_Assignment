
import './App.css';
import Nav from "../src/components/Nav"
import SongHeading from './components/SongHeading';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    
   

    <Switch>
      <Route exact path="/">
        <Nav />
        <SongHeading />
       
      </Route>
     
     
    </Switch>


  

    
  );
}

export default App;
