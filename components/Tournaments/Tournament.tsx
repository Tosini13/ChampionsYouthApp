import React from "react";
import { Text, View } from "react-native";
import { useGetTournament } from "../../graphql/tournaments/getTournament";
type TTournamentProps = {};
export const Tournament: React.FC<TTournamentProps> = ({}) => {
  const { data, loading, error } = useGetTournament();
  return (
    <View>
      <Text>{data?.GetTournament.name}</Text>
    </View>
  );
};
