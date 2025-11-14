import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootTabParamList = {
  Home: undefined;
  Analysis: undefined;
  Education: undefined;
  Community: undefined;
  Settings: undefined;
};

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Home"
>;
