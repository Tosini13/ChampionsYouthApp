import React from "react";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TBottomTabNavigation } from "../../models/navigation";
import { TournamentStackNavigation } from "./TournamentStackNavigation";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Header } from "./Header";

type TBottomTabNavigationProps = {
  toggleDrawer: () => void;
};

type TBottomTabScreenProps = BottomTabScreenProps<TBottomTabNavigation>;

export const BottomTabNavigation: React.FC<TBottomTabNavigationProps> = ({
  toggleDrawer,
}) => {
  const BottomTab = createBottomTabNavigator<TBottomTabNavigation>();
  return (
    <BottomTab.Navigator
      initialRouteName={"Tournaments"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name={"Tournaments"}
        children={({ navigation, route }: TBottomTabScreenProps) => (
          <TournamentStackNavigation
            navigation={navigation}
            route={route}
            toggleDrawer={toggleDrawer}
          />
        )}
        options={{
          tabBarIcon: () => (
            <FontAwesome.Button
              name="trophy"
              backgroundColor="transparent"
              color="blue"
              onPress={() => console.log("Trophy")}
            />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <BottomTab.Screen
        name={"MyTournament"}
        children={({ navigation, route }: TBottomTabScreenProps) => (
          <TournamentStackNavigation
            navigation={navigation}
            route={route}
            toggleDrawer={toggleDrawer}
          />
        )}
        // options={{
        //   tabBarIcon: () => (
        //     <MaterialIcons.Button
        //       name="star"
        //       backgroundColor="transparent"
        //       color="blue"
        //     />
        //   ),
        // }}
      />
      <BottomTab.Screen
        name={"FavoritesTournament"}
        children={({ navigation, route }: TBottomTabScreenProps) => (
          <TournamentStackNavigation
            navigation={navigation}
            route={route}
            toggleDrawer={toggleDrawer}
          />
        )}
        // options={{
        //   tabBarIcon: () => (
        //     <MaterialIcons.Button
        //       name="favorite"
        //       backgroundColor="transparent"
        //       color="blue"
        //     />
        //   ),
        // }}
      />
    </BottomTab.Navigator>
  );
};
