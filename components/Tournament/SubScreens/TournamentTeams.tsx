import React from "react";
import { FlatList, Text, View } from "react-native";
import { useGetTournamentTeams } from "../../../graphql/teams/getTeams";

type TTournamentTeamsProps = {};
export const TournamentTeams: React.FC<TTournamentTeamsProps> = ({}) => {
  const { data } = useGetTournamentTeams({
    id: "1",
  });
  return (
    <View>
      <FlatList
        keyExtractor={({ id }) => id}
        data={data.GetTournament.tournament?.teams}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
