import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tournaments } from "../Tournaments/Tournaments";
import { Tournament } from "../Tournament/Tournament";
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
  ({ toggleDrawer, route, navigation: tabNavigation }) => {
    const Stack = createNativeStackNavigator<TTournamentsStackNavigation>();
    return (
      <Stack.Navigator initialRouteName={"TournamentsList"}>
        <Stack.Screen
          name={"TournamentsList"}
          component={Tournaments}
          options={{
            header: ({ navigation }) => {
              return (
                <Header
                  title={route.name}
                  toggleDrawer={toggleDrawer}
                  goBack={tabNavigation.goBack}
                  canGoBack={tabNavigation.canGoBack()}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={"Tournament"}
          component={Tournament}
          options={{
            header: ({ navigation }) => {
              return (
                <Header
                  title={route.name}
                  toggleDrawer={toggleDrawer}
                  goBack={navigation.goBack}
                  canGoBack={navigation.canGoBack()}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    );
  };
