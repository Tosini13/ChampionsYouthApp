import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TMatch } from "../../../models/match";
import { format } from "date-fns";
import { StackScreenProps } from "@react-navigation/stack";
import { TTournamentsStackNavigation } from "../../../models/navigation";
import { useGetTournamentGroupMatchDetails } from "../../../graphql/matches/useGetTournamentGroupMatchDetails";
import Match from "../Match/Match";
import Loading from "../../Global/Loading";

const DATE_FORMAT_MATCH = "HH:mm dd-MM-yyyy";

type TGroupMatchProps = {} & StackScreenProps<
  TTournamentsStackNavigation,
  "TournamentGroupMatch"
>;

const GroupMatch: React.FC<TGroupMatchProps> = ({ route }) => {
  const { tournamentId, groupId, matchId } = route.params;

  const { data } = useGetTournamentGroupMatchDetails({
    tournamentId,
    groupId,
    matchId,
  });
  const match = data.GetTournament.tournament?.groups[0].matches[0];

  return (
    <View style={style.container}>
      {match ? <Match match={match} /> : <Loading />}
    </View>
  );
};

export default GroupMatch;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
