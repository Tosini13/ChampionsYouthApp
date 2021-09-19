import { gql, useQuery } from "@apollo/client";
import { Id } from "../../models/global";
import { TTeam } from "../../models/teams";
import { TTournament } from "../../models/tournament";
import { mockTeams, mockTournaments } from "../mock";

export const GET_TOURNAMENT_TEAMS_QUERY = gql`
  {
    GetTournament {
      tournament {
        id
        name
        teams {
          id
          name
        }
      }
    }
  }
`;

export type TGetTournamentTeamsParams = {
  id: Id;
};
export type TGetTournamentTeamsResponse = {
  GetTournament: {
    tournament?: TTournament & {
      teams: TTeam[];
    };
  };
};

export const useGetTournamentTeams = ({
  id,
}: TGetTournamentTeamsParams): { data: TGetTournamentTeamsResponse } => {
  const tournament = mockTournaments.find((t) => t.id === id);
  const result: TGetTournamentTeamsResponse["GetTournament"]["tournament"] =
    tournament && {
      ...tournament,
      teams: mockTeams,
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
