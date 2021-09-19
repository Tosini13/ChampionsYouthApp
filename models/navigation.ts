export type TDrawerNavigation = {
  Tournaments: {};
  CreateTournament: {};
};

export type StackNavigationStackParamList = {
  Tournament: { tournamentId: string };
  Tournaments: {};
};

export type TNavigation = TDrawerNavigation & StackNavigationStackParamList;
