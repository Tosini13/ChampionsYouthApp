import { Id } from "./global";
import { TTeam } from "./teams";

export type TScore = {
  home: number;
  away: number;
};

export type TMatch = {
  id: Id;
  roundNumber?: number;
  roundName?: string;
  homeTeam?: TTeam;
  awayTeam?: TTeam;
  score?: TScore;
  dateTime?: Date;
};
