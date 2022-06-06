import React from 'react'
import { Link } from "react-router-dom";

export default function SongHeading() {
 
    return (
        <div>
          <div id="ButtonDiv">
            <div id="songHeading">Top 10 Songs</div>
            <Link id="addSongButtonText" to="/AddNewSong">
              <div id="AddSongButton">+Add Song</div>
            </Link>
          </div>
          <div></div>
        </div>
      );
  
}
