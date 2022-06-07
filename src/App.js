
import './App.css';
import Nav from "../src/components/Nav"
import SongHeading from './components/SongHeading';
import { Route, Switch } from "react-router-dom";
import Song from './components/Song';
import imgg_2 from "./images/imgg_2.jpeg";
import img_1 from "./images/img_1.jpeg";

import SubHeading1 from './components/SubHeading1';
import Singer from "./components/Singer";


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
            song="kun faya"
            dateOfRelease="August 23,2019"
            Artist="Javed Ali"
          />
        </div>
        <div id="artistHeading">
                Top 10 Artists
            </div>


            <div id="artist-Division">
              
            <div className="subhead">
        <div id="artist-caption">Artists</div>
        <div id="artist-caption">Date Of Birth</div>
        <div id="artist-caption">Song</div>
      </div>
          
        <Singer
         name="Kumar Sanu"
         dob="25 April 1987"
         songslist="Pachtaoge,Humdard,Naina"
        
        />
        <Singer
                    name="Udit Narayan"
                    dob="1 December 1955"
                    songslist="Maahi Ve,Main Yahaan hoon Yahan,Tip Tip"
                    />

          </div>
       
      </Route>
     
     
    </Switch>


  

    
  );
}

export default App;
