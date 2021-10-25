import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { TMatch } from "../../models/match";
import Match from "../Matches/Match";

type TMatchesListProps = {
  matches: TMatch[];
};

const MatchesList: React.FC<TMatchesListProps> = ({ matches }) => {
  return (
    <View>
      <FlatList
        data={matches}
        renderItem={({ item }) => (
          <View key={item.id} style={style.item}>
            <Match match={item} />
          </View>
        )}
      />
    </View>
  );
};

export default MatchesList;

const style = StyleSheet.create({
  item: {
    margin: 5,
  },
});
