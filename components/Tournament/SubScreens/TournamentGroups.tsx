import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useGetTournamentGroupsSummary } from "../../../graphql/groups/useGetTournamentGroupsSummary";
import { Id } from "../../../models/global";

type TTournamentGroupsProps = {
  tournamentId: Id;
  navigateToGroup: (groupId: Id) => void;
};

export const TournamentGroups: React.FC<TTournamentGroupsProps> = ({
  tournamentId,
  navigateToGroup,
}) => {
  const { data } = useGetTournamentGroupsSummary({ tournamentId });
  const groups = data.GetTournament.tournament?.groups ?? [];
  return (
    <View style={style.container}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={groups}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToGroup(item.id)}>
            <View style={style.listItem}>
              <Text style={style.listItemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  listItem: {
    marginTop: 5,
    padding: 5,
    backgroundColor: "gray",
    shadowOffset: { height: 2, width: 2 },
    width: "100%",
  },
  listItemText: {
    color: "white",
  },
});
