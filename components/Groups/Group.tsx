import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { useGetTournamentGroupsSummary } from "../../graphql/groups/useGetTournamentGroupsSummary";
import { TTournamentsStackNavigation } from "../../models/navigation";

type TGroupProps = {} & StackScreenProps<
  TTournamentsStackNavigation,
  "TournamentGroup"
>;

const Group: React.FC<TGroupProps> = ({ route }) => {
  const { data } = useGetTournamentGroupsSummary({
    tournamentId: route.params.tournamentId,
    groupId: route.params.groupId,
  });
  const group = data.GetTournament.tournament?.groups[0];
  return (
    <View>
      <Text>
        Group: {group?.name} (#{group?.id})
      </Text>
    </View>
  );
};

export default Group;
