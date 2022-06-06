import { AiOutlineStar } from "react-icons/ai";
function Song(props) {
  return (
    <div className="topsongs">
      <div id="songsname">
        <div >
          <img class="Song-image" src={props.Artwork}></img>
        </div>
        <div id="song-control">{props.song}</div>
        <div id="song-control">{props.dateOfRelease}</div>
        <div id="song-control">{props.Artist}</div>
        <div class="starstyle">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      </div>
    </div>
  );
}
export default Song;