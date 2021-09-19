import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { TDrawerNavigation } from "../../models/navigation";
import { StackNavigation } from "../Navigation/StackNavigation";

type TTournamentScreenProps = {} & DrawerScreenProps<
  TDrawerNavigation,
  "Tournaments"
>;
export const TournamentScreen: React.FC<TTournamentScreenProps> = ({
  navigation,
}) => {
  return <StackNavigation toggleDrawer={navigation.toggleDrawer} />;
};
