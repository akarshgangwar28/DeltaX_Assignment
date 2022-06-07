import "./App.css";
import Nav from "../src/components/Nav";
import SongHeading from "./components/SongHeading";
import { Route, Switch } from "react-router-dom";
import Song from "./components/Song";
import imgg_2 from "./images/imgg_2.jpeg";
import img_1 from "./images/img_1.jpeg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

import SubHeading1 from "./components/SubHeading1";
import Singer from "./components/Singer";
import AddNewSong from "./AddnewSongForm";

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
          <Song
            Artwork={img3}
            song="Lily"
            dateOfRelease="December 14,2018"
            Artist="Allen walker"
          />
          <Song
            Artwork={img4}
            song="Lily"
            dateOfRelease="December 14,2018"
            Artist="Allen walker"
          />
        </div>
        <div id="artistHeading">Top 10 Artists</div>

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
          <Singer
            name="Shreya ghoshal"
            dob="12 March 1984"
            songslist="Pyarr krte ho n"
          />
          
          <Singer
            name="K.K."
            dob="23 August 1968"
            songslist="Ankho me teri"
          />
          
        </div>
      </Route>

      <Route exact path="/AddNewSong">
        <AddNewSong />
      </Route>
    </Switch>
  );
}

export default App;
