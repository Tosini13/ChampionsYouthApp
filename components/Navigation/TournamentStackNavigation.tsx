import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tournaments } from "../Tournaments/Tournaments";
import { Tournament } from "../Tournaments/Tournament";
import {
  TBottomTabNavigation,
  TTournamentsStackNavigation,
} from "../../models/navigation";
import { Header } from "./Header";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type TTournamentStackNavigationProps = {
  toggleDrawer: () => void;
} & BottomTabScreenProps<TBottomTabNavigation>;
export const TournamentStackNavigation: React.FC<TTournamentStackNavigationProps> =
  ({ toggleDrawer }) => {
    const Stack = createNativeStackNavigator<TTournamentsStackNavigation>();
    return (
      <Stack.Navigator
        initialRouteName={"TournamentsList"}
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
        <Stack.Screen name={"TournamentsList"} component={Tournaments} />
        <Stack.Screen name={"Tournament"} component={Tournament} />
      </Stack.Navigator>
    );
  };
