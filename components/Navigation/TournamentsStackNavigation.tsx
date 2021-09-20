import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TDrawerNavigation,
  TTournamentsStackNavigation,
} from "../../models/navigation";
import { Header } from "./Header";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";
import { Id } from "../../models/global";
import Group from "../Groups/Group";
import Match from "../Matches/Match";
import { TopTabNavigation } from "./TopTabNavigation";

export type TStackScreenProps = StackScreenProps<TTournamentsStackNavigation>;

type TTournamentsStackNavigationProps = {
  toggleDrawer: () => void;
} & DrawerScreenProps<TDrawerNavigation>;
export const TournamentsStackNavigation: React.FC<TTournamentsStackNavigationProps> =
  ({ toggleDrawer }) => {
    const Stack = createNativeStackNavigator<TTournamentsStackNavigation>();
    return (
      <Stack.Navigator
        initialRouteName={"TournamentsList"}
        screenOptions={{
          header: ({ navigation }) => {
            return (
              <Header
                title={"Tournament NAME"}
                toggleDrawer={toggleDrawer}
                goBack={navigation.goBack}
                canGoBack={navigation.canGoBack()}
              />
            );
          },
        }}
      >
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
        <Stack.Screen name={"Tournament"} component={TopTabNavigation} />
        <Stack.Screen name={"TournamentGroup"} component={Group} />
        <Stack.Screen name={"TournamentMatch"} component={Match} />
      </Stack.Navigator>
    );
  };
