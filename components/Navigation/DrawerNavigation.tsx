import React from "react";
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import { TDrawerNavigation } from "../../models/navigation";
import { CreateTournament } from "../Tournaments/CreateTournament/CreateTournament";
import { TournamentScreen } from "../Tournaments/TournamentsScreen";
import { Header } from "./Header";
import { TournamentsStackNavigation } from "./TournamentsStackNavigation";

type TDrawerScreenProps = DrawerScreenProps<TDrawerNavigation>;

type TDrawerNavigationProps = {};
export const DrawerNavigation: React.FC<TDrawerNavigationProps> = ({}) => {
  const Drawer = createDrawerNavigator<TDrawerNavigation>();
  return (
    <Drawer.Navigator
      initialRouteName="MainTournaments"
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
        name="MainTournaments"
        children={({ navigation, route }: TDrawerScreenProps) => (
          <TournamentsStackNavigation
            toggleDrawer={navigation.toggleDrawer}
            navigation={navigation}
            route={route}
          />
        )}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="CreateTournament" component={CreateTournament} />
    </Drawer.Navigator>
  );
};
