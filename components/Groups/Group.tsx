import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { useGetTournamentGroupsDetails } from "../../graphql/groups/useGetTournamentGroupsDetails";
import { TTournamentsStackNavigation } from "../../models/navigation";
import Loading from "../Global/Loading";
import MatchesList from "./MatchesList";

type TGroupProps = {} & StackScreenProps<
  TTournamentsStackNavigation,
  "TournamentGroup"
>;

const Group: React.FC<TGroupProps> = ({ route }) => {
  const { data } = useGetTournamentGroupsDetails({
    tournamentId: route.params.tournamentId,
    groupId: route.params.groupId,
  });
  const group = data.GetTournament.tournament?.groups[0];
  return (
    <View>
      {group?.matches ? <MatchesList matches={group?.matches} /> : <Loading />}
    </View>
  );
};

export default Group;
