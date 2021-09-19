import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tournaments } from "../Tournaments/Tournaments";
import { Tournament } from "../Tournaments/Tournament";
import { StackNavigationStackParamList } from "../../models/navigation";

type TStackNavigationProps = {};
export const StackNavigation: React.FC<TStackNavigationProps> = () => {
  const Stack = createNativeStackNavigator<StackNavigationStackParamList>();
  return (
    <Stack.Navigator initialRouteName={"Tournaments"}>
      <Stack.Screen name={"Tournaments"} component={Tournaments} />
      <Stack.Screen name={"Tournament"} component={Tournament} />
    </Stack.Navigator>
  );
};