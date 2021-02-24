package com.macaroni.configuration;

import com.macaroni.configuration.handlers.SocketTextHandler;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

/**
 * The implementation of the signaling server is simple — we'll create an
 * endpoint that a client application can use to register as a WebSocket
 * connection.
 */
@Configuration
@EnableWebSocket
public class WebSocketConfiguration implements WebSocketConfigurer {

  @Override
  public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
    registry.addHandler(new SocketTextHandler(), "/socket").setAllowedOrigins("*");
  }
}