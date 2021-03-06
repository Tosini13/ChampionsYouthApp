import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useGetTournaments } from "../../graphql/tournaments/getTournaments";
import { TTournament } from "../../models/tournament";
import { Id } from "../../models/global";

type TTournamentsProps = {
  navigateToTournament: (id: Id) => void;
};

export const Tournaments: React.FC<TTournamentsProps> = ({
  navigateToTournament,
}) => {
  const { data } = useGetTournaments();
  const handleClickTournament = (tournament: TTournament) => {
    navigateToTournament(tournament.id);
  };

  return (
    <View style={style.container}>
      <View>
        <FlatList
          data={data?.GetTournaments.tournaments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleClickTournament(item)}>
              <View style={style.tournament}>
                <Text style={{ color: "white" }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 5,
  },
  tournament: {
    marginVertical: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "blue",
    shadowColor: "#999",
    shadowOffset: { width: 1, height: 2 },
  },
});
