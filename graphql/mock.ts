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
