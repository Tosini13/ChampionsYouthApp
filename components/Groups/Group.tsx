import React, { useCallback } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { useGetTournamentGroupsDetails } from "../../graphql/groups/useGetTournamentGroupsDetails";
import { TTournamentsStackNavigation } from "../../models/navigation";
import Loading from "../Global/Loading";
import MatchesList from "./MatchesList";
import { Id } from "../../models/global";

type TGroupProps = {} & StackScreenProps<
  TTournamentsStackNavigation,
  "TournamentGroup"
>;

const Group: React.FC<TGroupProps> = ({ route, navigation }) => {
  const { tournamentId, groupId } = route.params;

  const handleClickMatch = useCallback(
    (matchId: Id) => {
      navigation.navigate("TournamentGroupMatch", {
        tournamentId,
        groupId,
        matchId,
      });
    },
    [tournamentId, groupId]
  );

  const { data } = useGetTournamentGroupsDetails({
    tournamentId: route.params.tournamentId,
    groupId: route.params.groupId,
  });
  const group = data.GetTournament.tournament?.groups[0];
  return (
    <View>
      {group?.matches ? (
        <MatchesList
          matches={group?.matches}
          handleClickMatch={handleClickMatch}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default Group;
