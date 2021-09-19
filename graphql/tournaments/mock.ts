import { TTournament } from "../../models/tournament";

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
