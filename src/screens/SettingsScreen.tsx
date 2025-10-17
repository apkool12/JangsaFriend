import React, { useState } from "react";
import { ScrollView, Switch, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
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

const SectionTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileIconContainer = styled.View`
  border-radius: 30px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const ProfileInfo = styled.View`
  flex: 1;
`;

const ProfileName = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
`;

const ProfileRole = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const BusinessInfoItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const BusinessInfoIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props: ThemedProps) => props.theme.colors.border};
  align-items: center;
  justify-content: center;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const BusinessInfoContent = styled.View`
  flex: 1;
`;

const BusinessInfoTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: 4px;
`;

const BusinessInfoDescription = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const NotificationItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const NotificationIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props: ThemedProps) => props.theme.colors.border};
  align-items: center;
  justify-content: center;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const NotificationContent = styled.View`
  flex: 1;
`;

const NotificationTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: 4px;
`;

const NotificationDescription = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const AppInfoItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const AppInfoText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.text};
`;

const LogoutButton = styled.TouchableOpacity`
  background-color: #ff8787;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.round}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  align-items: center;
  margin: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const LogoutButtonText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: #ffffff;
`;

const Divider = styled.View`
  height: 1px;
  background-color: ${(props: ThemedProps) => props.theme.colors.border};
  margin: ${(props: ThemedProps) => props.theme.spacing.sm}px 0;
`;

const SettingsScreen = () => {
  const [pushNotification, setPushNotification] = useState(true);
  const [monthlyReport, setMonthlyReport] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    Alert.alert("로그아웃", "정말 로그아웃하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "로그아웃",
        style: "destructive",
        onPress: () => console.log("로그아웃"),
      },
    ]);
  };

  return (
    <Container>
      <Header />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        {/* 계정 정보 섹션 */}
        <SectionTitle style={{ marginHorizontal: 24, marginTop: 24 }}>
          계정 정보
        </SectionTitle>
        <Card style={{ marginHorizontal: 24 }}>
          <ProfileContainer>
            <ProfileIconContainer>
              <MaterialIcons
                name="account-circle"
                size={40}
                color="#c86363"
              ></MaterialIcons>
            </ProfileIconContainer>
            <ProfileInfo>
              <ProfileName>홍길동</ProfileName>
              <ProfileRole>백다방 신촌점 사장</ProfileRole>
            </ProfileInfo>
          </ProfileContainer>
        </Card>

        {/* 업체 정보 섹션 */}
        <SectionTitle style={{ marginHorizontal: 24, marginTop: 24 }}>
          업체 정보
        </SectionTitle>
        <Card style={{ marginHorizontal: 24 }}>
          <BusinessInfoItem>
            <BusinessInfoIcon>
              <MaterialIcons name="store" size={24} color="#666666" />
            </BusinessInfoIcon>
            <BusinessInfoContent>
              <BusinessInfoTitle>업체명</BusinessInfoTitle>
              <BusinessInfoDescription>백다방 신촌점</BusinessInfoDescription>
            </BusinessInfoContent>
          </BusinessInfoItem>
          <Divider />
          <BusinessInfoItem>
            <BusinessInfoIcon>
              <MaterialIcons name="category" size={24} color="#666666" />
            </BusinessInfoIcon>
            <BusinessInfoContent>
              <BusinessInfoTitle>업종</BusinessInfoTitle>
              <BusinessInfoDescription>카페</BusinessInfoDescription>
            </BusinessInfoContent>
          </BusinessInfoItem>
          <Divider />
          <BusinessInfoItem>
            <BusinessInfoIcon>
              <MaterialIcons name="location-on" size={24} color="#666666" />
            </BusinessInfoIcon>
            <BusinessInfoContent>
              <BusinessInfoTitle>주소</BusinessInfoTitle>
              <BusinessInfoDescription>
                서울시 서대문구 신촌동 123-45
              </BusinessInfoDescription>
            </BusinessInfoContent>
          </BusinessInfoItem>
          <Divider />
          <BusinessInfoItem>
            <BusinessInfoIcon>
              <MaterialIcons name="business" size={24} color="#666666" />
            </BusinessInfoIcon>
            <BusinessInfoContent>
              <BusinessInfoTitle>사업자등록번호</BusinessInfoTitle>
              <BusinessInfoDescription>123-45-67890</BusinessInfoDescription>
            </BusinessInfoContent>
          </BusinessInfoItem>
        </Card>

        {/* 알림 설정 섹션 */}
        <SectionTitle style={{ marginHorizontal: 24, marginTop: 24 }}>
          알림 설정
        </SectionTitle>
        <Card style={{ marginHorizontal: 24 }}>
          <NotificationItem>
            <NotificationIcon>
              <MaterialIcons name="notifications" size={24} color="#666666" />
            </NotificationIcon>
            <NotificationContent>
              <NotificationTitle>푸시 알림</NotificationTitle>
              <NotificationDescription>
                앱 알림을 받습니다
              </NotificationDescription>
            </NotificationContent>
            <Switch
              value={pushNotification}
              onValueChange={setPushNotification}
              trackColor={{ false: "#E5E5E5", true: "#FED44E" }}
              thumbColor={pushNotification ? "#FFD700" : "#FFFFFF"}
            />
          </NotificationItem>

          <Divider />

          <NotificationItem>
            <NotificationIcon>
              <MaterialIcons name="bar-chart" size={24} color="#666666" />
            </NotificationIcon>
            <NotificationContent>
              <NotificationTitle>월간 리포트</NotificationTitle>
              <NotificationDescription>
                월간 분석 리포트를 이메일로 받습니다
              </NotificationDescription>
            </NotificationContent>
            <Switch
              value={monthlyReport}
              onValueChange={setMonthlyReport}
              trackColor={{ false: "#E5E5E5", true: "#FED44E" }}
              thumbColor={monthlyReport ? "#FFD700" : "#FFFFFF"}
            />
          </NotificationItem>

          <Divider />

          <NotificationItem>
            <NotificationIcon>
              <MaterialIcons name="brightness-6" size={24} color="#666666" />
            </NotificationIcon>
            <NotificationContent>
              <NotificationTitle>다크 모드</NotificationTitle>
              <NotificationDescription>
                어두운 테마로 설정합니다
              </NotificationDescription>
            </NotificationContent>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#E5E5E5", true: "#FED44E" }}
              thumbColor={darkMode ? "#FFD700" : "#FFFFFF"}
            />
          </NotificationItem>
        </Card>

        {/* 앱 정보 섹션 */}
        <SectionTitle style={{ marginHorizontal: 24, marginTop: 24 }}>
          앱 정보
        </SectionTitle>
        <Card style={{ marginHorizontal: 24 }}>
          <AppInfoItem onPress={() => console.log("버전 정보")}>
            <AppInfoText>버전 정보</AppInfoText>
            <MaterialIcons name="chevron-right" size={24} color="#999999" />
          </AppInfoItem>
          <Divider />
          <AppInfoItem onPress={() => console.log("이용약관")}>
            <AppInfoText>이용약관</AppInfoText>
            <MaterialIcons name="chevron-right" size={24} color="#999999" />
          </AppInfoItem>
          <Divider />
          <AppInfoItem onPress={() => console.log("개인정보처리방침")}>
            <AppInfoText>개인정보처리방침</AppInfoText>
            <MaterialIcons name="chevron-right" size={24} color="#999999" />
          </AppInfoItem>
        </Card>

        {/* 로그아웃 버튼 */}
        <LogoutButton onPress={handleLogout}>
          <LogoutButtonText>로그아웃</LogoutButtonText>
        </LogoutButton>
      </ScrollContainer>
    </Container>
  );
};

export default SettingsScreen;
