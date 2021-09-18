import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tournaments } from "../Tournaments/Tournaments";
import { Tournament } from "../Tournaments/Tournament";
import { EScreens } from "../../models/navigation";

type TMainNavigationProps = {};
export const MainNavigation: React.FC<TMainNavigationProps> = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={EScreens.TOURNAMENTS}>
        <Stack.Screen name={EScreens.TOURNAMENTS} component={Tournaments} />
        <Stack.Screen name={EScreens.TOURNAMENT} component={Tournament} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
