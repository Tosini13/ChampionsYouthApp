import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TMatch } from "../../../models/match";

type TMatchScoreProps = Pick<TMatch, "score">;

const MatchScore: React.FC<TMatchScoreProps> = ({ score }) => {
  return (
    <View style={style.container}>
      {score ? (
        <>
          <Text>{score?.home}</Text>
          <Text> - </Text>
          <Text>{score?.away}</Text>
        </>
      ) : (
        <>
          <Text>vs</Text>
        </>
      )}
    </View>
  );
};

export default MatchScore;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 20,
  },
});
