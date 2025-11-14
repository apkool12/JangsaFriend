import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme } from "styled-components/native";
import { CustomIcon } from "../components/CustomIcon";

import HomeScreen from "../screens/HomeScreen";
import AnalysisScreen from "../screens/AnalysisScreen";
import EducationScreen from "../screens/EducationScreen";
import CommunityScreen from "../screens/CommunityScreen";
import SettingsScreen from "../screens/SettingsScreen";

// SVG 아이콘들 import
import HomeIcon from "../../assets/navbar/home.svg";
import AnalyzeIcon from "../../assets/navbar/analyze.svg";
import EducationIcon from "../../assets/navbar/education.svg";
import CommIcon from "../../assets/navbar/comm.svg";
import SettingIcon from "../../assets/navbar/setting.svg";

const Tab = createBottomTabNavigator();

interface BottomTabNavigatorProps {
  onLogout?: () => void;
}

const BottomTabNavigator = ({ onLogout }: BottomTabNavigatorProps) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource = HomeIcon;

          if (route.name === "Home") {
            iconSource = HomeIcon;
          } else if (route.name === "Analysis") {
            iconSource = AnalyzeIcon;
          } else if (route.name === "Education") {
            iconSource = EducationIcon;
          } else if (route.name === "Community") {
            iconSource = CommIcon;
          } else if (route.name === "Settings") {
            iconSource = SettingIcon;
          }

          return <CustomIcon source={iconSource} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0C0C0C",
        tabBarInactiveTintColor: "#B0B0B0",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          paddingBottom: 5,
          paddingTop: 5,
          height: 90,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Apple SD Gothic Neo",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Apple SD Gothic Neo",
                fontWeight: focused ? "600" : "400",
                color: color,
              }}
            >
              홈
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Apple SD Gothic Neo",
                fontWeight: focused ? "600" : "400",
                color: color,
              }}
            >
              분석
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Education"
        component={EducationScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Apple SD Gothic Neo",
                fontWeight: focused ? "600" : "400",
                color: color,
              }}
            >
              교육
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Apple SD Gothic Neo",
                fontWeight: focused ? "600" : "400",
                color: color,
              }}
            >
              커뮤니티
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Apple SD Gothic Neo",
                fontWeight: focused ? "600" : "400",
                color: color,
              }}
            >
              설정
            </Text>
          ),
        }}
      >
        {() => <SettingsScreen onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
