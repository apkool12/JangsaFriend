import React from "react";
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

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

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
        tabBarActiveTintColor: "#1A1A1A",
        tabBarInactiveTintColor: "#666666",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "홈",
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{
          tabBarLabel: "분석",
        }}
      />
      <Tab.Screen
        name="Education"
        component={EducationScreen}
        options={{
          tabBarLabel: "교육",
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarLabel: "커뮤니티",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "설정",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
