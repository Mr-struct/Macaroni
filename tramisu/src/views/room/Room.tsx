import { faFont, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatRoom from "components/chat/ChatRoom";
import React, { useEffect, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fireStore } from "views/app/App";

const userId = Date.now().toString();

const Room: React.FC = () => {
  const { roomkey } = useParams<{ roomkey: string; }>();
  const videosRef = fireStore.collection("videos");
  const query = videosRef.where("roomkey", "==", roomkey);
  const playerRef = useRef<ReactPlayer>(null);

  const [ videos ] = useCollectionData(query, { idFeild: "id" });
  const [ playing, setPlaying ] = useState<boolean>(false);

  useEffect(() => {
    const player = playerRef;
    if (videos && videos[ 0 ] && player) {
      if (videos[ 0 ].userActionIp !== userId && player && player && player.current) {
        player.current.seekTo(videos[ 0 ].playedSeconds);
        console.log("RECIVE DATA FROM SERVER");
      }
    }
  }, [ videos ]);

  useEffect(() => {
    const player = playerRef.current;
    if (videos && videos[ 0 ] && player && playing) {
      const { id } = videos[ 0 ];
      const local = player?.getCurrentTime();
      videosRef.doc(id).update({
        isPlaying: true,
        playedSeconds: local,
        userActionIp: userId,
      });
    }
  }, [ playing ]);

  const onPlay = () => {
    setPlaying(true);
  };

  const onPause = async () => {
    if (videos) {
      const id = videos[ 0 ].id;
      await videosRef.doc(id).update({
        isPlaying: false,
      });
      setPlaying(false);
    }
  };


  return (
    <div className="section">
      <div className="columns is-mobile is-multiline">
        <div className="column is-full">
          <p className="title is-4 tag is-link is-light"> <FontAwesomeIcon icon={faKey} /> : {videos && videos[ 0 ] && videos[ 0 ].roomkey}</p></div>
        <div className="column is-two-thirds-desktop is-full-mobile">
          {videos && videos[ 0 ] ?
            < ReactPlayer ref={playerRef} url={videos[ 0 ].video} width="100%" playing={videos[ 0 ].isPlaying}
              onReady={onPause}
              onClickPreview={onPlay}
              onPause={onPause}
              onBufferEnd={onPlay}
              onPlay={onPlay}
              controls
              playsinline
            />
            : <p>No vidos create</p>}
        </div>
        <div className="column"><ChatRoom roomKey={roomkey} userId={userId} /></div>
      </div>
    </div>);
};
export default Room;