import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TDrawerNavigation } from "../../models/navigation";
import { CreateTournament } from "../Tournaments/CreateTournament/CreateTournament";
import { TournamentScreen } from "../Tournaments/TournamentsScreen";
import { Header } from "./Header";
import { Button } from "react-native";

type TDrawerNavigationProps = {};
export const DrawerNavigation: React.FC<TDrawerNavigationProps> = ({}) => {
  const Drawer = createDrawerNavigator<TDrawerNavigation>();
  return (
    <Drawer.Navigator
      initialRouteName="Tournaments"
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
        header: ({ navigation }) => {
          return <Header toggleDrawer={navigation.toggleDrawer} />;
        },
      }}
    >
      <Drawer.Screen
        name="Tournaments"
        component={TournamentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="CreateTournament" component={CreateTournament} />
    </Drawer.Navigator>
  );
};
