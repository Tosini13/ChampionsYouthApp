import { gql, useQuery } from "@apollo/client";
import { Id } from "../../models/global";
import { TTournament } from "../../models/tournament";
import { mockTournaments } from "../mock";

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

export const useGetTournaments = (): { data: TGetTournamentsResponse } => ({
  data: {
    GetTournaments: {
      tournaments: mockTournaments,
    },
  },
});
// useQuery<TGetTournamentsResponse>(GET_TOURNAMENTS_QUERY);
