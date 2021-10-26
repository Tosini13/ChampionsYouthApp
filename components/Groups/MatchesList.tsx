import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Id } from "../../models/global";
import { TMatch } from "../../models/match";
import MatchSummary from "../Matches/MatchSummary";

type TMatchesListProps = {
  matches: TMatch[];
  handleClickMatch: (matchId: Id) => void;
};

const MatchesList: React.FC<TMatchesListProps> = ({
  matches,
  handleClickMatch,
}) => {
  return (
    <View>
      <FlatList
        data={matches}
        renderItem={({ item }) => (
          <View key={item.id} style={style.item}>
            <TouchableOpacity onPress={() => handleClickMatch(item.id)}>
              <MatchSummary match={item} />
            </TouchableOpacity>
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
