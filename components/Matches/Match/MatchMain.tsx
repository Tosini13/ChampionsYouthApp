import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TMatch } from "../../../models/match";
import MatchScore from "./MatchScore";

type TMatchMainProps = Pick<TMatch, "homeTeam" | "awayTeam" | "score">;

const MatchMain: React.FC<TMatchMainProps> = ({
  homeTeam,
  awayTeam,
  score,
}) => {
  return (
    <View style={style.container}>
      <Text>{homeTeam?.name}</Text>
      <MatchScore score={score} />
      <Text>{awayTeam?.name}</Text>
    </View>
  );
};

export default MatchMain;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
