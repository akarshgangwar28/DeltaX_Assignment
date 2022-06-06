
import './App.css';
import Nav from "../src/components/Nav"
import SongHeading from './components/SongHeading';
import { Route, Switch } from "react-router-dom";
import Song from './components/Song';
import imgg_2 from "./images/imgg_2.jpeg";
import img_1 from "./images/img_1.jpeg";

import SubHeading1 from './components/SubHeading1';


function App() {
  return (
    
   

    <Switch>
      <Route exact path="/">
        <Nav />
        <SongHeading />
        <div id="song-Division">
          <SubHeading1 />
          <Song
            Artwork={imgg_2}
            song="Meri Mahbhoba"
            dateOfRelease="August 23,2019"
            Artist="Kumar Sanu"
          />
          <Song
            Artwork={img_1}
            song="Meri Mahbhoba"
            dateOfRelease="August 23,2019"
            Artist="Kumar Sanu"
          />
        </div>
       
      </Route>
     
     
    </Switch>


  

    
  );
}

export default App;
