import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import LinkCreation from "components/link-creation/LinkCreation";

const Home = () => {

  const [ roomKeyInput, setRoomKeyInput ] = useState("");
  const history = useHistory();

  const inputChanges = ({ target }: React.ChangeEvent<HTMLInputElement>) => setRoomKeyInput(target.value);

  const goToRoom = () => history.push("/room/" + roomKeyInput);

  return (
    <div className="section" style={{ marginBottom: 10 }}>
      <div className="column is-half-desktop is-offset-3-desktop">
        <nav className="level is-half-desktop">
          <div className="level-item has-text-centered">
            <div>
              <figure className="image is-64x64">
                <img src={`${process.env.PUBLIC_URL}/logo192.png`} />
              </figure>
            </div>
            <p className="title">Macaroni</p>
          </div>
        </nav>
        <form className="box">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" type="text" placeholder="room key hier" onChange={inputChanges} value={roomKeyInput} />
            </div>
            <div className="control">
              <button className="button is-info is-light is-fullwidth" onClick={goToRoom}>
                <FontAwesomeIcon icon={faSignInAlt} size="lg" />
                <span style={{ marginLeft: 10 }}>Join a room</span>
              </button>
            </div>
          </div>
          <div className="field">
            <nav className="level">
              <div className="level-item">
                <p className="title is-4">Or</p>
              </div>
            </nav>
            <LinkCreation />
          </div>
        </form>
      </div>
    </div>);
};
export default Home;