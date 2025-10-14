import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Button,
  ButtonText,
} from "../components/Container";

const HomeScreen: React.FC = () => {
  const handlePress = () => {
    console.log("버튼이 클릭되었습니다!");
  };

  return (
    <Container>
      <Title>장사친구에 오신 것을 환영합니다</Title>
      <Subtitle></Subtitle>
      <Button onPress={handlePress}>
        <ButtonText>시작하기</ButtonText>
      </Button>
    </Container>
  );
};

export default HomeScreen;
