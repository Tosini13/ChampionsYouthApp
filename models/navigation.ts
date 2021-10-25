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
  TournamentMatch: { tournamentId: Id; matchId: Id };
  TournamentGroup: { tournamentId: Id; groupId: Id };
};

export type TTournamentsStackNavigationParams = {
  tournamentId?: Id;
  groupId?: Id;
  matchId?: Id;
};

export type TTopTabNavigation = {
  Info: { tournamentId: Id };
  Teams: { tournamentId: Id };
  Groups: { tournamentId: Id };
  PlayOffs: { tournamentId: Id };
};

export type TNavigation = TDrawerNavigation & TBottomTabNavigation;
