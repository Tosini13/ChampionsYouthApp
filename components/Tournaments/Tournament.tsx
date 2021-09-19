import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { useGetTournament } from "../../graphql/tournaments/getTournament";
import { TTournamentsStackNavigation } from "../../models/navigation";
type TTournamentProps = {} & BottomTabScreenProps<
  TTournamentsStackNavigation,
  "Tournament"
>;

export const Tournament: React.FC<TTournamentProps> = ({ route }) => {
  const { data } = useGetTournament({
    id: route.params.tournamentId,
  });
  return (
    <View>
      <Text>{data?.GetTournament?.name}</Text>
    </View>
  );
};
