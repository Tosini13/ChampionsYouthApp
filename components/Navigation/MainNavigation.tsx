import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tournaments } from "../Tournaments/Tournaments";
import { Tournament } from "../Tournaments/Tournament";
import { MainNavigationStackParamList } from "../../models/navigation";

type TMainNavigationProps = {};
export const MainNavigation: React.FC<TMainNavigationProps> = () => {
  const Stack = createNativeStackNavigator<MainNavigationStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Tournaments"}>
        <Stack.Screen name={"Tournaments"} component={Tournaments} />
        <Stack.Screen name={"Tournament"} component={Tournament} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
