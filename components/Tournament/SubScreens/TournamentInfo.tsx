import React from "react";
import { Text, View } from "react-native";
import { useGetTournament } from "../../../graphql/tournaments/getTournament";
import { format } from "date-fns";
import { Id } from "../../../models/global";

type TTournamentInfoProps = { tournamentId: Id };
export const TournamentInfo: React.FC<TTournamentInfoProps> = ({
  tournamentId,
}) => {
  const { data } = useGetTournament({ id: tournamentId });
  return (
    <View>
      <Text>{data.GetTournament?.name}</Text>
      <Text>{data.GetTournament?.address}</Text>
      <Text>
        {format(data.GetTournament?.dateTime ?? new Date(), "yyyy-MM-dd hh:mm")}
      </Text>
    </View>
  );
};
