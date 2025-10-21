import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { Header, Card } from "../components";

interface ThemedProps {
  theme: DefaultTheme;
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

const PageTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xxl}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  text-align: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xl}px;
`;

const SectionTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const VideoPlaceholder = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${(props: ThemedProps) => props.theme.colors.border};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
  align-items: center;
  justify-content: center;
`;

const VideoPlaceholderText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: ${(props: ThemedProps) => props.theme.colors.textTertiary};
`;

const LectureTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const LectureSubtitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const LectureDescription = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  line-height: 20px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const WatchButton = styled.TouchableOpacity`
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  padding-left: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  align-self: flex-end;
`;

const WatchButtonText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.background};
`;

const ChecklistSection = styled.View`
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const ChecklistTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const ChecklistItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

interface CheckboxProps extends ThemedProps {
  checked: boolean;
}

const Checkbox = styled.View<CheckboxProps>`
  width: 20px;
  height: 20px;
  border-width: 2px;
  border-color: ${(props: CheckboxProps) =>
    props.checked ? props.theme.colors.primary : props.theme.colors.border};
  background-color: ${(props: CheckboxProps) =>
    props.checked ? props.theme.colors.primary : "transparent"};
  border-radius: ${(props: CheckboxProps) => props.theme.borderRadius.sm}px;
  margin-right: ${(props: CheckboxProps) => props.theme.spacing.sm}px;
  align-items: center;
  justify-content: center;
`;

const Checkmark = styled.Text`
  color: ${(props: ThemedProps) => props.theme.colors.text};
  font-size: 12px;
  font-weight: bold;
`;

const ChecklistItemText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  flex: 1;
  line-height: 18px;
`;

const EducationScreen = () => {
  const [budgetChecklist, setBudgetChecklist] = useState([
    {
      id: 1,
      text: "매출 대비 마케팅 예산 비율 설정 (5-10% 권장)",
      checked: false,
    },
    { id: 2, text: "채널별 예산 배분 계획", checked: false },
    { id: 3, text: "성과 측정 지표 설정", checked: false },
    { id: 4, text: "월별/분기별 예산 조정 계획", checked: false },
  ]);

  const [contentChecklist, setContentChecklist] = useState([
    { id: 1, text: "타겟 고객 페르소나 정의", checked: false },
    { id: 2, text: "업종별 효과적인 콘텐츠 형식 선택", checked: false },
    { id: 3, text: "주간 콘텐츠 일정 계획", checked: false },
    { id: 4, text: "고객 반응 분석 및 피드백 반영", checked: false },
  ]);

  const toggleBudgetChecklist = (id: number) => {
    setBudgetChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const toggleContentChecklist = (id: number) => {
    setContentChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleWatchPress = (lecture: string) => {
    console.log(`${lecture} 시청하기 버튼이 클릭되었습니다!`);
  };

  return (
    <Container>
      <Header />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <SectionTitle>마케팅 가이드 스트리밍</SectionTitle>
        <Card style={{ marginHorizontal: 24, marginBottom: 24 }}>
          <VideoPlaceholder>
            <VideoPlaceholderText>비디오 플레이스홀더</VideoPlaceholderText>
          </VideoPlaceholder>
          <LectureTitle>마케팅 기초 강의</LectureTitle>
          <LectureSubtitle>초보 사장님을 위한 가이드</LectureSubtitle>
          <LectureDescription>
            마케팅의 기본 개념과 소상공인이 실천할 수 있는 기본 전략을
            알아봅니다.
          </LectureDescription>
          <WatchButton onPress={() => handleWatchPress("마케팅 기초 강의")}>
            <WatchButtonText>시청하기</WatchButtonText>
          </WatchButton>
        </Card>

        <Card style={{ marginHorizontal: 24, marginBottom: 24 }}>
          <VideoPlaceholder>
            <VideoPlaceholderText>비디오 플레이스홀더</VideoPlaceholderText>
          </VideoPlaceholder>
          <LectureTitle>SNS 마케팅 활용법</LectureTitle>
          <LectureSubtitle>인스타그램/페이스북 활용 가이드</LectureSubtitle>
          <LectureDescription>
            소셜 미디어를 활용한 효과적인 마케팅 전략과 실천 방법을 알아봅니다.
          </LectureDescription>
          <WatchButton onPress={() => handleWatchPress("SNS 마케팅 활용법")}>
            <WatchButtonText>시청하기</WatchButtonText>
          </WatchButton>
        </Card>

        <SectionTitle>실시간 팁 & 체크리스트</SectionTitle>
        <Card style={{ marginHorizontal: 24, marginBottom: 24 }}>
          <ChecklistSection>
            <ChecklistTitle>예산 짜기 체크리스트</ChecklistTitle>
            {budgetChecklist.map((item) => (
              <ChecklistItem
                key={item.id}
                onPress={() => toggleBudgetChecklist(item.id)}
              >
                <Checkbox checked={item.checked}>
                  {item.checked && <Checkmark>✓</Checkmark>}
                </Checkbox>
                <ChecklistItemText>{item.text}</ChecklistItemText>
              </ChecklistItem>
            ))}
          </ChecklistSection>

          <ChecklistSection>
            <ChecklistTitle>콘텐츠 제작 팁</ChecklistTitle>
            {contentChecklist.map((item) => (
              <ChecklistItem
                key={item.id}
                onPress={() => toggleContentChecklist(item.id)}
              >
                <Checkbox checked={item.checked}>
                  {item.checked && <Checkmark>✓</Checkmark>}
                </Checkbox>
                <ChecklistItemText>{item.text}</ChecklistItemText>
              </ChecklistItem>
            ))}
          </ChecklistSection>
        </Card>
      </ScrollContainer>
    </Container>
  );
};

export default EducationScreen;
