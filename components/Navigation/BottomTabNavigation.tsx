import React, { ReactNode } from "react";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TBottomTabNavigation } from "../../models/navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Header } from "./Header";
import { Tournaments } from "../Tournaments/Tournaments";
import { Id } from "../../models/global";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

type TBottomTabNavigationProps = {
  navigateToTournament: (id: Id) => void;
  toggleDrawer: () => void;
};

type TBottomTabScreenProps = BottomTabScreenProps<TBottomTabNavigation>;

export const BottomTabNavigation: React.FC<TBottomTabNavigationProps> = ({
  navigateToTournament,
  toggleDrawer,
}) => {
  const BottomTab = createBottomTabNavigator<TBottomTabNavigation>();
  return (
    <BottomTab.Navigator
      initialRouteName={"Tournaments"}
      screenOptions={{
        header: ({ route }: BottomTabHeaderProps): ReactNode => (
          <Header title={route.name} toggleDrawer={toggleDrawer} />
        ),
      }}
    >
      <BottomTab.Screen
        name={"Tournaments"}
        children={({}: TBottomTabScreenProps) => (
          <Tournaments navigateToTournament={navigateToTournament} />
        )}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="trophy" color="blue" size={20} />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <BottomTab.Screen
        name={"MyTournament"}
        children={({}: TBottomTabScreenProps) => (
          <Tournaments navigateToTournament={navigateToTournament} />
        )}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="star" color="blue" size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name={"FavoritesTournament"}
        children={({}: TBottomTabScreenProps) => (
          <Tournaments navigateToTournament={navigateToTournament} />
        )}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="favorite" color="blue" size={20} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
