import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TMatch } from "../../models/match";
import { format } from "date-fns";
import { DATE_TIME_FORMAT_MATCH } from "../../models/global";

type TMatchSummaryProps = {
  match: TMatch;
};

const MatchSummary: React.FC<TMatchSummaryProps> = ({ match }) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>Round {match.roundNumber}</Text>
        <Text style={style.headerText}>
          {match.dateTime && format(match.dateTime, DATE_TIME_FORMAT_MATCH)}
        </Text>
      </View>
      <View style={style.teamsContainer}>
        <View style={style.teamContainer}>
          <Text
            style={style.homeTeamText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {match.homeTeam?.name}
          </Text>
        </View>
        <View style={style.vsContainer}>
          {match.score ? (
            <Text>
              {match.score.home} : {match.score.away}
            </Text>
          ) : (
            <Text>vs</Text>
          )}
        </View>
        <View style={style.teamContainer}>
          <Text
            style={style.awayTeamText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {match.awayTeam?.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MatchSummary;

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "stretch",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 13,
    backgroundColor: "gray",
    marginHorizontal: 20,
  },
  headerText: {
    color: "white",
  },
  teamsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamContainer: {
    flex: 1,
    textAlign: "center",
  },
  vsContainer: {
    marginHorizontal: 5,
  },
  teamText: {
    textAlign: "center",
  },
  homeTeamText: {
    textAlign: "left",
  },
  awayTeamText: {
    textAlign: "right",
  },
});
