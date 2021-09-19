import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { useGetTournament } from "../../graphql/tournaments/getTournament";
import { StackNavigationStackParamList } from "../../models/navigation";
type TTournamentProps = {} & NativeStackScreenProps<
  StackNavigationStackParamList,
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
