import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tournaments } from "../Tournaments/Tournaments";
import { Tournament } from "../Tournament/Tournament";
import {
  TDrawerNavigation,
  TTournamentsStackNavigation,
} from "../../models/navigation";
import { Header } from "./Header";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";
import { Id } from "../../models/global";

type TStackScreenProps = StackScreenProps<TTournamentsStackNavigation>;

type TTournamentsStackNavigationProps = {
  toggleDrawer: () => void;
} & DrawerScreenProps<TDrawerNavigation>;
export const TournamentsStackNavigation: React.FC<TTournamentsStackNavigationProps> =
  ({ toggleDrawer, route, navigation: drawerNavigation }) => {
    const Stack = createNativeStackNavigator<TTournamentsStackNavigation>();
    return (
      <Stack.Navigator initialRouteName={"TournamentsList"}>
        <Stack.Screen
          name={"TournamentsList"}
          children={({ navigation }: TStackScreenProps) => (
            <BottomTabNavigation
              toggleDrawer={toggleDrawer}
              navigateToTournament={(id: Id) =>
                navigation.navigate("Tournament", {
                  tournamentId: id,
                })
              }
            />
          )}
          options={{
            headerShown: false,
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
