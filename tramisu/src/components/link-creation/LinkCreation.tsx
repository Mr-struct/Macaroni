import { faKey, faLink, faPlusSquare, faShare, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, EventHandler, MouseEventHandler, useState } from "react";
import ReactPlayer from "react-player";
import useCheckMobileScreen from "tools/useCheckMobileScreen";
import { fireStore } from "views/app/App";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

const LinkCreation = () => {

  const [ video, setVideo ] = useState("");
  const [ roomKey, setRoomKey ] = useState("");
  const [ showModal, setShowModal ] = useState(false);
  const [ showForm, setShowForm ] = useState(false);
  const isMobileScreen = useCheckMobileScreen();
  const videosRef = fireStore.collection("videos");
  const history = useHistory();
  const onVideoInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setVideo(target.value);

  const onRoomKeyInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setRoomKey(target.value);

  const creatLink = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (video.length <= 0 || roomKey.length <= 0) {
      setShowModal(true);
      return;
    }
    const videoId = new Date().getTime().toString();
    const roomKeyData = roomKey + "_" + videoId;
    console.log(roomKey);
    await videosRef.doc(videoId).set({
      id: videoId,
      roomkey: roomKeyData,
      video: video,
      isPlaying: false,
      playedSeconds: 0.0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setShowForm(showForm => !showForm);
    history.push("/room/" + roomKeyData);
  };
  return (
    <>
      {showModal ?
        <article className="message is-warning">
          <div className="message-header">
            <p>Error somme required field are messing</p>
            <button className="delete" aria-label="delete" onClick={() => setShowModal(showModal => !showModal)}></button>
          </div>
          <div className="message-body">
            Please fill all the field
          </div>
        </article>
        :
        !showForm ?
          <div className="control">
            <button className="button is-success is-fullwidth" onClick={() => setShowForm(true)}>
              <FontAwesomeIcon icon={faPlusSquare} size="lg" />
              <p style={{ marginLeft: 10 }} className="is-3">Add a video/sound to shear</p>
            </button>
          </div>
          :
          <div className="columns">
            <div className="column is-half" style={{ marginTop: isMobileScreen ? 0 : 100 }}>
              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input" type="text"
                    placeholder="video/sound link"
                    onChange={onVideoInputChange}
                    value={video}
                    required />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control has-icons-left has-icons-right mt-1">
                  <input
                    className="input" type="text"
                    placeholder="room key"
                    onChange={onRoomKeyInputChange}
                    value={roomKey}
                    required />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
              </div>
              <div>
                <button className="button is-primary is-fullwidth" onClick={creatLink}>
                  <FontAwesomeIcon icon={faShare} size="lg" />
          Create
				</button>
              </div>
              <br />
              <div>
                <button className="button is-danger is-light is-fullwidth" onClick={() => setShowForm(false)}>
                  <FontAwesomeIcon icon={faWindowClose} size="lg" />
          Cancle
				</button>
              </div>
            </div>
            <div className="column  is-half">
              <ReactPlayer url={video || "https://vimeo.com/163721649"} width='100%' />
            </div>
          </div>
      }
    </>
  );
};
export default LinkCreation;