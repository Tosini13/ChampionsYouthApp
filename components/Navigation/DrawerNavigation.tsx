import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TDrawerNavigation } from "../../models/navigation";
import { CreateTournament } from "../Tournaments/CreateTournament/CreateTournament";
import { TournamentScreen } from "../Tournaments/TournamentsScreen";

type TDrawerNavigationProps = {};
export const DrawerNavigation: React.FC<TDrawerNavigationProps> = ({}) => {
  const Drawer = createDrawerNavigator<TDrawerNavigation>();
  return (
    <Drawer.Navigator
      initialRouteName="Tournaments"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Tournaments" component={TournamentScreen} />
      <Drawer.Screen name="CreateTournament" component={CreateTournament} />
    </Drawer.Navigator>
  );
};
