import { gql, useQuery } from "@apollo/client";
import { Id } from "../../models/global";
import { TGroup } from "../../models/groups";
import { TTournament } from "../../models/tournament";
import { mockGroups, mockTournaments } from "../mock";

export const GET_TOURNAMENT_TEAMS_QUERY = gql`
  {
    GetTournament {
      id
      name
      groups {
        id
        name
      }
    }
  }
`;

export type TGetGroupsSummaryParams = {
  tournamentId: Id;
  groupId: Id;
  matchId: Id;
};
export type TGetGroupsSummaryResponse = {
  GetTournament: {
    tournament?: TTournament & {
      groups: Array<Pick<TGroup, "id" | "name" | "matches">>;
    };
  };
};

export const useGetTournamentGroupMatchDetails = ({
  tournamentId,
  groupId,
  matchId,
}: TGetGroupsSummaryParams): { data: TGetGroupsSummaryResponse } => {
  const tournament = mockTournaments.find((t) => t.id === tournamentId);

  const groupsData = mockGroups.map((group) => ({
    name: group.name,
    id: group.id,
    matches: group.matches,
  }));

  const group = groupsData.find((group) => group.id === groupId);

  const match = group?.matches.find((match) => match.id === matchId);
  const matches = match ? [match] : [];

  const result: TGetGroupsSummaryResponse["GetTournament"]["tournament"] =
    tournament &&
      group && {
        ...tournament,
        groups: [
          {
            ...group,
            matches,
          },
        ],
      };
  return {
    data: {
      GetTournament: {
        tournament: result,
      },
    },
  };
};
// useQuery<TGetTournamentsResponse>(GET_TOURNAMENTS_TEAMS_QUERY);
