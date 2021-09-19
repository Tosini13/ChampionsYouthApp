import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TTopTabNavigation } from "../../models/navigation";
import { TournamentInfo } from "../Tournament/SubScreens/TournamentInfo";
import { TournamentTeams } from "../Tournament/SubScreens/TournamentTeams";
import { TournamentGroups } from "../Tournament/SubScreens/TournamentGroups";
import { TournamentPlayOffs } from "../Tournament/SubScreens/TournamentPlayOffs";

const Tab = createMaterialTopTabNavigator<TTopTabNavigation>();

type TTopTabNavigationProps = {};
export const TopTabNavigation: React.FC<TTopTabNavigationProps> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Info" component={TournamentInfo} />
      <Tab.Screen name="Teams" component={TournamentTeams} />
      <Tab.Screen name="Groups" component={TournamentGroups} />
      <Tab.Screen name="PlayOffs" component={TournamentPlayOffs} />
    </Tab.Navigator>
  );
};
