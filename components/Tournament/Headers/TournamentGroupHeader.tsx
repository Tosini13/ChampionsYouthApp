import React from "react";
import { useGetTournamentGroupsSummary } from "../../../graphql/groups/useGetTournamentGroupsSummary";
import { Id } from "../../../models/global";
import { Header, THeaderProps } from "../../Navigation/Header";

type TTournamentGroupHeaderProps = Omit<THeaderProps, "title"> & {
  tournamentId: Id;
  groupId: Id;
};

const TournamentGroupHeader: React.FC<TTournamentGroupHeaderProps> = ({
  tournamentId,
  groupId,
  ...props
}) => {
  const { data } = useGetTournamentGroupsSummary({
    tournamentId,
    groupId,
  });

  const title = `${data.GetTournament.tournament?.name} | ${data.GetTournament.tournament?.groups[0].name}`;

  return <Header {...props} title={title} />;
};

export default TournamentGroupHeader;
