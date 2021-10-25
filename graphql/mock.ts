import { TGroup } from "../models/groups";
import { TMatch } from "../models/match";
import { TTeam } from "../models/teams";
import { TTournament } from "../models/tournament";

export const mockTournaments: TTournament[] = [
  {
    id: "1",
    name: "Champions League",
    address: "Geneva, Switzerland",
    dateTime: new Date("2022/06/30"),
  },
  {
    id: "2",
    name: "Europa League",
    address: "Manchester, England",
    dateTime: new Date("2022/06/27"),
  },
  {
    id: "3",
    name: "Conference League",
    address: "Valencia, Spain",
    dateTime: new Date("2022/06/23"),
  },
];

export const mockTeams: TTeam[] = [
  {
    id: "1",
    name: "F.C. Barcelona",
  },
  {
    id: "2",
    name: "Real Madrid C.F.",
  },
  {
    id: "3",
    name: "Atletico de Madrid",
  },
  {
    id: "4",
    name: "Valencia C.F.",
  },
  {
    id: "5",
    name: "F.C. Sevilla",
  },
  {
    id: "6",
    name: "Athletic Bilbao",
  },
  {
    id: "7",
    name: "Real Sociedad",
  },
  {
    id: "8",
    name: "Real Betis",
  },
];

export const mockMatches: TMatch[] = [
  {
    id: "1",
    homeTeam: mockTeams[0],
    awayTeam: mockTeams[1],
    roundNumber: 1,
    score: {
      home: 1,
      away: 0,
    },
    dateTime: new Date(),
  },
  {
    id: "2",
    homeTeam: mockTeams[2],
    awayTeam: mockTeams[3],
    roundNumber: 1,
    dateTime: new Date(),
  },
];

export const mockGroups: TGroup[] = [
  {
    id: "1",
    name: "Group A",
    matches: mockMatches,
    teams: mockTeams,
  },
  {
    id: "2",
    name: "Group B",
    matches: [],
    teams: [],
  },
  {
    id: "3",
    name: "Group C",
    matches: [],
    teams: [],
  },
  {
    id: "4",
    name: "Group D",
    matches: [],
    teams: [],
  },
  {
    id: "5",
    name: "Group E",
    matches: [],
    teams: [],
  },
];
