import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tournaments } from "../Tournaments/Tournaments";
import { Tournament } from "../Tournaments/Tournament";
import { StackNavigationStackParamList } from "../../models/navigation";
import { Header } from "./Header";

type TStackNavigationProps = {
  toggleDrawer: () => void;
};
export const StackNavigation: React.FC<TStackNavigationProps> = ({
  toggleDrawer,
}) => {
  const Stack = createNativeStackNavigator<StackNavigationStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName={"Tournaments"}
      screenOptions={{
        header: ({ navigation }) => {
          return (
            <Header
              toggleDrawer={toggleDrawer}
              goBack={navigation.goBack}
              canGoBack={navigation.canGoBack()}
            />
          );
        },
      }}
    >
      <Stack.Screen name={"Tournaments"} component={Tournaments} />
      <Stack.Screen name={"Tournament"} component={Tournament} />
    </Stack.Navigator>
  );
};
