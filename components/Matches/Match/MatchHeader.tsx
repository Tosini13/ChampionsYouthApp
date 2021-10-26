import { format } from "date-fns";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  DATE_FORMAT_MATCH,
  DATE_TIME_FORMAT_MATCH,
  TIME_FORMAT_MATCH,
} from "../../../models/global";
import { TMatch } from "../../../models/match";

type TMatchHeaderProps = Pick<TMatch, "roundName" | "roundNumber" | "dateTime">;

const MatchHeader: React.FC<TMatchHeaderProps> = ({
  roundName,
  roundNumber,
  dateTime,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.roundText}>
        {roundName ?? "Round"} {roundNumber}
      </Text>
      {dateTime && (
        <Text style={style.dateText}>
          {format(dateTime, DATE_FORMAT_MATCH)}
        </Text>
      )}
      {dateTime && (
        <Text style={style.dateText}>
          {format(dateTime, TIME_FORMAT_MATCH)}
        </Text>
      )}
    </View>
  );
};

export default MatchHeader;

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roundText: {
    marginVertical: 3,
  },
  dateText: {
    marginVertical: 3,
  },
  timeText: {
    marginVertical: 3,
  },
});
