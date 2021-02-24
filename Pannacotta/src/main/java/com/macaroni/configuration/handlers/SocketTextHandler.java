package com.macaroni.configuration.handlers;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class SocketTextHandler extends TextWebSocketHandler {

  List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

  @Override
  public void handleTextMessage(WebSocketSession session, TextMessage message)
      throws InterruptedException, IOException {
    /*
     * Here, to keep things simple, when we receive the message from a client, we
     * will send it to all other clients except to itself.
     */
    for (WebSocketSession webSocketSession : sessions) {

      if (webSocketSession.isOpen() && !session.getId().equals(webSocketSession.getId())) {
        webSocketSession.sendMessage(message);
      }
    }
  }

  @Override
  public void afterConnectionEstablished(WebSocketSession session) throws Exception {
    sessions.add(session);
  }
}