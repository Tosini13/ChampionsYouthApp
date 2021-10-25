import React from "react";
import { Text, View } from "react-native";
import { useGetTournament } from "../../graphql/tournaments/getTournament";
import { Id } from "../../models/global";
import { Header, THeaderProps } from "../Navigation/Header";

type TTournamentHeaderProps = Omit<THeaderProps, "title"> & {
  tournamentId?: Id;
};

const TournamentHeader: React.FC<TTournamentHeaderProps> = ({
  tournamentId,
  ...props
}) => {
  const { data } = useGetTournament({
    id: tournamentId ?? "2",
  });

  return <Header {...props} title={data.GetTournament?.name} />;
};

export default TournamentHeader;
