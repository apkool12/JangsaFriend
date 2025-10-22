import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

const TypingContainer = styled.View`
  background-color: #ffffff;
  border-radius: 18px 18px 18px 4px;
  padding: 12px 16px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-right: 50px;
  margin-left: 0px;
  align-self: flex-start;
  width: 60px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 2;
`;

const Dot = styled(Animated.View)`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-right: 4px;
`;

const DotsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TypingIndicator = () => {
  const dot1Anim = useRef(new Animated.Value(0.3)).current;
  const dot2Anim = useRef(new Animated.Value(0.3)).current;
  const dot3Anim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animateDot = (animValue: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animValue, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0.3,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      );
    };

    const animation = Animated.parallel([
      animateDot(dot1Anim, 0),
      animateDot(dot2Anim, 200),
      animateDot(dot3Anim, 400),
    ]);

    animation.start();

    return () => animation.stop();
  }, [dot1Anim, dot2Anim, dot3Anim]);

  return (
    <TypingContainer>
      <DotsContainer>
        <Dot style={{ opacity: dot1Anim }} />
        <Dot style={{ opacity: dot2Anim }} />
        <Dot style={{ opacity: dot3Anim }} />
      </DotsContainer>
    </TypingContainer>
  );
};
