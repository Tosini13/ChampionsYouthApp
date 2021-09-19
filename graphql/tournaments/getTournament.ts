import { gql, QueryResult, useQuery } from "@apollo/client";
import { Id } from "../../models/global";
import { TTournament } from "../../models/tournament";
import { mockTournaments } from "./mock";

export const GET_TOURNAMENT_QUERY = gql`
  {
    GetTournament(id: "2") {
      id
      name
    }
  }
`;

export type TGetTournamentParams = {
  id: Id;
};

export type TGetTournamentResponse = {
  GetTournament: TTournament | null;
};

export const useGetTournament = (
  variables: TGetTournamentParams
): { data: TGetTournamentResponse } => ({
  data: {
    GetTournament: mockTournaments.find((t) => t.id === variables.id) ?? null,
  },
});

// useQuery<TGetTournamentResponse>(GET_TOURNAMENT_QUERY);
