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
import { TTournamentsStackNavigation } from "../../models/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type TTournamentsProps = {} & NativeStackScreenProps<
  TTournamentsStackNavigation,
  "Tournament"
>;

export const Tournaments: React.FC<TTournamentsProps> = ({ navigation }) => {
  const { data } = useGetTournaments();
  const handleClickTournament = (tournament: TTournament) => {
    navigation.navigate("Tournament", {
      tournamentId: tournament.id,
    });
  };

  return (
    <View style={style.container}>
      <View>
        <Text>Tournaments:</Text>
      </View>
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
    paddingHorizontal: 5,
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
