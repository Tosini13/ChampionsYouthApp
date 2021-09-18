import { gql, useQuery } from "@apollo/client";
import { Id } from "../../models/global";
import { TTournament } from "../../models/tournament";

export const GET_TOURNAMENT_QUERY = gql`
  {
    GetTournament(id: "2") {
      id
      name
    }
  }
`;

export type TGetTournamentResponse = {
  GetTournament: TTournament;
};

export const useGetTournament = () =>
  useQuery<TGetTournamentResponse>(GET_TOURNAMENT_QUERY);
