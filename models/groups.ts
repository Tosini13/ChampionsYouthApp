import { Id } from "./global";
import { TMatch } from "./match";
import { TTeam } from "./teams";

export type TGroup = {
  id: Id;
  name: string;
  teams: TTeam[];
  matches: TMatch[];
};
