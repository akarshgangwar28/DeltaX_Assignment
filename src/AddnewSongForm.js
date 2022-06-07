import { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import { Link } from "react-router-dom";
import Popup from "./components/popup"


function AddNewSong() {

    const [isOpen, setIsOpen] = useState(false);

  const openPop = (e) => {
    console.log("clicked")
    e.preventDefault();
    setIsOpen(!isOpen);
  };



  const[artist,setArtist] = useState([
    "Arijit Singh",
    "Alka Yagnik",
    "Udit Narayan",
    "Jubin Nautiyal",
    "Pawandeep Rajan",
  ])
  return (
    <>
    {isOpen && (
            <Popup
              content={
                <>
                  <form class="popup-form-control">
                    <h1 style={{ marginLeft: "10px" }}>Add Artist</h1>
                    <div className="input-controls">
                      <div className="input-names">
                        <div className="name">Artist Name</div>
                        <div className="name">Date of Birth</div>
                        <div className="name">Bio</div>
                      </div>
                      <div className="input-div">
                        <div className="input">
                          <input type="text"></input>
                        </div>
                        <div className="input">
                          <input type="date"></input>
                        </div>
                        <div className="input">
                          <textarea></textarea>
                        </div>
                        <div className="input">
                          <button onClick={openPop}>Cancel</button>
                          <button>Done</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              }
              handleClose={openPop}
            />
          )}



    <form className="form-control">
      <h1 style={{ marginLeft: "10px" }}>Adding a new Song</h1>
      <div className="input-controls">
        <div className="input-names">
          <div className="name">Song Name</div>
          <div className="name">Date Released</div>
          <div className="name">Artwork</div>
          <div className="name">Artist</div>
        </div>
        <div className="input-div">
          <div className="input">
            <input type="text"></input>
          </div>
          <div className="input">
            <input type="text"></input>
          </div>
          <div className="input">
            <input type="file"></input>
          </div>
          <div className="input">
            <Multiselect
              isObject={false}
              onRemove={(event)=>{console.log(event)}}
              onSelect={(event)=>{console.log(event)}}
              options={artist}
              showCheckbox
            />

            <button onClick={openPop}> + Add Artist</button>
          </div>
          <div className="input-btn">
            <button type="submit">Save</button>
            <div className="cancel-btn">
              <Link to="/" id="cancel-btn-color">Cancel</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}
export default AddNewSong;



