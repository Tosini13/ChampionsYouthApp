import { Id } from "./global";

export type TDrawerNavigation = {
  MainTournaments: {};
  CreateTournament: {};
};

export type TBottomTabNavigation = {
  MyTournament: {};
  FavoritesTournament: {};
  Tournaments: {};
};

export type TTournamentsStackNavigation = {
  TournamentsList: {};
  Tournament: { tournamentId: Id };
};

export type TNavigation = TDrawerNavigation & TBottomTabNavigation;
