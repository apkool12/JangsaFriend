import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const maxBubbleWidth = screenWidth * 0.75;

const MessageBubble = styled.View<{ isUser: boolean }>`
  background-color: ${(props: { isUser: boolean }) =>
    props.isUser ? "#FED44E" : "#FFFFFF"};
  padding: 12px 16px;
  border-radius: ${(props: { isUser: boolean }) =>
    props.isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px"};
  margin-bottom: 8px;
  margin-left: ${(props: { isUser: boolean }) =>
    props.isUser ? "20px" : "0px"};
  margin-right: ${(props: { isUser: boolean }) =>
    props.isUser ? "0px" : "20px"};
  align-self: ${(props: { isUser: boolean }) =>
    props.isUser ? "flex-end" : "flex-start"};
  max-width: ${maxBubbleWidth}px;
  min-width: 100px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 2;
`;

const MessageText = styled.Text`
  font-size: 15px;
  color: #000000;
  line-height: 22px;
  text-align: left;
  flex-shrink: 1;
`;

interface ChatMessageProps {
  text: string;
  isUser: boolean;
}

export const ChatMessage = ({ text, isUser }: ChatMessageProps) => {
  return (
    <MessageBubble isUser={isUser}>
      <MessageText isUser={isUser}>{text}</MessageText>
    </MessageBubble>
  );
};
