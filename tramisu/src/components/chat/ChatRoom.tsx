import React, { useEffect, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { fireStore } from "views/app/App";
import firebase from "firebase/app";
import ChatMessage from "components/chat/ChatMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import useCheckMobileScreen from "tools/useCheckMobileScreen";

type ChatRoomProps = {
  userId: string;
  roomKey: string;
};
const ChatRoom: React.FC<ChatRoomProps> = ({ userId, roomKey }: ChatRoomProps) => {
  const dummy = useRef<HTMLSpanElement>(null);
  const messagesRef = fireStore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [ messages ] = useCollectionData(query, { idField: "id" });
  const [ formValue, setFormValue ] = useState("");
  const isMobile = useCheckMobileScreen();

  const sendMessage = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await messagesRef.add({
      roomKey: roomKey,
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userId: userId,
    });

    setFormValue("");
  };

  /**
   * Scroll on new message
   */
  useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  }, [ messages ]);

  return (
    <div className="box">
      <div style={{ width: isMobile ? "100%" : 310, height: 280, overflowY: "scroll" }}>
        {messages && messages.filter(x => x.roomKey === roomKey).map(msg =>
          <ChatMessage key={msg.id} isFromUser={msg.userId === userId} text={msg.text} />)}
        <span ref={dummy}></span>
      </div>
      <form onSubmit={sendMessage}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input" type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)}
              placeholder="say something nice" />
          </div>
          <div className="control">
            <button className="button is-info is-light is-fullwidth" type="submit" disabled={!formValue}>
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            </button>
          </div>
        </div>
      </form>
    </div>);
};

export default ChatRoom;
