import { gql, useQuery } from "@apollo/client";
import { Id } from "../../models/global";
import { TTournament } from "../../models/tournament";

export const GET_TOURNAMENTS_QUERY = gql`
  {
    GetTournaments {
      tournaments {
        id
        name
      }
    }
  }
`;

export type TGetTournamentsResponse = {
  GetTournaments: {
    tournaments: TTournament[];
  };
};

export const useGetTournaments = () =>
  useQuery<TGetTournamentsResponse>(GET_TOURNAMENTS_QUERY);
