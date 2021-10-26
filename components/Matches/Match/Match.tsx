import React from "react";
import { View } from "react-native";
import { TMatch } from "../../../models/match";
import MatchHeader from "./MatchHeader";
import MatchMain from "./MatchMain";

type TMatchProps = {
  match: TMatch;
};

const Match: React.FC<TMatchProps> = ({ match }) => {
  return (
    <View>
      <MatchHeader
        roundName={match.roundName}
        roundNumber={match.roundNumber}
        dateTime={match.dateTime}
      />
      <MatchMain
        homeTeam={match.homeTeam}
        awayTeam={match.awayTeam}
        score={match.score}
      />
    </View>
  );
};

export default Match;
