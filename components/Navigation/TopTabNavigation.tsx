import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  TTopTabNavigation,
  TTournamentsStackNavigation,
} from "../../models/navigation";
import { TournamentInfo } from "../Tournament/SubScreens/TournamentInfo";
import { TournamentTeams } from "../Tournament/SubScreens/TournamentTeams";
import { TournamentGroups } from "../Tournament/SubScreens/TournamentGroups";
import { TournamentPlayOffs } from "../Tournament/SubScreens/TournamentPlayOffs";
import { StackScreenProps } from "@react-navigation/stack";
import { Id } from "../../models/global";

const Tab = createMaterialTopTabNavigator<TTopTabNavigation>();

type TTopTabNavigationProps = {} & StackScreenProps<
  TTournamentsStackNavigation,
  "Tournament"
>;
export const TopTabNavigation: React.FC<TTopTabNavigationProps> = ({
  route,
  navigation,
}) => {
  const navigateToGroup = (groupId: Id) =>
    navigation.navigate("TournamentGroup", {
      tournamentId: route.params.tournamentId,
      groupId,
    });

  const tournamentId = route?.params?.tournamentId;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Info"
        children={() => <TournamentInfo tournamentId={tournamentId} />}
      />
      <Tab.Screen name="Teams" component={TournamentTeams} />
      <Tab.Screen
        name="Groups"
        children={() => (
          <TournamentGroups
            tournamentId={tournamentId}
            navigateToGroup={navigateToGroup}
          />
        )}
      />
      <Tab.Screen name="PlayOffs" component={TournamentPlayOffs} />
    </Tab.Navigator>
  );
};
